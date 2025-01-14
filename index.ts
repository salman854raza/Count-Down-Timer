// project 9 in this project, you will buil a countdown timer using the date module.
import {differenceInSeconds } from 'date-fns';
import inquirer from "inquirer";

const res = await inquirer.prompt({
    type: "number",
    name: "userinput",
    message: "Enter amount of second",
    validate:(input) =>{
        if (isNaN(input)){
            return "Enter valid number"

        }else if(input>60){
            return "second must within 60"

        }else{
            return true;
        }
    }

});

let input = res.userinput

function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val)
    const intervalTime = new Date(intTime);
    setInterval(()=>{
        const currentTime = new Date() //time difference
        const timeDiff = differenceInSeconds(intervalTime,currentTime)
        if(timeDiff <=0){
            console.log("Time has expired")
            process.exit();
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)   //show minute kervana hai
        const sec = Math.floor(timeDiff% 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}}`)
    }, 1000);
}

startTime(input);
//console.log(date)
//console.log('intTime' + intervalTime);

//For Current second we use  .setSeconds()

