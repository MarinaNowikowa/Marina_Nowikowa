const animals = [
  {
    name: "tiger",
    weight: 45,
    isHealthy: true,
    isAche: false,
    isFat: true,
    warden: {
      name: "George",
      age: 50,
    },
  },
  {
    name: "fox",
    weight: 45,
    color: "black",
    nickname: "lisa",
    isHealthy: true,
    isAche: false,
    isFat: false,
    isHungry: true,
    warden: {
      name: "Petr",
      age: 30,
    },
  },
  {
    name: "wolf",
    nickname: "Pups",
    weight: 45,
    color: "grey",
    isHealthy: true,
    isAche: false,
    isFat: true,
    warden: {
      name: "Klaus",
      age: 25,
    },
  },
  {
    name: "monkey",
    weight: 45,
    color: "brown",
    isHealthy: true,
    isAche: false,
    isFat: false,
    isHungry: true,
    warden: {
      name: "Sven",
      age: 20,
    },
  },
];

function zoo() {
  return {
    addAnimal: (animals, newAnimalObj) => {
      const { name, age, nickname } = newAnimalObj;

      animals.push(newAnimalObj);
      console.log(`Животное ${name} с возрастом ${age} годиков
      и кличкой ${nickname} было добавлено`);
      return animals;
    },
    deleteAnimal: (animals, delAnimalObj) => {
      for (var i = 0; i < animals.length; i++) {
        if (animals[i].name == delAnimalObj) {
          animals.splice(i, 1);
        }
      }
      return animals;
    },

    deleteName: (animals, delAnimalName) => {
      for (var i = 0; i < animals.length; i++) {
        if (animals[i].name == delAnimalName) {
          delete animals[i].name;
        }
      }
      return animals;
    },
  };
}

let zooManager = zoo();
zooManager.addAnimal(animals, { name: "ezhik", age: 10, nickname: "vasja" });
zooManager.deleteAnimal(animals, "monkey");
zooManager.deleteName(animals, "wolf");

console.log(animals);
