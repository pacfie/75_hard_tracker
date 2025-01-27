export default class DayClass {
    constructor(id, number, diet, workout, book, water = true, photo = true ) {
      this.id = id;
      this.number = number;
      this.diet = diet;
      this.workout = workout;
      this.water = water;
      this.book = book;
      this.photo = photo;
    }
  }