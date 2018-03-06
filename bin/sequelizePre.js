//get envs

const postgresDB = require('./sequelize.js')

postgresDB.initSeq()
	.then(() =>{
		require('./www')
	});
