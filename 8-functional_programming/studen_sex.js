// Compute and return the female students results (name and average grade).

const students = [
  {
    name: 'Anna',
    sex: 'f',
    grades: [4.5, 3.5, 4]
  },
  {
    name: 'Dennis',
    sex: 'm',
    country: 'Germany',
    grades: [5, 1.5, 4]
  },
  {
    name: 'Martha',
    sex: 'f',
    grades: [5, 4, 2.5, 3]
  },
  {
    name: 'Brock',
    sex: 'm',
    grades: [4, 3, 2]
  }
];

function studentResult (students) {
  return students.filter((stud) => stud.sex === 'f');
}

console.log(studentResult(students));
