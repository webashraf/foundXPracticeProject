interface IDate {
  calender: {
    identifier: string;
  };
  day: string;
  era: string;
  month: string;
  year: string;
}

const dateToISO = (date: IDate) => {
  if (!date) {
    return new Date().toISOString();
  }

  const { calender, day, era, month, year } = date;
  const isoDate = `${month}-${day}-${year}`;
  return new Date(isoDate).toISOString();
};

export default dateToISO;
