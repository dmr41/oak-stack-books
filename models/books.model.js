module.exports = (db, DataTypes) => {
	const books = db.define('books',
		{
			id: {
				type: DataTypes.TEXT,
				primaryKey: true,
				unique: true
			},
			jimm: {
				type: DataTypes.TEXT
			},
		},
		{
			schema: 'rare',
			underscored: true,
			freezeTableName: true
		}
	);
	return books;
};
