const students = [
    {
        name: 'Matheus',
        old: 21,
        country: 'Brasil'
    },
    {
        name:'Isa',
        old: 30,
        country: 'EUA'
    }, 
    {
        name: 'Pedro',
        old: 14,
        country: 'Espanha'
    }
];

function getStudents(studentsList) {
    return studentsList.filter(students => students.country == 'Espanha');
}

const getStudentsOld = getStudents(students);

console.log(students);
console.log(getStudentsOld);