import inquirer from "inquirer";

let convertion = {
    "PKR": {
        "USD":0.0036,
        "GBP":0.0028,
        "PKR":1
    },
    "USD": {
        "PKR":279.96,
        "GBP":0.79,
        "USD":1
    },
    "GBP": {
        "USD":1.27,
        "PKR":354.99,
        "GBP":1
    }
}

const answer:{
    from: "PKR" | "USD" | "GBP",
    amount: number,
    to: "PKR" | "USD" | "GBP"
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR","USD","GBP"],
        message: "Select Your Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Provide the amount"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR","USD","GBP"],
        message: "Select Convertion"
    }
]);

const{from, amount, to} = answer;

if(from && amount && to){
   let result = convertion[from][to] * amount
   console.log(`Your converted amount from ${from} to ${to} is ${result}`)
}else{
    console.log("Invalid information");
}