

var goodbyeEurope = [
//'xxx',
'Austria',
'Belgium',
'Bulgaria',
'Croatia',
'Cyprus', //'Republic of Cyprus',
'Czech Republic',
'Denmark',
'Estonia',
'Finland',
'France',
'Germany',
'Greece',
'Hungary',
'Ireland',
'Italy',
'Latvia',
'Lithuania',
'Luxembourg',
'Malta',
'Netherlands',
'Poland',
'Portugal',
'Romania',
'Slovakia',
'Slovenia',
'Spain',
'Sweden',
'United Kingdom', //'UK'
];

for (var i = 0; i < goodbyeEurope.length; i++) {
	var radios = document.getElementsByName(goodbyeEurope[i]);
	if (radios.length != 2) {
		alert(goodbyeEurope[i] + ' not found.');
	} else {

		radios[0].checked = true; //Disable
	}	
}
