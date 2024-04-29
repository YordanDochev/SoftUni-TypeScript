enum dayOfWeekEnum {
  Monday = 1,
  Thuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function dayOfWeek(day: string): void {
  const presendDay: dayOfWeekEnum =
    dayOfWeekEnum[
      (day.charAt(0).toUpperCase() +
        day.slice(1).toLowerCase()) as keyof typeof dayOfWeekEnum
    ];

  if (presendDay === undefined) {
    return console.log("error");
  } else {
    return console.log(presendDay);
  }
}

dayOfWeek("asd");
