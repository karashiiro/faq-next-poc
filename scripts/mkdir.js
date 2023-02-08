import fs from 'node:fs';

fs.mkdir('./out', { recursive: true }, (err) => {
    if (err != null) {
        console.error(err);
        process.exit(1);
    }
});
