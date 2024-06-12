/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// 1st implementation

enum DayOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY;
}

// 2nd implementation

// enum WorkDay {
//   MONDAY,
//   TUESDAY,
//   WEDNESDAY,
//   THURSDAY,
//   FRIDAY,
// }

// enum Weekend {
//   SATURDAY,
//   SUNDAY,
// }

// function isWeekend(day: WorkDay | Weekend): boolean {
//   return day in Weekend;
// }
