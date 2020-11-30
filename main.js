var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

var SCOPES = "https://www.googleapis.com/auth/calendar";

const testPrefix = "[Test] ";

var authorizeButton = document.getElementById("authorize_button");
var signoutButton = document.getElementById("signout_button");
function handleClientLoad() {
    gapi.load("client:auth2", initClient);
}

function initClient() {
    gapi.client
        .init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
        })
        .then(
            function () {
                // Listen for sign-in state changes.
                gapi.auth2
                    .getAuthInstance()
                    .isSignedIn.listen(updateSigninStatus);

                // Handle the initial sign-in state.
                updateSigninStatus(
                    gapi.auth2.getAuthInstance().isSignedIn.get()
                );
                authorizeButton.onclick = handleAuthClick;
                signoutButton.onclick = handleSignoutClick;
            },
            function (error) {
                appendPre(JSON.stringify(error, null, 2));
            }
        );
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = "none";
        signoutButton.style.display = "block";
    } else {
        authorizeButton.style.display = "block";
        signoutButton.style.display = "none";
    }
}

function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

function appendPre(message) {
    var pre = document.getElementById("content");
    var textContent = document.createTextNode(message + "\n");
    pre.appendChild(textContent);
}

let pushWholeDayEventToCalendar = (title, start, end, isTest = true) =>
    new Promise((resolve, reject) => {
        var event = {
            summary: isTest ? testPrefix + title : title,
            description: title,
            start: {
                date: start,
            },
            end: {
                date: end,
            },
        };

        var request = gapi.client.calendar.events.insert({
            calendarId: calendarId,
            resource: event,
        });

        request.execute(function (response) {
            resolve(true);
        });
    });
let pushToCalendar = (lesson, start, end, isTest = true) =>
    new Promise((resolve, reject) => {
        var event = {
            summary: isTest ? testPrefix + lesson : lesson,
            description: lesson,
            start: {
                dateTime: start,
            },
            end: {
                dateTime: end,
            },
        };

        var request = gapi.client.calendar.events.insert({
            calendarId: calendarId,
            resource: event,
        });

        request.execute(function (response) {
            resolve(true);
        });
    });

function datePlus40Min(date) {
    return new Date(date * 1 + 1000 * 60 * 40);
}

function datePlusMin(date, min) {
    return new Date(date * 1 + 1000 * 60 * min);
}

let sleep = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

async function archived() {
    return;
    for (let date in calendarData) {
        let day = calendarData[date];
        let dayLessons = dayLessonsLookup[day];

        for (let lesson in dayLessons) {
            let lessonNum = parseInt(lesson) + 1;
            let lessonName = subjectLookup[dayLessons[lesson]].name;

            let [lessonHour, lessonMin] = lessonTimeLookup[lessonNum];

            let startDateTime = new Date(date);
            startDateTime.setHours(lessonHour, lessonMin);
            let endDateTime = datePlus40Min(startDateTime);

            let success = await pushToCalendar(
                lessonName,
                startDateTime.toISOString(),
                endDateTime.toISOString()
            );
            await sleep(1000);

            console.log(
                `On ${date} (day ${day}) ${lessonHour}:${lessonMin} is #${lessonNum} ${lessonName}`
            );
            // console.log(startDateTime, endDateTime)
            counter++;
            // if (counter > endCounter) return true;
        }
    }
}

let getEvents = (nextPageToken) =>
    new Promise((resolve, reject) => {
        console.log(`Using page token ${nextPageToken}`);
        gapi.client.calendar.events
            .list({
                calendarId: calendarId,
                timeMin: new Date().toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 100,
                orderBy: "startTime",
                pageToken: nextPageToken,
            })
            .then(function (response) {
                // console.log(response);
                resolve(response);
            });
    });

let getAllEvents = async () => {
    let done = false;
    let events = [];
    let pageToken;
    while (!done) {
        var response = await getEvents(pageToken);
        events = [...events, ...response.result.items];

        if (pageToken == response.result.nextPageToken) break;
        if (!response.result.nextPageToken) {
            done = true;
        } else {
            pageToken = response.result.nextPageToken;
            console.log(`Got next page: ${pageToken}`);
        }
        // console.log("test");
        // done = true;
    }
    return events;
};

function removeEventFromCalendar(eventId) {
    let request = gapi.client.calendar.events.delete({
        calendarId: calendarId,
        eventId: eventId,
    });
    return new Promise((resolve, reject) => {
        request.execute(function (event) {
            console.log(`Removed Event with ID ${eventId}`);
            resolve(event);
        });
    });
}

async function pushDayToCalendar(date, day, isTest = false) {
    // let startDateTime = new Date(date);
    // startDateTime.setHours(08, 20);
    // let endDateTime = datePlusMin(startDateTime, 10);
    await pushWholeDayEventToCalendar(`Day ${day}`, date, date, isTest);
    await sleep(1000);
    console.log(`Pushed day ${day} for ${date}`);
}

async function pushDayLessonsToCalendar(date, day, isTest = false) {
    for (var i in day.lessons) {
        const lesson = day.lessons[i];
        let startDateTime = new Date(date);
        startDateTime.setHours(lesson.startTime[0], lesson.startTime[1]);
        let endDateTime = datePlusMin(startDateTime, lesson.timeLast);
        // console.log({
        //     lesson: lesson,
        //     name: lesson.subject.name,
        //     startDateTime,
        //     endDateTime,
        // });
        await pushToCalendar(
            lesson.subject.name,
            startDateTime.toISOString(),
            endDateTime.toISOString(),
            isTest
        );
        await sleep(1000);
        console.log(
            `Pushed ${lesson.subject.name} @ ${date} ${lesson.startTime.join(
                ":"
            )} for ${lesson.timeLast}min`
        );
    }
}

async function pushLessons(isTest = true) {
    for (var date in dateDayMap) {
        const day = dateDayMap[date];
        await pushDayLessonsToCalendar(date, days[day], isTest);
        await sleep(500);
        console.log(`Finished pushing day ${day} for ${date}`);
    }
}

async function pushDays(isTest = true) {
    for (var date in dateDayMap) {
        const day = dateDayMap[date];
        // await pushDayLessonsToCalendar(date, days[day], isTest);
        await pushDayToCalendar(date, day, isTest);
        await sleep(500);
        console.log(`Finished pushing day ${day} for ${date}`);
    }
}

async function removeTestEvents(notTest = false) {
    var events = await getAllEvents();
    events = events.filter((event) => event.start.dateTime);
    for (var event of events) {
        let isTestEvent = event.summary.startsWith(testPrefix);
        if (isTestEvent || notTest) {
            await removeEventFromCalendar(event.id);
            // await sleep(1000);
        }
    }
    console.log("Cleared all test events");
}

// test();
