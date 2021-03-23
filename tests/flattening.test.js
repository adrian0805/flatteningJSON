var fs = require('fs')
const { flattening } = require('../utils/flattening')

test("Flattening 1st json", () => {
    fs.readFile('test.json', 'utf8', function (err, data) {
        if (err) throw err
        object = JSON.parse(data)
        flattenObject = flattening(object)
        expect(flattenObject['c.e.h.j']).toBe(10)
    })
})

test("Flattening 2nd json", () => {
    fs.readFile('test2.json', 'utf8', function (err, data) {
        if (err) throw err
        object = JSON.parse(data)
        flattenObject = flattening(object)
        expect(flattenObject['elena.alex']).toBe("carlos")
    })
})