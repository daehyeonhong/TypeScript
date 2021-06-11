{
    // Java: Exception
    // JavaScript: Error
    // const array = new Array(10000000000000000000000000);

    // Error(Exception) Handling: try -> catch -> finally

    function readFile(fileName: string): string {
        if (fileName === 'file') {
            throw new Error(`file not exist! ${fileName}`);
        }

        return `file contents`;
    }

    function closeFile(fileName: string) {
        console.log(`${fileName} closed!!`);
    }

    const fileName = 'file';

    try {
        console.log(readFile(fileName));
    } catch (e) {
        console.log(`catched!! ${e}`);
    } finally {
        closeFile(fileName);
    }

}