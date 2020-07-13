let translate = document.getElementById("translate");

if (translate == null) {
}

translate.onclick = function () {
  var textToTranslate = document.getElementById("inputArea").value;
  text = spongebobifyText(textToTranslate);
  moveToTextarea(text);
};

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

function moveToTextarea(spongebobifiedText) {
  document.getElementById("outputArea").value = spongebobifiedText;
}
