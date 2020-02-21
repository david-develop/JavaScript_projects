// Circle object with following properties: radius, circumference() - returns circumference of circle, area() - returns area of circle

const circle = {
  radius: 5,

  circumference () {
    return 2 * Math.PI * this.radius;
  },
  area () {
    return Math.PI ** 2;
  }
};
