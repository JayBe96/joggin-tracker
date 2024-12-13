import * as fs from "fs";
import * as path from "path";

const testDatabasePath = path.resolve(__dirname, '../data/testdatabase.json');
const databasePath = path.resolve(__dirname, '../../jsonserver/database/database.json');

export function loadTestDatabase() {
    const testDatabase = JSON.parse(fs.readFileSync(testDatabasePath, 'utf-8'));
    fs.writeFileSync(databasePath, JSON.stringify(testDatabase, null, 2), 'utf-8');
}

export function checkNthRun(n: number, name: string, duration: number, distance: number, rating: string): boolean {
    const database = JSON.parse(fs.readFileSync(databasePath, 'utf-8'));
    if (n < 0 || n >= database.runs.length) {
        console.log('Invalid run index');
        return false;
    }
    const run = database.runs[n];
    console.log(run);
    return run.name === name && 
           run.duration === duration && 
           run.distance === distance && 
           run.rating === rating;
}


export function checkNthMeditation(n: number, name: string, duration: number, type: string, rating: string): boolean {
    const database = JSON.parse(fs.readFileSync(databasePath, 'utf-8'));
    if (n < 0 || n >= database.meditations.length) {
        console.log('Invalid meditation index');
        return false;
    }
    const meditation = database.meditations[n];
    console.log(meditation);
    return meditation.name === name && 
           meditation.duration === duration && 
           meditation.type === type && 
           meditation.rating === rating;
}
