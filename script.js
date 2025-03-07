console.log("Mike's snacks 6");

//*********************************************
//SNACK 1 
// ********************************************


// cretae array

const lighterBikeElement = document.getElementById('lighterBike');

console.log(lighterBikeElement);

const bikes = [
    {
        nome : "Basso",
        peso : 10
    },
    {
        nome : "Bianchi",
        peso : 16
    },
    {
        nome : "Colnago",
        peso : 14
    },
    {
        nome : "Pinarello",
        peso : 9
    },
    {
        nome : "Cinelli",
        peso : 18
    },
    {
        nome : "Cipollini",
        peso : 7
    },
    {
        nome : "Olmo",
        peso : 11
    },
    {
        nome : "Wilier",
        peso : 8
    }
];

console.log(bikes);

// create function

function lighterBike (bike){
    let lighterbike = bike[0];

    for(let i=1; i<bike.length;i++){

        if(bike[i].peso < lighterbike.peso){
            lighterbike = bike[i];
        }
    }
    return lighterbike;
}

// result

const result = lighterBike(bikes);

console.log(result); 

lighterBikeElement.innerHTML= (`La bici più leggera è: ${result.nome}, con un peso di ${result.peso} kg.`);
