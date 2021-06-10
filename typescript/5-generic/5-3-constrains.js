{
    var FullTimeEmployee = /** @class */ (function () {
        function FullTimeEmployee() {
        }
        FullTimeEmployee.prototype.pay = function () {
            console.log("full time!!");
        };
        FullTimeEmployee.prototype.workFullTime = function () {
        };
        return FullTimeEmployee;
    }());
    var PartTimeEmployee = /** @class */ (function () {
        function PartTimeEmployee() {
        }
        PartTimeEmployee.prototype.pay = function () {
            console.log("part time!!");
        };
        PartTimeEmployee.prototype.workPartTime = function () {
        };
        return PartTimeEmployee;
    }());
    // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수 💩💩💩
    function payBad(employee) {
        employee.pay();
        return employee;
    }
    function pay(employee) {
        employee.pay();
        return employee;
    }
    var hong = new FullTimeEmployee();
    var bob = new PartTimeEmployee();
    hong.workFullTime();
    bob.workPartTime();
    var hongAfterPay = pay(hong);
    var bobAfterPay = pay(bob);
    var person = {
        name: 'hong',
        age: 20
    };
    var animal = {
        animal: '🐕'
    };
    function getValue(obj, key) {
        return obj[key];
    }
    console.log(getValue(person, 'name'));
    console.log(getValue(person, 'name'));
    console.log(getValue(animal, 'animal'));
}
