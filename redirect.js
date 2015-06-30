/*function mainRedirect() {
	window.open ("/home/jakita/Proyecto1/main.html","main_page");
}*/

function mainRedirect() {
    var myWindow = window.open("/home/jakita/Proyecto1/main.html","main_page", "_self");
    myWindow.document.write("<p>I replaced the current window.</p>");
}

function backHomePage() {
	var myWindow = window.open("/home/jakita/Proyecto1/homePage.html","home_page", "_self");
    myWindow.document.write("<p>I replaced the current window.</p>");	
}