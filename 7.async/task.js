class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === null || typeof callback !== 'function') {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		let check = this.alarmCollection.some(index => index === time);
		if (check === true) {
			console.warn('Уже присутствует звонок на это же время');
		}
		let value = {
			callback,
			time,
			canCall: true
		};
		this.alarmCollection.push(value);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(index => index.time !== time);
	}

	getCurrentFormattedTime() {
		let time = new Date();
		let hoursMinutes;
		if (time.getMinutes() < 10) {
			hoursMinutes = time.getHours() + ":" + 0 + time.getMinutes();
		} else {
			hoursMinutes = time.getHours() + ":" + time.getMinutes();
		}
		return hoursMinutes;
	}


	start() {
		if (this.intervalId !== null) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(item => {
				if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
					item.canCall = false;
					item.callback();
				}
			})
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(function(item) {
			item.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}