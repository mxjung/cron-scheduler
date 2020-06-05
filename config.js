/** Shared config for application; can be req'd many places. */

const PORT = +process.env.PORT || 3000;

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql:///cron-scheduler-test'
    : 'postgresql:///cron-scheduler';

module.exports = {
  PORT,
  DB_URI
};
