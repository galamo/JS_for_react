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
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
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
const container = document.getElementById("container");


// for loops ?
// for
// while
// map/filter/find/findIndex/reduce/some
// []   []     s     number    any    boolean
// higher order functions?

// function doSomething() {}

// 1. fetch all the cars models + origins

const carsWithImages = cars.map((car, index) => {
  if (index === 5) {
    return {
      ...car,
      engine: 4000,
      image:
        "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/12/mustang-1-1577523921.jpg",
    };
  } else {
    return {
      ...car,
      engine: 4000,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
    };
  }
});

function getPartialCars(cars) {
  return cars.map((car) => {
    return { model: car.Name, origin: car.Origin, image: car.image, additionalInfo: { hp: car.Horsepower,  cylinders: car.Cylinders } };
  });
}
const result = getPartialCars(carsWithImages);

function getCarsHeader(car) {
  const carHeader = document.createElement("h3");
  carHeader.innerText = car.model + " > " + car.origin;
  return carHeader;
}

function getCarImage(imageUrl) {
  if (!imageUrl) return "No image";
  const img = document.createElement("img");
  img.src = imageUrl;
  img.height = 200;
  img.width = 300;
  return img;
}
function getButton(text){
  if(typeof text !== 'string') throw new Error("getButton wrong text value") 
  const button = document.createElement("button")
  button.className = "delete_button"
  button.innerText = text
  button.addEventListener("click", deleteAction)
  return button;
}
function getButtonAdditionalInfo(text,car){
  if(typeof text !== 'string') throw new Error("getButtonAdditionalInfo wrong text value") 
  const button = document.createElement("button")
  button.className = "more_info_button"
  button.innerText = text
  button.addEventListener("click", _drawAdditionalInfo)
  return button;

  function _drawAdditionalInfo(){
    const addionalInfo = document.getElementById(`ai_${car.model}`);
    const span = document.createElement("div")
    span.innerText = car.additionalInfo.hp || "No HP for this CAR"
    addionalInfo.append(span)
  }
}


function deleteAction(){
    const indexToDeleted = result.findIndex(car=>car.model === this.parentElement.id)
    if(indexToDeleted === -1 ) return;
    result.splice(indexToDeleted,1);
    draw(result)
}


function getAddionalInfoContainer(car){
  const aiDiv = document.createElement("div");
  aiDiv.id = `ai_${car.model}`;
  return aiDiv;
}

function getCarCard(car) {
  const card = document.createElement("div");
  const h3 = getCarsHeader(car);
  const carImage = getCarImage(car.image);
  const deleteButton = getButton("delete",car.model)
  const infoButton = getButtonAdditionalInfo("More Info",car )
  const addionalInfoContainer = getAddionalInfoContainer(car);
  card.id = car.model


  card.classList.add("card");
  card.append(h3, carImage,deleteButton,infoButton,addionalInfoContainer);

  return card;
}

function getCarsHeaders(cars) {
  const headers = cars.map((car) => {
    return getCarCard(car);
  });
  return headers;
}

function draw(res){
  container.innerHTML = "";
  const cards = getCarsHeaders(res);
  container.append(...cards);
}
draw(result)





