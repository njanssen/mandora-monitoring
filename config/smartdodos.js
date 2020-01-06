module.exports = {
	api: { 
		baseUrl: 'https://app-api.smartdodos.com/api/p4',
		energy: '/getreadings'
	},
	csv: {
		import: {
			measurementPrefix: 'smartdodos_',
			source: 'csv',
			delimiter: ',',
			energy: {
				measurement: 'energy',
				units: 'Wh',
				fields: [
					{
						0: 'timestamp',
						1: 'consumed',
						2: 'generated'						
					}
				]
			}
		}
	}
}