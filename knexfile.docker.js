const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	client: 'pg',
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DB
	},
	migrations: {
		directory: './server/db/migrations'
	},
	seeds: {
		directory: './server/db/seeds'
	}
}
