var xu_iID;
var xu_Login = function () {
	window.clearInterval(xu_iID);
	xx();
};
var xu_logout = function () {
	yy();
	xu_iID = setInterval("xu_Login()", 10*1000);
	var curDate = new Date();
	console.log(curDate.getHours() + ":" + curDate.getMinutes() + ":" + curDate.getSeconds());
};
setInterval("xu_logout()", 14.5*60*1000);
xu_Login();