import fs from 'node:fs';

fs.mkdir('./out', { recursive: true }, (err) => {
    if (err != null) {
        console.error(err);
        return;
    }

    fs.writeFile('./out/.nojekyll', '', (err) => {
        if (err != null) {
            console.error(err);
            return;
        }
    });
});
