var querystring = require('querystring');
var https = require('https');

// var username = 'JonBob';
// var password = '*****';
// var apiKey = '*****';
// var sessionId = null;
// var deckId = '68DC5A20-EE4F-11E2-A00C-0858C0D5C2ED';

// function performRequest() {
//   var dataString = JSON.stringify(data);
//   var headers = {};
//
//   // if (method == 'GET') {
//   //   // endpoint += '?' + querystring.stringify(data);
// 	//
//   // }
//   // else {
//   //   headers = {
//   //     'Content-Type': 'application/json',
//   //     'Content-Length': dataString.length
//   //   };
//   // }
//   var options = {
//     host:'https://www.abebooks.com',
//     path:'/servlet/SearchResults?sts=t&sortby=100&cm_sp=SearchF-_-RBR-_-Results&an=Steinbeck&tn=East+of+Eden&kn=&yrl=&yrh=&prl=&prh=&fe=on&recentlyadded=all',
//     headers: headers
//   };
//
//   var req = https.request(options, function(res) {
//     res.setEncoding('utf-8');
// 		console.log(res);
//     // var responseString = '';
// 		//
//     // // res.on('data', function(data) {
//     // //   responseString += data;
//     // // });
// 		//
//     // res.on('end', function() {
//     //   console.log(responseString);
//     //   var responseObject = JSON.parse(responseString);
// 		// 	console.log(responseObject);
//     //   // success(responseObject);
//     // });
//   });
//
//   req.write(dataString);
//   req.end();
// }

var options = {
	host:'https://www.abebooks.com',
	path:'/servlet/SearchResults?sts=t&sortby=100&cm_sp=SearchF-_-RBR-_-Results&an=Steinbeck&tn=East+of+Eden&kn=&yrl=&yrh=&prl=&prh=&fe=on&recentlyadded=all',
	method: 'GET',
	headers: {}
};

var req = https.request(options, function(res) {
	res.setEncoding('utf-8');
	console.log(res);
	// var responseString = '';
	//
	// // res.on('data', function(data) {
	// //   responseString += data;
	// // });
	//
	// res.on('end', function() {
	//   console.log(responseString);
	//   var responseObject = JSON.parse(responseString);
	// 	console.log(responseObject);
	//   // success(responseObject);
	// });
});
