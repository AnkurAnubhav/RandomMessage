function randomizer(num){
    return Math.floor(Math.random() * num)
}
let result = [];

function MessageGenerator(){

    
    const action = ["if you are constantly grinding", "if you wake up at 5AM everyday", "if you dont take any days off", "if you outwork everyone"];
    const exercise = ["your chest", "your arms", "your abs", "your legs"];
    const song = ["Im a beast", "Anxiety", "Warm Up", "Running"]
    
    let randomAction = randomizer(action.length);
    let randomExercise = randomizer(exercise.length);
    let randomSong = randomizer(song.length);

    result.push(`Your life will be better ${action[randomAction]}`);
    result.push(`Today you should work on ${exercise[randomExercise]}`);
    result.push(`The best song to go with this exercise is ${song[randomSong]}`);


    return result.join('\n');
}

console.log(MessageGenerator());