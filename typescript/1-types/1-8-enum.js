{
    /**
     * Enum
     */
    // JavaScript
    var MAX_NUM = 6;
    var MAX_STUDENTS_PER_CLASS = 10;
    var MONDAY = 0;
    var TUESDAY = 1;
    var WEDNESDAY = 2;
    var DAYS_ENUM = Object.freeze({ "MONDAY": 0, 'TUESDAY': 1, 'WEDNESDAY': 2 });
    var dayOfToday = DAYS_ENUM.MONDAY;
    // TypeScript
    var Days = void 0;
    (function (Days) {
        Days[Days["Monday"] = 0] = "Monday";
        Days[Days["Tuesday"] = 1] = "Tuesday";
        Days[Days["Wednesday"] = 2] = "Wednesday";
        Days[Days["ThursDay"] = 3] = "ThursDay";
        Days[Days["Friday"] = 4] = "Friday";
        Days[Days["Saturday"] = 5] = "Saturday";
        Days[Days["Sunday"] = 6] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days.Friday);
    var day = Days.Saturday;
    day = Days.ThursDay;
    day = 1;
    console.log(day);
}
