import { createInterface } from 'readline';

const InputModule = createInterface({
    input: process.stdin,
    output: process.stdout
});

const deails = { name: "", email: "", age: ""};

InputModule.question("What is your name? ", (nameAns) => {
    deails.name = nameAns 
    InputModule.question("What is your email? ", (emailAns) => {
        deails.email = emailAns;
        InputModule.question("What is you age? ", (ageAns) => {
            deails.age = ageAns;
            console.log("You details are: ", deails);
            InputModule.close();
        })
    })
})

