var contextMenus = {};
var title = "title";
contextMenus.spongebobify = chrome.contextMenus.create(
  { title: "Spongebobify", contexts: ["selection"] },
  function () {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab) {
  if (info.menuItemId === contextMenus.spongebobify) {
    let textToSpongebobify = info.selectionText;
    chrome.tabs.executeScript(null, {
      code:
        "var spongebobifiedText = '" +
        spongebobifyText(textToSpongebobify) +
        "';" +
        "function modifyText(newValue) {" +
        "var range = document.getSelection().getRangeAt(0);" +
        "range.deleteContents();" +
        "range.insertNode(document.createTextNode(newValue));" +
        "}" +
        "modifyText(spongebobifiedText);",
    });
  }
}

function spongebobifyText(text) {
  var spongebobifiedText = "";
  for (var i = 0; i < text.length; i++) {
    if (i % 2 == 0) {
      let upperLowerRand = Math.floor(Math.random() * 3);
      if (upperLowerRand == 0) {
        spongebobifiedText += text.charAt(i).toUpperCase();
      } else {
        spongebobifiedText += text.charAt(i).toLowerCase();
      }
    } else {
      let upperLowerRand = Math.floor(Math.random() * 3);
      if (upperLowerRand != 0) {
        spongebobifiedText += text.charAt(i).toUpperCase();
      } else {
        spongebobifiedText += text.charAt(i).toLowerCase();
      }
    }
  }
  return spongebobifiedText;
}
