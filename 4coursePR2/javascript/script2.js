let students = [
    {
        name: "go",
        age: 32,
        grade: 10,
        group: "PI",
    },
    {
        name: "san",
        age: 18,
        grade: 11,
        group: "PI",
    },
    {
        name: "nana",
        age: 19,
        grade: 12,
        group: "KI",
    },
    {
        name: "hachi",
        age: 21,
        grade: 9,
        group: "KI",
    }
]

function groupBy(students) {
    return students.reduce((acc, curr) => {
        
        const groupName = curr.group;
        
        if (!acc[groupName]) {
            acc[groupName] = [];
        }
        
        acc[groupName].push(curr);
        
        return acc;

    }, {});
}

let groupedStudents = groupBy(students);

console.log(groupedStudents);

function sortStudentsByGrade(student) {
    student.sort((a, b)=> b.grade - a.grade);
    return students;
}

let sortedStudents = sortStudentsByGrade(students);

console.log(sortedStudents);