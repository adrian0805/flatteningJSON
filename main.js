var fs = require('fs')
const { flattening } = require('./utils/flattening')

args = process.argv.slice(2)

if (args.length < 1) {
    console.log("Please, read Readme file for instructions. Most probably you haven't passed correctly json file names for flattening.")
    return
} 

args.forEach( (val) => {
    fs.readFile(`${val}.json`, 'utf8', function (err, data) {
        if (err) throw err
        object = JSON.parse(data)
        flattenObject = flattening(object)
        var jsonData = JSON.stringify(flattenObject)
        fs.writeFile(`${val}Output.json`, jsonData, "utf8", (err) => {
            if (err) throw err
            console.log('complete')
        })    
    })
});

