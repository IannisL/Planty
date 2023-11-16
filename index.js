// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.( theres 3 weeks)
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
const pi = 3.1415;
const radius = 5;
const area = pi * radius * radius; // area = max capacity

const plantSpace = 0.8;
const startPlant = 100;
let weeks = ("e");

let plantsDouble = startPlant * 2 ** weeks;

let currentCapacity = plantSpace * plantsDouble;
let capPercent = currentCapacity / area
//  "1 plant it 2 prune it 3 prune it"



// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.


// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.


// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.








// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens.
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

 let part2 = "81920 arean needed for plants after 10 weeks"




// Part 3: Errors in Judgement
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

try {
    if (capPercent >= 0.8 || capPercent >= 1) {
        console.log("need to prune", currentCapacity, capPercent );
    } else if (capPercent <= 0.8 && capPercent > 0.5) {
        console.log("We good");
    } else {
        console.log("plant it")
    }   
} catch (error) {
    console.log("donesnt work dumbmmy")
}



























// count down from 10 to 1 
// for (let i = 10; i >= 1; i --) {
// console.log ('i is : $(i)')
// }
//  console.log("now checking if ($(i))")
// for (let i = 1; i <= 10; i += 2) {
// if (i % 2 == 0) {
//     console.log("$(i) is even")
// } else 
// console.log("$(i) is odd")
// }
// for (let i = 0; i <=60; i++) {
//     if ( (i) % 3 == 0 ) {
//         console.log("$(i) is a multiple of 3")
//     } else
//     console.log("$(i) is not a  multiple of 3")
// }
// let symbol = "";

// for (let i = 1; i <= 7; i++) {

//     symbol += "#";


//     console.log(symbol);
// }









































