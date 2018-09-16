const csv = require('csvtojson')
const fs = require('fs')

csv().fromFile('./customer-data.csv').then((jsonArray) => {
    fs.writeFile('customer-data.json', JSON.stringify(jsonArray), (error) => {
        if(error) return console.error(error)
        console.log('Writing done')
    })
})