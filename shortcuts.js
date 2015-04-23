var insertHelpText = function(element, text) {
  var parent = element.parentNode;
  if (parent) {
    parent = parent.parentNode;
    if (parent) {
      var span = document.createElement("p");
      var textNode = document.createTextNode(text);
      span.appendChild(textNode);
      parent.appendChild(span);
    }
  }
};

var alterShortcutHelp = function() {
  var keyboardKeys = document.getElementsByClassName("keyboard-key");
  for (var i = keyboardKeys.length - 1; i >= 0; i--) {
    if (keyboardKeys[i].innerHTML === "&lt;") {
      keyboardKeys[i].innerHTML = ",";
      insertHelpText(keyboardKeys[i], "HelloTrello Anwender können , beziehungsweise . benutzen.");
    } else if (keyboardKeys[i].innerHTML === "&gt;") {
      keyboardKeys[i].innerHTML = ".";
    } else if (keyboardKeys[i].innerHTML === "/") {
      keyboardKeys[i].innerHTML = "-";
      insertHelpText(keyboardKeys[i], "HelloTrello Anwender können - benutzen.");
    }
  };
};

document.onkeyup = function(e) {

    var searchKey = 189; // -
    var helpKey = 191; // ?
    var evt = e || window.event;
    var character = evt.keyCode;
    var nodeType = evt.target.nodeName.toUpperCase();
   
    if (character === 0 ||
        evt.target.contentEditable.toUpperCase() === "TRUE" ||
        nodeType === "TEXTAREA" ||
        nodeType === "INPUT" && evt.target.type.toUpperCase() === "TEXT") {
      return true; //do not detect the key if it was pressed in a textbox or sth similar
    }
    if (character === searchKey) {
      var searchbar = document.getElementsByClassName("header-search-input js-search-input")[0];
      if (searchbar) {
        searchbar.focus();
      }
    } else if (character === helpKey) {
      alterShortcutHelp();
  	}
    return true;
  };

if (document.getElementsByClassName("shortcut-list")) {
  alterShortcutHelp();
}
