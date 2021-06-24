import { configure, getLogger } from "log4js";

configure({
	appenders: {
		console: {
			type: 'console'
		},
		gitlab: {
			type: 'file',
			filename: __dirname + '/../../logs/gitlab.log',
			backups: 1000,
			compress: false
		}
	},
	categories: {
		default: {
			appenders: [
				'console'
			],
			level: 'all'
		},
		gitlab: {
			appenders: [
				'gitlab', 'console'
			],
			level: 'debug'
		}
	}  
});

// const logger = getLogger();

export default getLogger
