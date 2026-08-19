const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

async function main() {
  const filePath = path.resolve(__dirname, '..', 'private-imports', 'Basic Leadership Course (Responses).xlsx');
  console.log('Target file path:', filePath);

  if (!fs.existsSync(filePath)) {
    console.log('File does not exist at:', filePath);
    return;
  }

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.worksheets[0];
  if (!worksheet) {
    console.log('No worksheets found.');
    return;
  }

  const headers = worksheet.getRow(1).values.slice(1).map(String);
  const firstDataRow = worksheet.getRow(2).values.slice(1).map(String);
  console.log('Headers:', headers);
  console.log('First Row Sample:', Object.fromEntries(headers.map((header, index) => [header, firstDataRow[index] ?? ''])));
}

main().catch((error) => {
  console.error('Could not inspect spreadsheet:', error);
  process.exitCode = 1;
});
