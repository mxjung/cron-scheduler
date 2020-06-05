// npm packages
const sinon = require('sinon');
const cron = require("node-cron");

describe("Count how many times callback function is called", function () {
  it('should run 1 times each day', () => {
    const d = new Date('12/31/2014');
    d.setSeconds(59);
    d.setMinutes(59);
    d.setHours(23);
    var clock = sinon.useFakeTimers(d.getTime());

		const callback = jest.fn();

    // exampleSchedule runs once at 01:00:00
    const exampleSchedule = cron.schedule(`0 1 * * *`, callback);

    // fast forward 1 day for 5 days (in milliseconds)
    var oneDay = 1 * 24 * 60 * 60 * 1000;
    for (var i = 0; i < 5; i++) {
      clock.tick(oneDay);
      expect(callback).toHaveBeenCalledTimes(i + 1);
    }

    exampleSchedule.stop();
    clock.restore();
  });

  it('should run 14 times in 14 days', () => {
    const d = new Date('12/31/2014');
    d.setSeconds(59);
    d.setMinutes(59);
    d.setHours(23);
    var clock = sinon.useFakeTimers(d.getTime());

		const callback = jest.fn();

    // exampleSchedule runs once at 01:00:00 (from timeCheck)
    const exampleSchedule = cron.schedule(`0 1 * * *`, callback);

    // fast forward 14 days (in milliseconds)
    var twoWeeks = 14 * 24 * 60 * 60 * 1000;
    clock.tick(twoWeeks);

    exampleSchedule.stop();
    clock.restore();

    expect(callback).toHaveBeenCalledTimes(14);
  });
});
