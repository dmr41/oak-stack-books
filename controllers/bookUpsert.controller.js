let db = require('../bin/sequelize.js');
let _ = require('lodash');

// function evaluateCondition(value){
// 	let allConditions = ['asNew', 'fine', 'veryGood', 'good', 'fair', 'poor', 'bindingCopy', 'readingCopy'];
// 	}
// }
//
// function evaluateDustJacket(value) {
// 	let duskJacketCondition = ['missing', 'excellent', 'good', 'fair', 'poor', 'neverIssued']
// }
function runErrorcode(message) {
	throw new Error(message);
}

function integerEvaluation(value) {
	console.log("vasd", value);
	if (!value) throw new Error("Year is required")
	let parseAttempt = parseInt(value, 10);
	let notANumber = _.isNaN(parseAttempt);
	if (!notANumber) return parseAttempt;
	throw new Error(`${value} is not an integer!`)
}
class BookUpsertController {
	constructor(session, createInput) {
		if(!createInput) throw new Error("no input fields passed")
		this.session = session;
		this.books = db.books;
		this.inputValidator = {
				evaluator: `${session.firstName} ${session.firstName}`,
  			first: createInput.first ? createInput.first : null,
  			last: createInput.last ? createInput.last : runErrorcode('Last Name is required'),
  			title: createInput.title ? createInput.title : runErrorcode('Title is required'),
  			publisher: createInput.publisher ? createInput.publisher : null,
  			year: integerEvaluation(createInput.year),
  			evaluatedCost: '',
  			comment: '',
  			condition: 'veryGood',
  			dustJacket: '1',
  			edition: '1',
				isSlate: 'on',
			  signed: 'on',
			  bowed: 'on',
			  chipped: 'on',
			  dampstained: 'on',
			  darkeningFading: 'on',
			  edgeworn: 'on',
			  exLibrary: 'on',
			  foxed: 'on',
			  loose: 'on',
			  madeUpCopy: 'on',
			  priceClipped: 'on',
			  reBacked: 'on',
			  reCased: 'on',
			  reJointed: 'on',
			  shaken: 'on',
			  shelfWear: 'on',
			  sunned: 'on',
			  tight: 'on',
			  trimmed: 'on',
			  unopened: 'on',
			  workingCopy: 'on',
			  worming: 'on'
		}
	}
}

module.exports = BookUpsertController;
