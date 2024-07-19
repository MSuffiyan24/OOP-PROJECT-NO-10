import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    student = [];
    addStudent(obj) {
        this.student.push(obj);
    }
}
const persons = new Person();
const Programstart = async (persons) => {
    do {
        console.log("*********Welcome*********");
        const ans = await inquirer.prompt([
            {
                name: "Select",
                type: "list",
                message: "Please select your desire option",
                choices: ['Teachers', 'Student', 'Exit'].map(choice => ({ name: choice, value: choice }))
            }
        ]);
        if (ans.Select === "Teachers") {
            console.log('Please come in the staff room for any query');
        }
        else if (ans.Select == 'Student') {
            const answer = await inquirer.prompt([
                {
                    name: "students",
                    type: "input",
                    message: "please enter student name"
                }
            ]);
            const students = persons.student.find(val => val.name == answer.students);
            if (!students) {
                const newStudent = new Student(answer.students);
                persons.addStudent(newStudent);
                console.log(`Hello, i am ${newStudent.name} please to meet you`);
                console.log('New Student added');
                console.log("Current student list:");
                console.log(persons.student);
            }
            else {
                console.log(`Hello, i am ${students.name} Nice meeting you again`);
                console.log("Existing student list:");
                console.log(persons.student);
            }
        }
        else if (ans.Select === "Exit") {
            console.log('program ended');
            process.exit();
        }
    } while (true);
};
Programstart(persons);
