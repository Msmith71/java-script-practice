describe("FizzBuzz", function() {
	it("should say one", function() {
		expect(say(1)).toBe("1");
	});
	it("should say 2", function() {
		expect(say(2)).toBe("2");
	});
		it("should say fizz", function() {
		expect(say(3)).toBe("fizz");
	});
});