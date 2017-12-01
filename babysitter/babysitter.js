const MIDNIGHT = 12;
const STARTTIMERATE = 12;
const BEDTOMIDNIGHTRATE = 8;
const MIDNIGHTTOENDRATE = 16;

function Job(startTime, bedTime, endOfJob) {
	this.startTime = startTime;
	this.bedTime = bedTime;
	this.endOfJob = endOfJob;
}
Job.prototype.startToBedPay = function(hours) {
	return (STARTTIMERATE * this.calculateStartToBedTimeHours());
}
Job.prototype.bedToMidnightPay = function(hours) {
	return (BEDTOMIDNIGHTRATE * this.calculateBedTimeToMidnightHours());
}

Job.prototype.midnightToEndOfJobPay = function(hours) {
	return (MIDNIGHTTOENDRATE * this.calculateMidnightToEndOfJob());
}

Job.prototype.calculateStartToBedTimeHours = function() {
	return (this.bedTime - this.startTime);
}
Job.prototype.calculateBedTimeToMidnightHours = function() {
	return (MIDNIGHT - this.bedTime);
}
Job.prototype.calculateMidnightToEndOfJob = function() {
	return (this.endOfJob);
}
Job.prototype.calculateTotalHours = function() {
	return (this.startToBedPay() + this.bedToMidnightPay() + this.midnightToEndOfJobPay());
}