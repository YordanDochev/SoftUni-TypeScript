var dayOfWeekEnum;
(function (dayOfWeekEnum) {
    dayOfWeekEnum[dayOfWeekEnum["Monday"] = 1] = "Monday";
    dayOfWeekEnum[dayOfWeekEnum["Thuesday"] = 2] = "Thuesday";
    dayOfWeekEnum[dayOfWeekEnum["Wednesday"] = 3] = "Wednesday";
    dayOfWeekEnum[dayOfWeekEnum["Thursday"] = 4] = "Thursday";
    dayOfWeekEnum[dayOfWeekEnum["Friday"] = 5] = "Friday";
    dayOfWeekEnum[dayOfWeekEnum["Saturday"] = 6] = "Saturday";
    dayOfWeekEnum[dayOfWeekEnum["Sunday"] = 7] = "Sunday";
})(dayOfWeekEnum || (dayOfWeekEnum = {}));
function dayOfWeek(day) {
    const presendDay = dayOfWeekEnum[(day.charAt(0).toUpperCase() +
        day.slice(1).toLowerCase())];
    if (presendDay === undefined) {
        return console.log("error");
    }
    else {
        return console.log(presendDay);
    }
}
dayOfWeek("asd");
//# sourceMappingURL=app.js.map