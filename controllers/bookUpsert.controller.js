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
		this.booksInputs = {
			first_name: createInput.first ? createInput.first : null,
			last_name: createInput.last ? createInput.last : runErrorcode('Last Name is required'),
			middle_name: createInput.middle ? createInput.middle : null,
			title: createInput.title ? createInput.title : runErrorcode('Title is required'),
			publisher: createInput.publisher ? createInput.publisher : null,
			year: integerEvaluation(createInput.year),
			pre_evaluated_cost: createInput.evaluatedCost ? createInput.evaluatedCost : null,
			dwr_evaluated: createInput.dwrEvaluated ? true : false
		}
		this.conditionInputs = {
			evaluator: `${session.firstName} ${session.firstName}`,
			comment: '',
			condition: 'veryGood',
			dustJacket: '1',
			edition: '1',
			slate: createInput.slate ? createInput.slate : false,
			signed_by_author: createInput.signed_by_author ? createInput.signed_by_author : false,
			signed_by_illustrator: createInput.signed_by_illustrator ? createInput.signed_by_illustrator : false,
			bowed: createInput.bowed ? createInput.bowed : false,
			chipped: createInput.chipped ? createInput.chipped : false,
			dampstained: createInput.dampstained ? createInput.dampstained : false,
			darkening_or_fading: createInput.darkening_or_fading ? createInput.darkening_or_fading : false,
			edgeworn: createInput.edgeworn ? createInput.edgeworn : false,
			ex_library: createInput.ex_library ? createInput.ex_library : false,
			foxed: createInput.foxed ? createInput.foxed : false,
			loose: createInput.loose ? createInput.loose : false,
			made_up_copy: createInput.made_up_copy ? createInput.made_up_copy : false,
			price_clipped: createInput.price_clipped ? createInput.price_clipped : false,
			re_backed: createInput.re_backed ? createInput.re_backed : false,
			re_cased: createInput.re_cased ? createInput.re_cased : false,
			re_jointed: createInput.re_jointed ? createInput.re_jointed : false,
			shaken: createInput.shaken ? createInput.shaken : false,
			shelf_wear: createInput.shelf_wear ? createInput.shelf_wear : false,
			sunned: createInput.sunned ? createInput.sunned : false,
			tight: createInput.tight ? createInput.tight : false,
			trimmed: createInput.trimmed ? createInput.trimmed : false,
			unopened: createInput.unopened ? createInput.unopened : false,
			working_copy: createInput.working_copy ? createInput.working_copy : false,
			worming: createInput.worming ? createInput.worming : false,
		}
	}
}

module.exports = BookUpsertController;
