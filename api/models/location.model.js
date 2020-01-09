require('module-alias/register')
const config = require('@config')
const { store } = require('@lib/data')
const logger = require('@lib/logger')
const sql = store.mysql

class Location {
	constructor(location = {}) {
		this.id = location.id
		this.uuid = location.uuid
		this.address_id = address_id
	}

	static getAll = result => {
		logger.debug(`Location.getAll()`)

		sql.query(
			'SELECT uuid, postalcode, housenumber, streetname, city FROM location INNER JOIN address on location.address_id = address.id',
			(err, res) => {
				if (err) {
					logger.error(`Location.getAll: error occured`, err)
					result(null, err)
					return
				}

				logger.debug('Found:', res)
				result(null, res)
			}
		)
	}

	static findByUuid = (uuid, result) => {
		logger.debug(`Location.findByUuid(${uuid})`)

		sql.query(
			`SELECT uuid, postalcode, housenumber, streetname, city  FROM location INNER JOIN address on location.address_id = address.id WHERE uuid = ?`,
			uuid,
			(err, res) => {
				if (err) {
					logger.error(`Location.findByUuid: error occured`, err)
					result(err, null)
					return
				}

				if (res.length) {
					logger.debug('Found:', res[0])
					result(null, res[0])
					return
				}

				logger.debug(`Not found`)
				result({ kind: 'not_found' }, null)
			}
		)
	}
}

module.exports = Location
