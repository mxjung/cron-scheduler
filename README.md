## node-cron example
This repo shows an example of node-cron being used to automatically run tasks on a set time schedule. In addition, tests have been added with mocked timers to verify the success of the time-based cron jobs.

## Installing and Loading database

```
npm install
```

Automatically create the cron-scheduler and cron-scheduler-test database, and insert two dummy values into your table

```
npm run seed
```

## Running the application

```
npm start
```

## Testing cron

```
npm test cron.test.js
```