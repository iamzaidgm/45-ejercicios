const readlineSync = require('readline-sync');

let numCourses = readlineSync.question("Enter the number of courses: ");
let numStudents = readlineSync.question("Enter the number of students per course: ");

const qualificationsPerCourse = [];

for (let z = 0; z < numCourses; z++) 
{
    const students = [];
    for (let x = 0; x < numStudents; x++) 
    {
        const qualification = readlineSync.questionFloat(`Enter the qualification the student got ${x + 1} in the subject ${z + 1}: `);
        students.push(qualification);
    }
    qualificationsPerCourse.push(students);
}

console.log(qualificationsPerCourse);