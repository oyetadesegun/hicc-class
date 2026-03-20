const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const filePath = path.resolve(__dirname, '..', 'public', 'Basic Leadership Course (Responses).xlsx');
console.log('Target file path:', filePath);

if (fs.existsSync(filePath)) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);

  if (data.length > 0) {
    console.log('Headers:', Object.keys(data[0]));
    console.log('First Row Sample:', data[0]);
  } else {
    console.log('No data found in the spreadsheet.');
  }
} else {
  console.log('File does not exist at:', filePath);
}
