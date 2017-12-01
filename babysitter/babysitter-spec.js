describe ("babysitter", function() {
	describe("should make 12 from start", function() {
		it ("for 1 hour", function() {
			var job = new Job (7, 8);
			expect(job.startToBedPay(1)).toBe(12);
		});
		it ("for 2 hours", function() {
			var job = new Job (7, 9);
			expect(job.startToBedPay(2)).toBe(24);
		});
	});

	describe("should make 8 from bedtime to midnight", function() {
		it("for 1 hour", function() {
			var job = new Job (8, 11);
			expect(job.bedToMidnightPay()).toBe(8);
		});
		it("for 2 hour", function() {
			var job = new Job (8, 10);
			expect(job.bedToMidnightPay()).toBe(16);
		});
	});

	describe("should make 16 from midnight to endOfJob", function() {
		it("for 1 hour", function() {
			var job = new Job (8, 11, 1);
			expect(job.midnightToEndOfJobPay()).toBe(16);
		});
		it("for 2 hour", function() {
			var job = new Job (8, 11, 2);
			expect(job.midnightToEndOfJobPay()).toBe(32);
		});
	});

	describe("should calculate hours", function() {
		it("from start to bedtime", function() {
			var job = new Job (5,8);
			expect(job.calculateStartToBedTimeHours()).toBe(3);
		});
		it("from bedtime to midnight", function() {
			var job = new Job (5,8);
			expect(job.calculateBedTimeToMidnightHours()).toBe(4);
		});
		it("from midnight", function() {
			var job = new Job (5,8, 3);
			expect(job.calculateMidnightToEndOfJob()).toBe(3);
		});
	});
	describe("should calcutlate total pay", function() {
		it("from start to end of job", function() {
			var job = new Job (10, 11, 1);
			expect(job.calculateTotalHours()).toBe(36);
		})
	})

});