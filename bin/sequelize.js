
let db = {};
process.env.DATABASE_URL = 'postgres://ivixbrpzginrsp:f50974897d587ce7d51a4171ff9e588d513aaa76f2b78ef487d0c63057ca8d35@ec2-50-17-206-214.compute-1.amazonaws.com:5432/d1lo1vkld8tugf';
require('pg').defaults.parseInt8 = true;

const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	quoteIdentifiers: true,
	define: {
		timestamps: false
	},
	dialectOptions: {
		ssl: true
	}
});

function modelsToSync() {
	let modelPaths = ['./models/book.model.js', './models/condition.model.js'];
	for(let i = 0; i < modelPaths.length; ++i) {
		let model = sequelize.import(path.resolve(modelPaths[i]));
		console.log("sss", model);
		db[model.name] = model;
	}
}

function initSeq() {
	modelsToSync();
	return sequelize.sync();
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.initSeq = initSeq;

module.exports = db;
