{
    interface Employee {
        pay(): void;
    }

    class FullTimeEmployee implements Employee {
        pay() {
            console.log(`full time!!`);
        }

        workFullTime() {
        }
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log(`part time!!`)
        }

        workPartTime() {
        }
    }

    // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수 💩💩💩
    function payBad(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    function pay<T extends Employee>(employee: T): T {
        employee.pay();
        return employee;
    }

    const hong = new FullTimeEmployee();
    const bob = new PartTimeEmployee();

    hong.workFullTime();
    bob.workPartTime();

    const hongAfterPay = pay(hong);
    const bobAfterPay = pay(bob);

    const person = {
        name: 'hong',
        age: 20
    };
    const animal = {
        animal: '🐕'
    };

    function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    console.log(getValue(person, 'name'));
    console.log(getValue(person, 'age'));
    console.log(getValue(animal, 'animal'));

}