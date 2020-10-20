let name = "Alana Frank";
let age = 32;
let birthday = "February 7";
let detroitGC = true;
let lifeEvents = [
  "I was born in Detroit",
  "I traveled with the renaissance festival for three years",
  "I moved to Hamtramck",
  "I started GC Bootcamp",
];
if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}
for (let item of lifeEvents) {
  console.log(item);
}
let counter = 0;
let randomNumber = makeRandom();
function makeRandom() {
  return Math.floor(Math.random() * 10) + 1;
}
while (randomNumber !== 5) {
  counter++;
  console.log(`${randomNumber} !==5`);
  randomNumber = makeRandom();
}
if (randomNumber === 5) {
  counter++;
  console.log(
    `It took ${counter} iterations to randomly generate the number 5`
  );
}
