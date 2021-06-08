{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'Hong';
    const address: Text = 'korea';
    type Num = number;

    type Student = {
        name: string,
        age: number;
    };

    const student: Student = {
        name: 'Hong',
        age: 12
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let hongName: Name;
    hongName = 'name';
    type JSON = 'JSON';
    const json: JSON = 'JSON';

    type Boal = true;

}