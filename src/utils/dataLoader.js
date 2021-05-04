export function getDaySchedule(weekSchedule, dayNumber) {
  return weekSchedule
    .slice(dayNumber * 6, 6 + 6 * dayNumber)
    .sort((pairs, newPairs) => pairs.number - newPairs.number)
    .map((pair, index) => {
      pair.key = index.toString();
      return pair;
    });
}

export function loadSchedule(groupName) {
  return fetch(`http://api.mirea-assistant.ru/schedule?group=${groupName}`)
    .then((scheduleRes) => scheduleRes.json());
  //   .then((schedule) => {
  // }))
  // .catch((error) => console.error(error))
  // .finally(() => callbackLoading(false));
}

export function loadSession(type, groupName) {
  return fetch(`http://api.mirea-assistant.ru/${type === 'Зачёты' ? 'tests' : 'exams'}?group=${groupName}`)
    .then((scheduleRes) => scheduleRes.json());
}

export function loadGroups(callbackGroup, callbackLoading) {
  fetch('http://api.mirea-assistant.ru')
    .then((groupsRes) => groupsRes.json()
      .then((groups) => {
        callbackGroup(groups);
      }))
    .catch((error) => console.error(error))
    .finally(() => callbackLoading(false));
}
