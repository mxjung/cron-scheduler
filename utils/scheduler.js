const cron = require("node-cron");
const User = require("../models/user");

// Runs every 10 seconds in (UTC)
cron.schedule(`0,10,20,30,40,50 * * * * *`, async () => {
  try {
    const users = await User.getAll();
    console.log("Number of users is: ", users.length);
  } catch (err) {
    console.log("Failed cron schedule", err);
  }
})
