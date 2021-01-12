/*
HyperCSS JS Customizer
  
Version: 0.2.2
*/

/*Insert Stylsheet (for customClass() and potentially other functions to come)*/
var head_of_document = document.getElementsByTagName("head")[0];
var style_sheet = document.createElement("style");
style_sheet.setAttribute("type", "text/css");
style_sheet.setAttribute("id", "distyle");
if (style_sheet.styleSheet) {
  // IE
  style_sheet.styleSheet.cssText = "";
} else {
  style_sheet.appendChild(document.createTextNode(""));
  head_of_document.appendChild(style_sheet);
}

function template(templateclassname, classes) {
  var templateclass = document.getElementsByClassName(templateclassname);
  if (templateclass.length == 0) {
    console.error(
      "No elements with classname '" + templateclassname + "' were found"
    );
  } else {
    console.log(templateclass);
    for (let i = 0; i < templateclass.length; i++) {
      templateclass[i].setAttribute("class", classes);
    }
  }
}

function styleElement(elementname, classes) {
  var element = document.getElementsByTagName(elementname);
  if (element.length == 0) {
    console.error("No elements named '" + element + "' were found");
  } else {
    console.log(element);
    for (let i = 0; i < element.length; i++) {
      element[i].setAttribute("class", classes);
    }
  }
}

function customClass(classname, css) {
  document.getElementById("distyle").innerText += "." + classname + " {" + css + "} ";
}
