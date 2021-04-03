import convertScheduleData from "./daysAdapter";

export function getDaySchedule(weekSchedule, dayNumber) {
  return weekSchedule
    .slice(dayNumber * 6, 6 + 6 * dayNumber)
    .sort((pairs, newPairs) => pairs.number - newPairs.number)
    .map((pair, index) => {
      pair.key = index.toString();
      return pair;
    });
}

export function loadSchedule(callbackSchedule, callbackLoading, groupName) {
  fetch(`http://api.mirea-assistant.ru/schedule?group=${groupName}`)
    .then(scheduleRes => scheduleRes.json().then((schedule) => {
      callbackSchedule(convertScheduleData(schedule));
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
