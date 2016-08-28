
if (typeof(iFinance) == "undefined") {
	if (typeof(iFinanceData) == "undefined") {
		document.write('<scr' + 'ipt src="http://i.i.ua/js/i/finance_informer.js?1" type="text/javascript" charset = "windows-1251"></scr' + 'ipt>');
		iFinanceData = [];
	}
	iFinanceData.push({b:15,c:[840,978,643],enc:0, lang:0,p:'30'});
} else {
	window['oiFinance30'] = new iFinance();
	window['oiFinance30'].gogo({b:15,c:[840,978,643],enc:0, lang:0,p:'30'});
}
