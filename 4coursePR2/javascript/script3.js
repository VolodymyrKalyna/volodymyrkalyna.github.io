let employees = [
    {
        name: "Олександр ",
        position: "Менеджер з продажу",
        salary: 20000,
        year: 8
    },
    {
        name: "Марія",
        position: "Фінансовий директор",
        salary: 25000,
        year: 6
    },
    {
        name: "Анна",
        position: "Маркетинговий спеціаліст",
        salary: 18000,
        year: 9
    },
]

function getAverageSalary(employees) {
    let sum = employees.reduce((acc, curr) => {
        return acc + curr.salary
    }, 0)
    return sum / employees.length
}

let averageSalary = getAverageSalary(employees)
console.log(averageSalary)

function findMostExperiencedEmployee(employees) {
    return employees.reduce((acc, curr) => {
        return (curr.year > acc.year) ? curr : acc
    })
}

let mostExperiancedEmployee = findMostExperiencedEmployee(employees)
console.log(mostExperiancedEmployee)

