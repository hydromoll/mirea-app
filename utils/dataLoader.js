import convertScheduleData from "./daysAdapter";
import getWeekNumber from "./calculateWeek";

export function getDaySchedule(weekSchedule, dayNumber) {
  return weekSchedule
    .slice(dayNumber * 6, 6 + 6 * dayNumber)
    .sort((pairs, newPairs) => pairs.number - newPairs.number)
    .map((pair, index) => {
      pair.key = index.toString();
      return pair;
    });
}

export function loadSchedule(callbackSchedule, callbackLoading, setStartSemesterDate, setWeekNumber, setWeekName, groupName) {
  fetch(`http://api.mirea-assistant.ru/schedule?group=${groupName}`)
    .then(scheduleRes => scheduleRes.json().then((schedule) => {
      callbackSchedule(convertScheduleData(schedule));
      const semesterStartDate = schedule.semester.startDate;
      const currentWeekNumber = getWeekNumber(semesterStartDate, new Date());
      setWeekNumber(currentWeekNumber);
      setWeekName(currentWeekNumber % 2 ? "odd" : "even");
      setStartSemesterDate(semesterStartDate);
    }))
    .catch((error) => console.error(error))
    .finally(() => callbackLoading(false));
}

export function loadGroups(callbackGroup, callbackLoading) {
  fetch("http://api.mirea-assistant.ru").then(groupsRes => groupsRes.json().then((groups) => {
    callbackGroup(groups);
  }))
    .catch((error) => console.error(error))
    .finally(() => callbackLoading(false));
}
