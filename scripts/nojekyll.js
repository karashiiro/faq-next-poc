import fs from 'node:fs';

fs.writeFile('./out/.nojekyll', '', (err) => {
    if (err != null) {
        console.error(err);
        process.exit(1);
    }
});
