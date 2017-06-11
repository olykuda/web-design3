$(document).ready(function(){
	$("#add-record").click(function (){
		var uaWord = $("input[value='ua']").val();
		var engWord = $("input[value='eng']").val();
		var delBtn = '<button class="btn btn-default" id="del-btn"><span class="glyphicon glyphicon-scissors"></span></button>';
		$("tbody").append('<tr><td>' + 
			uaWord + 
			'</td><td>' + 
			engWord + 
			'</td><td>' + 
			delBtn + 
			'</td></tr>');
		$("div[id='message-load-xml']").remove();
	});
	$("#btn-load-file").click(function (){
		var filename = $("input[id='filename']").val();
		loadXML(filename);
	});
});

(function loadXML(/*filename*/) {
	var filename = 'vocabulary.xml';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      fillTable(this);
    }
  };

  xhttp.open("GET", filename, true);
  xhttp.send();
})();

function fillTable(xml) {
  var i;
  var delBtn = '<button class="btn btn-default" id="del-btn"><span class="glyphicon glyphicon-scissors"></span></button>';
  var xmlDoc = xml.responseXML;
  var table="";
  var x = xmlDoc.getElementsByTagName("COUPLE");
  for (i = 0; i < x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("")[0].childNodes[0].nodeValue +
    "</td></tr>" +
    delBtn;
  }
  document.getElementById("table-vocabulary").innerHTML += table;
}