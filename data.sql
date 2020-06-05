\c cron-scheduler

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    date_created timestamp without time zone default (now() at time zone 'utc')
);

INSERT INTO users (
                  username,
                  first_name,
                  last_name
                  )
    VALUES  ('user1', 'fn1', 'ln1'),
            ('user2', 'fn2', 'ln2');

