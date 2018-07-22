module.exports = (db, DataTypes) => {
	const book = db.define('book',
		{
			id: {
				type: DataTypes.TEXT,
				primaryKey: true,
				unique: true
			},
			first_name: {
				type: DataTypes.TEXT
			},
			last_name: {
				type: DataTypes.TEXT
			},
			middle_name: {
				type: DataTypes.TEXT
			},
			title: {
				type: DataTypes.TEXT
			},
			publisher: {
				type: DataTypes.TEXT
			},
			year: {
				type: DataTypes.INTEGER
			},
			pre_evaluated_cost: {
				type: DataTypes.INTEGER
			}
		},
		{
			schema: 'rare',
			underscored: true,
			freezeTableName: true
		}
	);
	return book;
};
