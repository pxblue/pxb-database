const fs = require('fs');
import { roadmap } from "./data/doc-it/R16Roadmap";

const entries: DataRecord[] = [
    {
        collectionName: 'doc-it/R16Roadmap',
        dataSource: roadmap
    }
];

for (const entry of entries) {
    const path = `database/${entry.collectionName}`;
    fs.writeFile(`${path}.json`, JSON.stringify(entry.dataSource, null, 2), (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        // success case, the file was saved
        console.log(`Wrote entry '${entry.collectionName}' to '${path}.json'`);
    });
}

type DataRecord = {
    collectionName: string;
    dataSource: any;
}
