import { promises as fsPromises } from 'fs';
import * as path from 'path';

const PROPERTIES = ['age', 'eme', 'fll', 'loc', 'psw', 'usr'];

interface IValidUser  {
    age: string;
    eme: string;
    fll: string;
    loc: string;
    psw: string;
    usr: string;
}

function buildArrayFromTxtFile(users: string): string[] {
    const registers: string[] = [];
    const content = users.split('\n');

    let currentValue = '';

    for (const register of content) {
        currentValue += ` ${register}`;

        if (register === '') {
            registers.push(currentValue.trim());
            currentValue = '';
        }
    }

    return registers;
}

function buildObjectFromArrayOfString(listUsers: string[]) {
    return listUsers.reduce((listOfUsers: any[], currentValue) => {
        const item = currentValue.split(' ');
        const currentObject: any = {};

        item.forEach((register) => {
            const data = register.split(':');
            currentObject[data[0]] = data[1];
        })

        listOfUsers.push(currentObject);
        return listOfUsers;

    }, []);
}

function userValidator(user: IValidUser) {
    const keys = Object.keys(user);

    const isValid  =  keys.length >= PROPERTIES.length && PROPERTIES.every(el => keys.includes(el));

    return isValid ? user : null;
}

function filterArray(users: IValidUser[]) {
    return users.reduce((list, current) => {
        if (userValidator(current)) {
            list.push(current);
        }
        return list;
    }, [] as IValidUser[])
}


async function readFile() {
    try {
        let fileContents = await fsPromises.readFile(path.join(__dirname, './users.txt'), { encoding: 'utf-8' });
        fileContents += '\n';

        const arrayFromTxtFile = buildArrayFromTxtFile(fileContents);
        const arrayObject = buildObjectFromArrayOfString(arrayFromTxtFile);
        const realUsers = filterArray(arrayObject);

        console.log(`SOLUTION!: submit ${realUsers.length}${realUsers[realUsers.length - 1]?.usr}`);

    } catch (err) {
        console.log('error is: ', err);
    }
}

readFile();

