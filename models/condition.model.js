module.exports = (db, DataTypes) => {
	const condition = db.define('condition',
		{
			id: {
				type: DataTypes.TEXT,
				primaryKey: true,
				unique: true
			},
			book_id: {
				type: DataTypes.TEXT
			},
			condition: {
				type: DataTypes.TEXT
			},
			dust_jacket: {
				type: DataTypes.TEXT
			},
			edition: {
				type: DataTypes.TEXT
			},
			comments: {
				type: DataTypes.TEXT
			},
			slate: {
				type: DataTypes.BOOLEAN
			},
			signed_by_author: {
				type: DataTypes.BOOLEAN
			},
			signed_by_illustrator: {
				type: DataTypes.BOOLEAN
			},
			bowed: {
				type: DataTypes.BOOLEAN
			},
			chipped: {
				type: DataTypes.BOOLEAN
			},
			dampstained: {
				type: DataTypes.BOOLEAN
			},
			darkening_or_fading: {
				type: DataTypes.BOOLEAN
			},
			ex_library: {
				type: DataTypes.BOOLEAN
			},
			foxed: {
				type: DataTypes.BOOLEAN
			},
			looses: {
				type: DataTypes.BOOLEAN
			},
			made_up_copy: {
				type: DataTypes.BOOLEAN
			},
			price_clipped: {
				type: DataTypes.BOOLEAN
			},
			re_backed: {
				type: DataTypes.BOOLEAN
			},
			re_cased	: {
				type: DataTypes.BOOLEAN
			},
			re_jointed: {
				type: DataTypes.BOOLEAN
			},
			shaken: {
				type: DataTypes.BOOLEAN
			},
			shelf_wear: {
				type: DataTypes.BOOLEAN
			},
			sunned: {
				type: DataTypes.BOOLEAN
			},
			tight: {
				type: DataTypes.BOOLEAN
			},
			trimmed: {
				type: DataTypes.BOOLEAN
			},
			unopened: {
				type: DataTypes.BOOLEAN
			},
			working_copy: {
				type: DataTypes.BOOLEAN
			},
			worming: {
				type: DataTypes.BOOLEAN
			}
		},
		{
			schema: 'rare',
			underscored: true,
			freezeTableName: true
		}
	);
	return condition;
};
