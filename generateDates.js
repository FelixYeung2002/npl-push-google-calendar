function generateDates({ start, end, weekdayOnly, rejects = [], startDay }) {
    function prettyDate(date) {
        return date.toISOString().slice(0, 10);
    }
    let count = startDay;
    let result = {};

    let startDate = new Date(start);
    let endDate = new Date(end);

    let processingDate = new Date(startDate);
    while (processingDate <= endDate) {
        if (!rejects.includes(prettyDate(processingDate))) {
            if (weekdayOnly) {
                if (
                    !(
                        processingDate.getDay() == 0 ||
                        processingDate.getDay() == 6
                    )
                ) {
                    result[prettyDate(processingDate)] = count;
                    count++;
                }
            } else {
                result[prettyDate(processingDate)] = count;
                count++;
            }
        }
        count = ((count - 1) % 10) + 1;
        processingDate = new Date(processingDate * 1 + 1000 * 60 * 60 * 24);
    }

    console.log(startDate);

    return result;
}

let result = generateDates({
    startDay: 1,
    start: "2020-09-04",
    end: "2020-10-31",
    rejects: [
        "2020-10-01",
        "2020-10-02",
        "2020-10-16",
        "2020-10-19",
        "2020-10-20",
        "2020-10-21",
        "2020-10-22",
        "2020-10-23",
        "2020-10-26",
        "2020-10-27",
        "2020-10-28",
        "2020-10-29",
        "2020-10-30",
        "2020-10-31",
    ],
    weekdayOnly: true,
});
console.log(result);
