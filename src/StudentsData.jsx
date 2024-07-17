const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const departments = ["Science", "Arts", "Commerce"];

const students = [];
const specificNames = [
  "Kayle",
  "Eddie",
  "Jefferson",
  "Jhon",
  "Orencio",
  "Kessie",
  "Joma Lay",
  "Martin",
  "Batang",
  "Jihoz",
];
const numberOfSpecificStudents = specificNames.length;

for (let i = 0; i < 10; i++) {
  const student = {
    name: i < numberOfSpecificStudents ? specificNames[i] : `Student${i + 1}`,
    department: departments[getRandomInt(0, departments.length - 1)],
    finalGrade: 0,
    status: "",
  };

  if (i < 8) {
    student.status = "Pass";
    student.finalGrade = getRandomInt(60, 100);
  } else {
    student.status = "Fail";
    student.finalGrade = getRandomInt(0, 59);
  }

  students.push(student);
}

export default students;
