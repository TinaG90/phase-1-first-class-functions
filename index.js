// function runFiveMiles(){
//     console.log("Go for a five-mile run");
//     }
// function liftWeights(){
//     console.log("Pump iron");
//     }
// function swimFortyLaps(){
//     console.log("Swim 40 laps");
//     }
// function Monday(){
//     exerciseRoutine(liftWeights);
// }
// function exerciseRoutine(postRunActivity){
//     runFiveMiles();
//     postRunActivity();
// }

// exerciseRoutine(()=> console.log("Stretch! Work that core!"));

// function morningRoutine(exercise){
//     let breakfast;

//     if (exercise === liftWeights){
//         breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps){
//         breakfast = "kale smoothie";
//     }
//       else {
//         breakfast = "granola";
//       } 

//       return function (){
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//       }
// }

// const afterExercise = morningRoutine(liftWeights);

// afterExercise();

// To pass test

function callback(){
    console.log("Hello World!");
}



function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return  function receivesAFunction(named){
        console.log(named);
    }
}

function returnsAnAnonymousFunction(){
    return function(noName){
        console.log(noName);}
}

receivesAFunction()