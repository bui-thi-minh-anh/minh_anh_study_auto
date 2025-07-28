function getStudentNamesUpper(student){
    let nameUpperCase = students.map (mem => mem.name.toUpperCase());

    return {
        name_studen_uppercase: nameUpperCase
    }
}

function highScoreStudent(student){
    let studentHaveHighScore = students.filter (mem => mem.score >= 6.5);

    return {
        student_high_score: studentHaveHighScore
    }
}

function calculateAverageScore(students){
    let totalScore = students.reduce ((sum,mem) => sum += mem.score , 0);
    let averageScore = Math.round(totalScore / students.length * 10) / 10;

    return {
        averageScore_of_all_student: averageScore
    }
}
function printOneStudent(student, index){
    if (index >=0 && index < student.length){
        let mem  = student[index];
        return {
            name_student: mem.name ,
            score_student: mem.score,
            class_student: mem.class
        }
    }
    else{
        return "Dont has this student"
    }
}

function printAllStudent(student){
    student.sort((a,b) => b.score - a.score);
    let listStudentSort = "";

    for (let mem of student) {
        listStudentSort += `Student name: ${mem.name}\n`;
        listStudentSort += `Score: ${mem.score}\n`;
        listStudentSort += `Class: ${mem.class}\n`;
        listStudentSort += `---------------------------\n`;
    }

    return listStudentSort
}

function rankStudent (student){
    let sortListStudent = [...student].sort ((a,b) => b.score - a.score);
    let rankListStudent = "";

    student.forEach((a) => {
        let rank = sortListStudent.findIndex(b => b.name === a.name && b.class === a.class && b.score === a.score) + 1;

   rankListStudent += `
        Student name: ${a.name} \n
        Score : ${a.score} \n
        Class: ${a.class} \n
        rank: ${rank} \n
        ------------------------------ 
    `
     });
    return rankListStudent
}

let students = [
    { name: "Minh Anh", score: 8.5, class: "A" },
    { name: "Hoàng", score: 6.0, class: "B" },
    { name: "Lan", score: 9.2, class: "C" },
    { name: "Phương", score: 5.8, class: "B" },
    { name: "Nam", score: 7.0, class: "A" },
];

// console.log(getStudentNamesUpper(students));

// console.log(highScoreStudent(students));

// console.log(calculateAverageScore(students));

// console.log(printOneStudent(students,2));

// console.log(printAllStudent(students));

console.log(rankStudent(students));

