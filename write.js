const fs = require("fs");
const { stringify } = require("querystring");

function createPerson(data) {
    fs.writeFileSync("./person.json", JSON.stringify(data));
}

createPerson({
    name: "Wina",
    adress: "Jakarta",
    age: "19",
});