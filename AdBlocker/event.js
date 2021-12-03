// background (event) page
var parent = chrome.contextMenus.create({
  "title": "Remove Ad",
  "id": "0",
  "contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendMessage(tab.id, {});
})
