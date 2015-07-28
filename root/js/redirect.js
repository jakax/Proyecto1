/*function mainRedirect() {
	window.open ("/home/jakita/Proyecto1/main.html","main_page");
}*/

var home_ubuntu = ""
var home_windows = 

function mainRedirect() {
    var myWindow = window.open("..\Proyecto1\styles.css","main_page", "_self");
}

function backHomePage() {
	var myWindow = window.open("https://github.com/jakax/Proyecto1/blob/master/homePage.html","home_page", "_self");
    myWindow.document.write("<p>I replaced the current window.</p>");	
}