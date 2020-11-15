const cars = [
  {
    Name: "chevrolet chevelle malibu",
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Acceleration: 12,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "buick skylark 320",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 350,
    Horsepower: 165,
    Weight_in_lbs: 3693,
    Acceleration: 11.5,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "plymouth satellite",
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 318,
    Horsepower: 150,
    Weight_in_lbs: 3436,
    Acceleration: 11,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "amc rebel sst",
    Miles_per_Gallon: 16,
    Cylinders: 8,
    Displacement: 304,
    Horsepower: 150,
    Weight_in_lbs: 3433,
    Acceleration: 12,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "ford torino",
    Miles_per_Gallon: 17,
    Cylinders: 8,
    Displacement: 302,
    Horsepower: 140,
    Weight_in_lbs: 3449,
    Acceleration: 10.5,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "ford galaxie 500",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 429,
    Horsepower: 198,
    Weight_in_lbs: 4341,
    Acceleration: 10,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "chevrolet impala",
    Miles_per_Gallon: 14,
    Cylinders: 8,
    Displacement: 454,
    Horsepower: 220,
    Weight_in_lbs: 4354,
    Acceleration: 9,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "plymouth fury iii",
    Miles_per_Gallon: 14,
    Cylinders: 8,
    Displacement: 440,
    Horsepower: 215,
    Weight_in_lbs: 4312,
    Acceleration: 8.5,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "pontiac catalina",
    Miles_per_Gallon: 14,
    Cylinders: 8,
    Displacement: 455,
    Horsepower: 225,
    Weight_in_lbs: 4425,
    Acceleration: 10,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "amc ambassador dpl",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 390,
    Horsepower: 190,
    Weight_in_lbs: 3850,
    Acceleration: 8.5,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "citroen ds-21 pallas",
    Miles_per_Gallon: null,
    Cylinders: 4,
    Displacement: 133,
    Horsepower: 115,
    Weight_in_lbs: 3090,
    Acceleration: 17.5,
    Year: "1970-01-01",
    Origin: "Europe",
  },
  {
    Name: "chevrolet chevelle concours (sw)",
    Miles_per_Gallon: null,
    Cylinders: 8,
    Displacement: 350,
    Horsepower: 165,
    Weight_in_lbs: 4142,
    Acceleration: 11.5,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "ford torino (sw)",
    Miles_per_Gallon: null,
    Cylinders: 8,
    Displacement: 351,
    Horsepower: 153,
    Weight_in_lbs: 4034,
    Acceleration: 11,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "plymouth satellite (sw)",
    Miles_per_Gallon: null,
    Cylinders: 8,
    Displacement: 383,
    Horsepower: 175,
    Weight_in_lbs: 4166,
    Acceleration: 10.5,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "amc rebel sst (sw)",
    Miles_per_Gallon: null,
    Cylinders: 8,
    Displacement: 360,
    Horsepower: 175,
    Weight_in_lbs: 3850,
    Acceleration: 11,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "dodge challenger se",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 383,
    Horsepower: 170,
    Weight_in_lbs: 3563,
    Acceleration: 10,
    Year: "1970-01-01",
    Origin: "USA",
  },
];
// for loops ?
// for
// while
// map/filter/find/findIndex/reduce/some
// []   []     s     number    any    boolean
// higher order functions?

// function doSomething() {}

// 1. fetch all the cars models + origins

function getPartialCars(cars) {
  return cars.map((car) => {
    return { model: car.Name, origin: car.Origin };
  });
}

function getCarsHeader() {
  const carHeader = document.createElement("h3");
  console.log(carHeader);
}

const result = getPartialCars(cars);
getCarsHeader();
