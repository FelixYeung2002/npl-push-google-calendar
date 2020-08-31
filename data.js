class Subject {
    constructor({ name = "" }) {
        this.name = name;
    }
}

class Lesson {
    constructor({
        subject = new Subject(),
        startTime = [8, 15],
        timeLast = 40,
    }) {
        this.timeLast = timeLast;
        this.subject = subject;
        this.startTime = startTime;
    }
}

class Day {
    constructor({ day = 0, lessons = [] }) {
        this.day = day;
        this.lessons = lessons;
    }
}

const subjects = {};
subjects["CHI"] = new Subject({
    name: "Chinese Language Lesson",
});
subjects["ENG"] = new Subject({
    name: "English Language Lesson",
});
subjects["MAT"] = new Subject({
    name: "Mathematics Lesson",
});
subjects["M1"] = new Subject({
    name: "Mathematics (Module 1) Lesson",
});
subjects["PHY"] = new Subject({
    name: "Physics Lesson",
});
subjects["CHEM"] = new Subject({
    name: "Chemistry Lesson",
});
subjects["ICT"] = new Subject({
    name: "Information and Communication Technology Lesson",
});
subjects["LS"] = new Subject({
    name: "Liberal Studies Lesson",
});
subjects["CLASS"] = new Subject({
    name: "Class Period",
});
subjects["LE"] = new Subject({
    name: "Life Education Lesson",
});
subjects["PE"] = new Subject({
    name: "Physical Education Lesson",
});

const days = {};
days[1] = new Day({
    day: 1,
    lessons: [
        new Lesson({
            subject: subjects["LS"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["MAT"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ENG"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["M1"],
            startTime: [14, 30],
            timeLast: 40,
        }),
    ],
});
days[2] = new Day({
    day: 2,
    lessons: [
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["MAT"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["PHY"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ICT"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["LS"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [14, 30],
            timeLast: 150,
        }),
    ],
});
days[3] = new Day({
    day: 3,
    lessons: [
        new Lesson({
            subject: subjects["LS"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ENG"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ENG"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["PHY"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ICT"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["M1"],
            startTime: [14, 30],
            timeLast: 40,
        }),
    ],
});
days[4] = new Day({
    day: 4,
    lessons: [
        new Lesson({
            subject: subjects["ICT"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["PHY"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["MAT"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [14, 30],
            timeLast: 150,
        }),
    ],
});
days[5] = new Day({
    day: 5,
    lessons: [
        new Lesson({
            subject: subjects["PHY"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["PHY"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ICT"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ICT"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ENG"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ENG"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["MAT"],
            startTime: [14, 30],
            timeLast: 150,
        }),
    ],
});
days[6] = new Day({
    day: 6,
    lessons: [
        new Lesson({
            subject: subjects["ENG"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["PE"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["PE"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ICT"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["M1"],
            startTime: [14, 30],
            timeLast: 40,
        }),
    ],
});
days[7] = new Day({
    day: 7,
    lessons: [
        new Lesson({
            subject: subjects["PHY"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ICT"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["MAT"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ENG"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ICT"],
            startTime: [14, 30],
            timeLast: 150,
        }),
    ],
});
days[8] = new Day({
    day: 8,
    lessons: [
        new Lesson({
            subject: subjects["ICT"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["PHY"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ENG"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["MAT"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["M1"],
            startTime: [14, 30],
            timeLast: 40,
        }),
    ],
});
days[9] = new Day({
    day: 9,
    lessons: [
        new Lesson({
            subject: subjects["MAT"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["MAT"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["LS"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["LS"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["PHY"],
            startTime: [14, 30],
            timeLast: 150,
        }),
    ],
});
days[10] = new Day({
    day: 10,
    lessons: [
        new Lesson({
            subject: subjects["LS"],
            startTime: [8, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ICT"],
            startTime: [9, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ENG"],
            startTime: [10, 15],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["MAT"],
            startTime: [11, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["PHY"],
            startTime: [12, 00],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["LE"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["LS"],
            startTime: [14, 30],
            timeLast: 150,
        }),
    ],
});

const dateDayMap = {
    "2020-09-03": 1,
    "2020-09-04": 2,
    "2020-09-05": 3,
};
