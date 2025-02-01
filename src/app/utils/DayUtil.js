export const initializeDays = (size) => {
  let days = [];
  for (let i = 1; i < size + 1; i++) {
    days.push({
      id: i,
      number: i,
      diet: "",
      workout: {
        first: "",
        second: "",
      },
      book: {
        title: "",
        pages: 10,
      },
      rating: 0,
      checkboxes: {
        diet: false,
        water: false,
        workout: false,
        book: false,
        progressPhoto: false
      }
    });
  }
  return days;
};

export const getDayFromNumber = (days, number) => {
  return days.find((d) => d.number == number);
};

export const addDays = (date, number) => {
  let d = new Date(date);
  d.setDate(d.getDate() + number - 1);
  return d;
};

export const isBeforeToday = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date < today;
}