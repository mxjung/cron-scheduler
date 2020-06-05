const db = require('../db');
const ExpressError = require('../helpers/expressError');

class User {
  /** Register user with data. Returns new user data. */
  static async register({ username, first_name, last_name }) {
    const duplicateCheck = await db.query(
      `SELECT username
          FROM users
          WHERE username = $1`,
      [username]
    );

    if (duplicateCheck.rows[0]) {
      throw new ExpressError(
        `There already exists a user with username '${username}'`,
        401
      );
    }

    const result = await db.query(
      `INSERT INTO users
          (username, first_name, last_name)
        VALUES ($1, $2, $3)
        RETURNING username, first_name, last_name, date_created`,
      [
        username,
        first_name,
        last_name
      ]
    );

    return result.rows[0];
  }

  /** Returns list of user info:
   *
   * [{ username, first_name, last_name, date_created }, ...]
   *
   * */

  static async getAll() {
    const result = await db.query(
      `SELECT username,
              first_name,
              last_name,
              date_created
      FROM users
      ORDER BY username`
    );
    return result.rows;
  }
}

module.exports = User;
