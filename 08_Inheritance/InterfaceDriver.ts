import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let array: Coach[] = [];

array.push(myCricketCoach);
array.push(myGolfCoach);

for(let tempCoach of array){
    console.log(tempCoach.getDailyWorkout())
}