const XLSX = require('xlsx')//to import the libraries of 'xlsx'
function getData(sheetname,row,column){
    const workBook=XLSX.readFile('TestData/TestCredentials.xlsx')//readFile is a function inside 'xlsx'
    const workSheet=workBook.Sheets[sheetname]
    const cellvalue=XLSX.utils.encode_cell({//fetching data by row column wise
        r:row-1,
        c:column-1
    })
    const data = workSheet[cellvalue]
    return data ? data.v : undefined//condition v is referring to object in the cell
}
module.exports={getData}