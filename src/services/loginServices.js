const boom = require ('@hapi/boom');
const pool = require('../libs/postgresPool')


class LoginServices{
  constructor(){
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async findLogin(name, password) {
    const result = await pool.query(
      `SELECT rol
      FROM users as u
      WHERE u.name = $1 AND u.password = $2`,
      [name, password]
    );
    return result;
  }
}

module.exports = LoginServices;
