const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')

// const data = jsonfile.readFileSync('data.json')
const path = './data.json';
// const date = moment().format('YYYY-MM-DD')

const markCommit = (x,y)=>{
    const date = moment()
    .subtract(1, 'y')
    .add(1, 'd')
    .add(x, 'w')
    .add(y, 'd')
    .format()
    const data = {
        date: date,
        // commits: []
    }
    jsonfile.writeFile(path, data, ()=>{
        simpleGit().add([path]).commit(date, { '--date': date }).push() 
    })
}




