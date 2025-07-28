function printRankStudent(student){
    let newListSort = [...student].sort ((a,b) => b.score - a.score);
    let printlistHaveRank = "";
    
    student.forEach((a) => {
        let rank = newListSort.findIndex(b => b.name === a.name && b.score === a.score) + 1;
        printlistHaveRank += `
            Student name: ${a.name} \n
            Score: ${a.score} \n
            Rank: ${rank} \n
            --------------------------
        `
    });

    return printlistHaveRank;
}

let students = [
    { name: "Huy", score: 7.5 },
    { name: "Trang", score: 9.0 },
    { name: "Long", score: 8.2 },
    { name: "My", score: 6.9 },
    { name: "Tuấn", score: 9.0 }
];

console.log(printRankStudent(students));