const XLSX = require('xlsx')//to import the libraries of 'xlsx'
function getData(){
    const workBook=XLSX.readFile('TestData/TestCredentials.xlsx')//readFile is a function inside 'xlsx'
    const workSheet=workBook.Sheets['loginPage']
    const data=XLSX.utils.sheet_to_json(workSheet)//'sheet_to_json'-converts the worksheet data into json file.utils-function inside XLSX
    return data
}
module.exports={getData}//to export getdata()