function foobar(a) {
}
foobar('hello');
var a;
a = 9999;
var User = /** @class */ (function () {
    function User(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    User.prototype.greeting = function () {
        return 'Hello, my name is' + this.name;
    };
    return User;
}());
function test(str, num, bool, arr, arrAny, arrNum, arrString, obg, obgICar, carArr, obgICar3, user) {
}
test('HELLO', 9999, true, [], [12, 'ghj', true, []], [1, 2, 3, 4, 5], ['vb', 'yu', 'we'], { name: 'Inna', age: 38, greeting: function () { } }, { model: 'BMW', power: 500, drive: function (x) { return console.log(x); } }, [{ model: 'BMW', power: 500 }, { model: 'BMW', power: 500 }], { model: 'Mers', power: 1000, volume: 5, drive: function (y) {
        var number = y / 2 * 5;
    }
}, new User('Inna', 38, true));
