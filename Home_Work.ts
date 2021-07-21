// создать класс юзера с полями name, age, city, status
// и методами:
// getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
// status boolean

class User{
    private name: string;
    private age: number;
    private city: string;
    status: boolean;

   getName():string{
       return this.name
   }
    setName(name){
        this.name = name;
}    ;
   getAge(): number{
       return this.age
   }
    setAge (age){
        this.age = age;
    };
   getCity(): string{
       return this.city;
   }
    setCity (city){
        this.city = city;
    };
  }


//
// 1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal

interface IAnimal{
    movementType: string;
    speak: string;
    animalInfo(): string;
};

class Cat implements IAnimal{
    movementType: string;
    speak: string;
    constructor(movementType: string,speak: string) {
        this.movementType = movementType;
        this.speak = speak;
    }
    animalInfo(): string{
        return this.movementType + '' + this.speak
    }
}
let cat: IAnimal = new Cat('бігає', 'мявкає');
console.log(cat.animalInfo())


class Bird implements IAnimal{
    movementType: string;
    speak: string;
    constructor(movementType: string,speak: string) {
        this.movementType = movementType;
        this.speak = speak;
    }
    animalInfo(): string{
        return this.movementType + '' + this.speak
    }
}
let bird: IAnimal = new Bird('літає', 'цвірінькає');
console.log(bird.animalInfo());


class Fish implements IAnimal{
    movementType: string;
    speak: string;
    constructor(movementType: string,speak: string) {
        this.movementType = movementType;
        this.speak = speak;
    }
    animalInfo(): string{
        return this.movementType + '' + this.speak
    }
}
let fish: IAnimal = new Fish('плаває', 'мовчить');
console.log(fish.animalInfo())

