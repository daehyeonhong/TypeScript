{
    // Array
    const fruits: string[] = ['apple', 'banana'];
    const score: Array<number> = [1, 3, 4];

    function printArray(fruits: readonly string[]) {
    }

    // Tuple -> interface, ty[e alias, class
    let student: [string, number];
    student = ['name', 1234];
    student[0] // name
    student[1] // 123
    const [name, age] = student;

}