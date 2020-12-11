const DEVELOPER_KEY = '<YOUR-DEV-KEY>';

function doGet() {
  return HtmlService
  .createTemplateFromFile("picker")
  .evaluate()
  .addMetaTag("viewport", "width=device-width, initial-scale=1")
  .setTitle("Google Drive Picker")
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(fileName) {
  return HtmlService
  .createHtmlOutputFromFile(fileName)
  .getContent();
}

function initPicker() {
  return {
    locale: 'en',
    token: ScriptApp.getOAuthToken(),
    origin: "https://script.google.com",
    parentFolder: "",
    developerKey: DEVELOPER_KEY,
    dialogDimensions: {
      width: 600,
      height: 425
    },
    picker: {
      viewMode: "LIST",
      mineOnly: false,
      mimeTypes: "application/vnd.google-apps.spreadsheet",
      multiselectEnabled: true,
      allowFolderSelect: true,
      navhidden: true,
      hideTitle: true,
      includeFolders: true,
    }
  };
}