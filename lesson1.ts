function foobar(a: string) {
}
foobar('hello');

let a: number;
a = 9999;


interface Car {
    model: string;
    power: number;
    volume?: number;
    drive?: (speed: number) => void;
}

class User {
    name: string;
    age: number;
    status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting(): string {
        return 'Hello, my name is' + this.name;
    }
}


function test(
    str: string,
    num: number,
    bool: boolean,
    arr: [],
    arrAny: any[],
    arrNum: number[],
    arrString: string[],
    obg: {},
    obgICar: Car,
    carArr: Car[],
    obgICar3: Car,
    user: User,
): void {

}


test(
    'HELLO',
    9999,
    true,
    [],
    [12, 'ghj', true, []],
    [1, 2, 3, 4, 5],
    ['vb', 'yu', 'we'],
    {
        name: 'Inna', age: 38, greeting: function () {
        }
    },
    {model: 'BMW', power: 500, drive: (x) => console.log(x)},
    [{model: 'BMW', power: 500}, {model: 'BMW', power: 500}],
    {
        model: 'Mers', power: 1000, volume: 5, drive: (y) => {
            let number = y / 2 * 5;
        }
    },
    new User('Inna', 38, true)
)


interface IRunner {
    speed: number;
    avgSpeed: (time: number) => number
}

let runner: IRunner = {speed: 12, avgSpeed: (time) => this.speed / time}

class Sportsman {
    private name: string;
    private age: number;
    speed: 14;
    avgSpeed(time: number): number {
        return (this.speed + 2) / time;
    }
    setAge (age){
        if(age > 0) {
            this.age = age;
        }
    }
}
let sportsman1 = new Sportsman();
sportsman1.setAge(-100)

class Policeman implements IRunner {
    rank: string;
    status: boolean;
    speed: number;

    avgSpeed(time: number): number {
        return this.speed*time;
    }

    constructor(rank: string, status: boolean, speed: number) {
        this.rank = rank;
        this.status = status;
        this.speed = speed;
    }
}

let sportsman = new Sportsman()

let runners: IRunner[] = [
    runner,
    sportsman,
    new Policeman('general', true, 2)
]


interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IUser {
id: number;
name: string;
username: string;
email: string;
address: IAddress;
phone: string;
website: string;
company: ICompany;

}

let jphUser: IUser ={
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232'
        }
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models'
    }
}

