const normalizeDaysArray = (arr) => {
  const sortedSchedule = [...arr.sort((a, b) => new Date(a.date) - new Date(b.date))];
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric'
  };

  sortedSchedule.forEach((pair) => {
    pair.date = new Date(pair.date).toLocaleString('ru-RU', options);
  });
  // for (let i = 0; i < sortedSchedule.length; i + 1) {
  //   sortedSchedule[i].date = new Date(sortedSchedule[i].date).toLocaleString('ru-RU');
  //   console.log(sortedSchedule[i]);
  // }
  return sortedSchedule;
};

export default normalizeDaysArray;
