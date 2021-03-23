var langType = false;
var javaButton;
var swiftButton;
window.onload = (event) => {
  javaButton = document.getElementById("java-b");
  swiftButton = document.getElementById("swift-b");
};

function swiftClick(){
  var md = document.getElementById("md-container");
  md.innerHTML = '<zero-md src="Framework/readme_swift.md"></zero-md>';
};


function javaClick(){
  var md = document.getElementById("md-container");
  md.innerHTML = '<zero-md src="Framework/readme_java.md"></zero-md>';
};
