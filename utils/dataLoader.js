import convertScheduleData from "./daysAdapter";

function getDaySchedule(weekSchedule, routeNumber) {
  return weekSchedule
    .slice(routeNumber * 6, 6 + 6 * routeNumber)
    .sort((pairs, newPairs) => pairs.number - newPairs.number)
    .map((pair, index) => {
      pair.key = index.toString();
      return pair;
    });
}

export function loadSchedule(callbackSchedule, callbackLoading, routeNumber) {
  fetch("http://api.mirea-assistant.ru/schedule?group=ivbo-08-19")
    .then(scheduleRes => scheduleRes.json().then((schedule) => {
      callbackSchedule(getDaySchedule(convertScheduleData(schedule), routeNumber));
    }))
    .catch((error) => console.error(error))
    .finally(() => callbackLoading(false));
}
