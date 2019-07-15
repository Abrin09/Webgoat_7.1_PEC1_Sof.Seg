
function makeWindow(url, windowName) 
{
	var day = new Date();
	var id = day.getTime();
	@param{"page" + id + " = window.open(url, '" + id + "', 'toolbar=0,location=0,scrollbars=1,statusbar=0,menubar=0,resizable=1,width=600,height=500');"};
}