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
class BookUpsertController {
	constructor(session, createInput) {
		console.log('create', createInput);
		if(!createInput) throw new Error("no input fields passed")
		console.log("sname");
		this.session = session;
		this.books = db.books;
		this.inputValidator = {
				evaluator: `${session.firstName} ${session.firstName}`,
  			first: createInput.first ? createInput.first : null,
  			last: createInput.last ? createInput.last : null,
  			title: createInput.title ? createInput.title : null,
  			publisher: createInput.publisher ? createInput.publisher : null,
  			year: '',
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
