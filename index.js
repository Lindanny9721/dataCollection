//Part One & Two
let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
console.log(data);
let newData = data.split(/\n/);
let columns = newData.length;
let cellData = [];
for (let i = 0; i < columns; i++)
{
    cellData[i] = newData[i].split(/,/);
}
console.log(cellData);
//Part Three
let keys = cellData[0];
let dataBase = [];
for (let i = 1; i < cellData.length; i++) {
    let rows = cellData[i];
    let obj = {};
    for (let j = 0; j < keys.length; j++) {
        obj[keys[j].toLowerCase()] = rows[j];
    }
    dataBase.push(obj);
}
//Part Four
dataBase.pop();
dataBase.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" });
dataBase.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(dataBase)
let sum = 0;
for (let key in dataBase)
{
    sum += Number(dataBase[key].age);
}
console.log("Average age: " + sum/dataBase.length);


//Part 5
let headKeys = Object.keys(dataBase[0]);
let combine = headKeys.join(",") + "\n";
let csv = [];
let convertedCSV = "";
csv.push(combine);
for (let i in dataBase)
{
    const row = [];
    for(let j = 0; j < headKeys.length; j++)
    {
        row.push(dataBase[i][headKeys[j]]);
    }
    csv.push(row.join(",") + "\n");
}
for (let i = 0; i < csv.length; i++)
{
    convertedCSV += csv[i].toString();
}
console.log(convertedCSV);