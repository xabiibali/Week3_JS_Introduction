// To help us use arrays with real world problems we are going to simulate a used car dealer
//  that has 50 cars in their inventory.

// Si aad u barato isticmaalka ARRAY, waxaan halkaan ku heynaa meesha gawaarida lagu gado oo 50 gaari heyso.

// The car dealer has all of their inventory housed in the array seen below.  Scroll down past the data to find out how you can help the car dealer.
// Baabuurta oo dhan waxay ku jiraan array, hoos waxaa ku qoran babab aad ku caawin kartid ganacsigaan adigoo code isticmaalayo.

let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
    { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
    { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
    { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
    { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
    { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
    { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
    { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
    { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
    { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
    { id: 15, car_make: "Dodge", car_model: "Intrepid", car_year: 2000 },
    { id: 16, car_make: "Mitsubishi", car_model: "Montero Sport", car_year: 2001 },
    { id: 17, car_make: "Buick", car_model: "Skylark", car_year: 1987 },
    { id: 18, car_make: "Geo", car_model: "Prizm", car_year: 1995 },
    { id: 19, car_make: "Oldsmobile", car_model: "Bravada", car_year: 1994 },
    { id: 20, car_make: "Mazda", car_model: "Familia", car_year: 1985 },
    { id: 21, car_make: "Chevrolet", car_model: "Express 1500", car_year: 2003 },
    { id: 22, car_make: "Jeep", car_model: "Wrangler", car_year: 1997 },
    { id: 23, car_make: "Eagle", car_model: "Talon", car_year: 1992 },
    { id: 24, car_make: "Toyota", car_model: "MR2", car_year: 2003 },
    { id: 25, car_make: "BMW", car_model: "525", car_year: 2005 },
    { id: 26, car_make: "Cadillac", car_model: "Escalade", car_year: 2005 },
    { id: 27, car_make: "Infiniti", car_model: "Q", car_year: 2000 },
    { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
    { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
    { id: 30, car_make: "BMW", car_model: "6 Series", car_year: 2010 },
    { id: 31, car_make: "Pontiac", car_model: "GTO", car_year: 1964 },
    { id: 32, car_make: "Dodge", car_model: "Ram Van 3500", car_year: 1999 },
    { id: 33, car_make: "Jeep", car_model: "Wrangler", car_year: 2011 },
    { id: 34, car_make: "Ford", car_model: "Escort", car_year: 1991 },
    { id: 35, car_make: "Chrysler", car_model: "300M", car_year: 2000 },
    { id: 36, car_make: "Volvo", car_model: "XC70", car_year: 2003 },
    { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
    { id: 38, car_make: "Toyota", car_model: "Camry", car_year: 1992 },
    { id: 39, car_make: "Ford", car_model: "Econoline E250", car_year: 1998 },
    { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 },
    { id: 41, car_make: "Ford", car_model: "Mustang", car_year: 1965 },
    { id: 42, car_make: "GMC", car_model: "Yukon", car_year: 1996 },
    { id: 43, car_make: "Mercedes-Benz", car_model: "R-Class", car_year: 2009 },
    { id: 44, car_make: "Audi", car_model: "Q7", car_year: 2012 },
    { id: 45, car_make: "Audi", car_model: "TT", car_year: 2008 },
    { id: 46, car_make: "Oldsmobile", car_model: "Ciera", car_year: 1995 },
    { id: 47, car_make: "Volkswagen", car_model: "Jetta", car_year: 2007 },
    { id: 48, car_make: "Dodge", car_model: "Magnum", car_year: 2008 },
    { id: 49, car_make: "Chrysler", car_model: "Sebring", car_year: 1996 },
    { id: 50, car_make: "Lincoln", car_model: "Town Car", car_year: 1999 }
  ];
  
  // Example Challenge:

  // The dealer wants to know how many "Mazda" cars they have. / Waxay rabaan inay ogaadaan meeqo gaari oo "Mazda" ah ayaa yaalo.
  
       let mazdaCars = []
       
      for (let i = 0; i < inventory.length; i++) {
           if (inventory[i].car_make == "Mazda"){
               mazdaCars.push(inventory[i].car_make)
           }
       }
    
   console.log("We have ", mazdaCars.length,  "Mazda Cars")

  
  // ==== Challenge 1 ====
  // The dealer can't recall the information for a car with an id of 33 on his lot. Help
  // the dealer find out which car has an id of 33 by logging the car's year, make, and 
  //model in the console log provided to you below:

  // Ma xasuustaan ID-ga gaariga 33 aad, ka caawi inay ogaadaan ID-ga gaariga 33aad. Waa inaa soo bandhigto sanadka gaariga, noocuu yahay (make) iyo modelka gaariga. Habkaan usoo bandhig:

  // console.log(`Car 33 is a *car year goes here* *car make goes here* *car model goes here*`);

   console.log(`Car ${inventory[32].id} is a ${inventory[32].car_year}
    ${inventory[32].car_model} ${inventory[32].car_make}`);


  
  // ==== Challenge 2 ====
  // The dealer needs the information on the last car in their inventory.  What 
  // is the make and model of the last car in the inventory?  Log the make and 
  // model into the console.

  // Waxay rabaan inay ogaadaan macluumaadka gaariga ugu dambeeyay. Waxaa ka mid ah inay noocuu yahay (make) iyo modelka gaariga ugu dambeeyay.

  const LastBabur = [] 
  
  for(let i = 0; i < inventory.length; i++){
    if(inventory[i].car_year > 2000){
        LastBabur.push(inventory[i].car_model)
        LastBabur.push(inventory[i].car_make)
        LastBabur.push(inventory[i].car_year)


    }
  }

  console.log(LastBabur);



  
  // ==== Challenge 3 ====
  // The marketing team wants the car models listed 
  //alphabetically on the website. Sort all the car model names into 
  //alphabetical order and log the results in the console

  // Dadka qaabilsan xayaysiinta ayaa rabo in gawaarida loo soo bandhigo xarfaha habkey iskugu xigaan (alphabetically) si ay website-ka u galiyaan. Magacyada gawaawida oo dhan isku habee si A-Z ah kadibna console.log ku samee.
  

const modelSrt = []

for(let i = 0; i < inventory.length; i++){
  modelSrt.push(inventory[i].car_model)
  modelSrt.sort()
}

console.log(modelSrt);



  // ==== Challenge 4 ====
  // The accounting team needs all the years from every car on the lot. Create 
  // a new array from the dealer data containing only the car years and log the 
  // result in the console.
  
  // Dadka qaabilsan xisaabinta ayaa rabo inay ogaadaan sanadyada gawaarida oo dhan. Array cusub samee, kadibna ku shub sanadyada gawaarida oo dhan kadibna console.log ku samee.
  
  const sanadkaBaburka = []
for(let i = 0; i < inventory.length; i++){
  sanadkaBaburka.push(inventory[i].car_year)
}

console.log(sanadkaBaburka);
  // ==== Challenge 5 ====
  // The car lot manager needs to find out how many cars are older than the year 
  // 2000. Find out how many cars were made before the year 2000 by populating
  // the array oldCars and logging it's length.

  // Qofka maamulo ganacsiga ayaa rabo inuu ogaado inta gaari oo ka horeysay sanadkii 2000. Isticmaal array 'oldCars', kuna shub gawaarida ka horeysay 2000. Kadib console log ku samee.
  
const oldBabur = []
for(let i = 0; i < inventory.length; i++){
  if(inventory[i].car_year < 2000){
    oldBabur.push(inventory[i].car_make)
    oldBabur.push(inventory[i].car_year)
    oldBabur.push(inventory[i].car_model)
  }
}

console.log(oldBabur);


  // ==== Challenge 6 ====
  // A buyer is interested in seeing only BMW and Audi cars within the 
  // inventory. Return an array that only contains BMW and Audi cars. 
  //  Once you have populated the BMWAndAudi array, use JSON.stringify() 
  // to show the results of the array in the console.

  // Qof rabo inuu gaari gato ayaa rabo inuu ogaado inta BMW iyo Audi yaalo. Array 'BMWAndAudi' la dhaho ku shub dhamaan gawaarida BMW iyo Audi. Kadib adigoo isticmaalaayo JSON.stringify() console.log ku samee.

const BMWAndAudi = inventory.reduce((acc, car) => {
if(car.car_make === 'BMW' || car.car_make === 'Audi'){
  acc.push(car)
}
return acc;
}, [])

console.log(JSON.stringify(BMWAndAudi));
