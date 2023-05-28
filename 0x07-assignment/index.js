let name = prompt("what is your full name:");
let gender = prompt("my gender is:");
let age = parseInt("enter your age:");
let storyName = prompt("enter the title of your story:")
let characterName = prompt("enter the name of another character:")
let locate = prompt("enter a location:");
let adjective = prompt("enter an adjective:");
let verb = prompt("enter a verb:");
let objectName = prompt('enter the name of an object:')
let istrue = prompt("true or false:");
let region = prompt("i come from:");
let profession = prompt("my profession is:");
let nationality = prompt("nationtionality is :");
let food = prompt("the food i like is:");
let game = prompt("the game i like is:");

function greatStory(){
    let story = `my name is ${name} .I am ${age} years old .I am a Female .I  am a Ghananian .I
    come from ${region} but i stay at Adentan in the Greater Accra Region of Ghana.Accra
    I am a ${profession}.I am a ${gender}, I  am a ${nationality}..I love to read and listen to 
    .The ${food} .The ${games}.I like to${verb}.`;
    return story;

}
let storeStory = greatStory();
print(storeStory);










 