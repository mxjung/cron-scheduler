/** User related routes. */

const User = require('../models/user');
const express = require('express');
const router = new express.Router();

/** Register user; return user.
 *  Accepts {username, first_name, last_name}.
 *  Returns {username, first_name, last_name, date_created}.
 */

router.post('/', async function(req, res, next) {
  try {
    const { username, first_name, last_name } = req.body;
    let user = await User.register({username, first_name, last_name});

    return res.status(200).json({ user });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
