const SHEET_ID = '1q0XF--ZIQMuYU0XG8U8WR0L1GeLh0B78UwinXhk81bQ';
function doGet() {
return HtmlService.createTemplateFromFile('index')
.evaluate()
.setTitle('Contact Form');
}
function include(filename) {
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function submitForm(data) {
const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
sheet.appendRow([
new Date(),
data.name,
data.email,
data.message
]);
return 'success';
}
