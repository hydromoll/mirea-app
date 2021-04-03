const formatePairData = (pair, type) => {
  return {
    name: pair.name,
    room: pair.room,
    professor: pair.professor,
    type: pair.type,
  };
};

const convertScheduleData = (data) => {
  const { schedule } = data;
  let convertedData = [];
  schedule.forEach((globalPair) => {
    const { day, number, info: pairs, interval, type } = globalPair;

    const updatePair = {
      info: {},
      startTime: interval.startTime,
      endTime: interval.endTime,
      number: number,
      day: day,
    };

    pairs.forEach((pair) => {
      const weekType = pair.weeks;
      if (weekType === "odd") {
        updatePair.info[weekType] = formatePairData(pair, type);
      } else if (weekType === "even") {
        updatePair.info[weekType] = formatePairData(pair, type);
      } else if (weekType.includes(",")) {
        const parsedWeeks = weekType.split(",");
        parsedWeeks.forEach((weekNumber) => {
          updatePair.info[weekNumber] = formatePairData(pair, type);
        });
      } else if (weekType.length === 1) {
        updatePair.info[weekType] = formatePairData(pair, type);
      }
    });
    convertedData.push(updatePair);
  });

  convertedData = convertedData.sort(
    (pairs, newPairs) => pairs.day - newPairs.day
  );

  return convertedData;
};

export default convertScheduleData;

// week is odd, even, number "3,7" and "3"

// adapted data
/*[
  {
    startTime: "",
    endTime: "",
    day: "",
    number: "",
    info: {
      even: {
        name: "",
        room: "",
        professor: "",
        type: "",
      },
      odd: {},
      3: {},
      7: {},
    },
  },
];*/
