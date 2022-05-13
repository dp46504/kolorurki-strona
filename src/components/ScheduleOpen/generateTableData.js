import strings from "../../strings.json";

const dayNames = [
  "niedziela",
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
];

const combineColumnData = (date) => {
  const dayOfTheWeek = new Date(date).getDay();

  // Getting info
  let poleInfo = strings.OPEN.POLE.AVAILABILITY[dayOfTheWeek];
  let aerialInfo = strings.OPEN.AERIAL.AVAILABILITY[dayOfTheWeek];

  // Adding info
  poleInfo = poleInfo.map((info) => {
    return {
      type: "Pole",
      date: date,
      start: info[0],
      end: info[1],
    };
  });
  aerialInfo = aerialInfo.map((info) => {
    return {
      type: "Aerial",
      date: date,
      start: info[0],
      end: info[1],
    };
  });

  // Concatenate two arrays into one and add data about the date
  let columnData = [...poleInfo, ...aerialInfo];

  // Sort function
  const sortFunc = (a, b) => {
    return a.start - b.start;
  };
  columnData.sort(sortFunc);
  return {
    info: { dayName: dayNames[dayOfTheWeek], date: date },
    data: columnData,
  };
};

const generateTableData = (startDate, quantity = 5) => {
  let table = [];
  for (let i = 0; i < quantity; i++) {
    const columnData = combineColumnData(
      new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + i
      )
    );
    table.push(columnData);
  }

  return table;
};

export default generateTableData;
