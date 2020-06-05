/** Server for cron-scheduler */
require("./utils/scheduler");

const app = require("./app");

app.listen(3000, () => {
  console.log(`Server starting on port 3000`);
});
