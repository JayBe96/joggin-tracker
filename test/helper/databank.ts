import * as fs from "fs";
import * as path from "path";

const testDatabasePath = path.resolve(__dirname, '../data/testdatabase.json');
const databasePath = path.resolve(__dirname, '../../jsonserver/database/database.json');

export function loadTestDatabase() {
    const testDatabase = JSON.parse(fs.readFileSync(testDatabasePath, 'utf-8'));
    fs.writeFileSync(databasePath, JSON.stringify(testDatabase, null, 2), 'utf-8');
}