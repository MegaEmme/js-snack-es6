console.log("Mike's snacks 6");

const lighterBikeElement = document.getElementById('lighterBike');

console.log(lighterBikeElement);

//*********************************************
//SNACK 1 
// ********************************************
//
// cretae array
//
// const bikes = [
//     {
//         nome : "Basso",
//         peso : 10
//     },
//     {
//         nome : "Bianchi",
//         peso : 16
//     },
//     {
//         nome : "Colnago",
//         peso : 14
//     },
//     {
//         nome : "Pinarello",
//         peso : 9
//     },
//     {
//         nome : "Cinelli",
//         peso : 18
//     },
//     {
//         nome : "Cipollini",
//         peso : 7
//     },
//     {
//         nome : "Olmo",
//         peso : 11
//     },
//     {
//         nome : "Wilier",
//         peso : 8
//     }
// ];
//
// console.log(bikes);
//
// // create function
//
// function lighterBike (bike){
//     let lighterbike = bike[0];
//
//     for(let i=1; i<bike.length;i++){
//
//         if(bike[i].peso < lighterbike.peso){
//             lighterbike = bike[i];
//         }
//     }
//     return lighterbike;
// }
//
// // result
//
// const result = lighterBike(bikes);
//
// console.log(result); 
//
// lighterBikeElement.innerHTML= (`La bici più leggera è: ${result.nome}, con un peso di ${result.peso} kg.`);


//*********************************************
//SNACK 2
// ********************************************

// create array

const footballteams = [
    {
        nome : "Roma",
        punti : 0,
        falli : 0
    },
    {
        nome : "Lazio",
        punti : 0,
        falli : 0
    },
    {
        nome : "Inter",
        punti : 0,
        falli : 0
    },
    {
        nome : "Milan",
        punti : 0,
        falli : 0
    }
]

console.log(footballteams);

// create function randomNumbers

function randomNumbers (min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get random numbers

for(let i = 0; i<footballteams.length;i++){
    footballteams[i].punti = randomNumbers(0,100);
    footballteams[i].falli = randomNumbers(0,200);
}

// create new array nomi e falli

const updatedFootbalTeams = [];

// push nomi e falli updated

for (let i=0;i<footballteams.length;i++){
    updatedFootbalTeams.push({
        nome :footballteams[i].nome,
        falli :footballteams[i].falli
    }
    )
}

console.log(updatedFootbalTeams);