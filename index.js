const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const path = './data.json';

const markCommit = async (x, y) => {
    // Calculate the target date
    const date = moment()
        .subtract(1, 'year')
        .add(1, 'day')
        .add(x, 'week')
        .add(y, 'day')
        .format('YYYY-MM-DD');

    const data = {
        date: date,
    };

    try {
        await jsonfile.writeFile(path, data);
        const git = simpleGit();
        await git.add([path]);
        await git.commit(`Commit for date: ${date}`, undefined, { '--date': date });
        await git.push();
        console.log(`Committed and pushed for date: ${date}`);
    } catch (err) {
        console.error('Error during commit operation:', err);
    }
};

module.exports = markCommit;
