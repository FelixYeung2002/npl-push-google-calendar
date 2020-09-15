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
            startTime: [15, 30],
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
            startTime: [15, 30],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["CHI"],
            startTime: [16, 10],
            timeLast: 40,
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
            startTime: [15, 30],
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
            startTime: [15, 30],
            timeLast: 40,
        }),
        ,
        new Lesson({
            subject: subjects["CHEM"],
            startTime: [16, 10],
            timeLast: 40,
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
            startTime: [15, 30],
            timeLast: 40,
        }),
        ,
        new Lesson({
            subject: subjects["MAT"],
            startTime: [16, 10],
            timeLast: 40,
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
            startTime: [15, 30],
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
            subject: subjects["LS"],
            startTime: [12, 45],
            timeLast: 40,
        }),
        new Lesson({
            subject: subjects["ICT"],
            startTime: [15, 30],
            timeLast: 40,
        }),
        ,
        new Lesson({
            subject: subjects["ICT"],
            startTime: [16, 10],
            timeLast: 40,
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
            startTime: [15, 30],
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
            startTime: [15, 30],
            timeLast: 40,
        }),
        ,
        new Lesson({
            subject: subjects["PHY"],
            startTime: [16, 10],
            timeLast: 40,
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
            startTime: [15, 30],
            timeLast: 40,
        }),
        ,
        new Lesson({
            subject: subjects["LS"],
            startTime: [16, 10],
            timeLast: 40,
        }),
    ],
});

const dateDayMap = {
    // "2020-09-04": 1,
    // "2020-09-07": 2,
    // "2020-09-08": 3,
    // "2020-09-09": 4,
    // "2020-09-10": 5,
    // "2020-09-11": 6,
    // "2020-09-14": 7,
    // "2020-09-15": 8,
    "2020-09-16": 9,
    "2020-09-17": 10,
    "2020-09-18": 1,
    "2020-09-21": 2,
    "2020-09-22": 3,
    "2020-09-23": 4,
    "2020-09-24": 5,
    "2020-09-25": 6,
    "2020-09-28": 7,
    // "2020-09-29": 8,
    // "2020-09-30": 9,
    // "2020-10-05": 10,
    // "2020-10-06": 1,
    // "2020-10-07": 2,
    // "2020-10-08": 3,
    // "2020-10-09": 4,
    // "2020-10-12": 5,
    // "2020-10-13": 6,
    // "2020-10-14": 7,
    // "2020-10-15": 8,
};
