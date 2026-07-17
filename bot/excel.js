const XLSX = require("xlsx");

function lerExcel() {
    const workbook = XLSX.readFile("../produtos.xlsx");

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    return XLSX.utils.sheet_to_json(sheet);
}

module.exports = {
    lerExcel,
};