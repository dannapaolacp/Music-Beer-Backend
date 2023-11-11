const boom = require('@hapi/boom');
const pool = require('../libs/postgresPool');

class UserServices {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async deleteTable({ id }) {
    let result;
    try {
      result = await pool.query(`DELETE FROM users WHERE id = $1;`, [id]);
    } catch (error) {
      console.error('Error in delete table:', error);
      throw error;
    }

    return result;
  }

  async insertOne({ id, name, password, rol }) {
    try {
      await pool.query(
        `INSERT INTO users (id, name, password, rol) VALUES ($1, $2, $3, $4);`,
        [id, name, password, rol],
      );
    } catch (error) {
      console.error('Error in insertOne:', error);
      throw error; // Propagar el error para que pueda ser manejado en otro lugar si es necesario
    }
  }

  async findUsers() {
    const result = await pool.query(
      `SELECT *
      FROM users `,
    );
    return result;
  }

  async findAdminUser() {
    try {
      const result = await pool.query(
        `SELECT name, password
         FROM users
         WHERE rol = 1`,
      );
      return result;
    } catch (error) {
      console.error('Error en consulta de datos del admin: ', error);
      throw error;
    }
  }

  async findEmployeeUser() {
    try {
      const result = await pool.query(
        `SELECT name, password
         FROM users
         WHERE rol = 2`,
      );
      return result;
    } catch (error) {
      console.error('Error en consulta de datos del empleado: ', error);
      throw error;
    }
  }

  async findTableUser() {
    try {
      const result = await pool.query(
        `SELECT id, name, password
         FROM users
         WHERE rol = 3`,
      );
      return result;
    } catch (error) {
      console.error('Error en consulta de datos del cliente: ', error);
      throw error;
    }
  }

  async updateOne({ id, password }) {
    let result;
    try {
      result = await pool.query(
        `UPDATE users SET password = $2 WHERE id = $1;`,
        [id, password],
      );
    } catch (error) {
      console.error('Error in update date:', error);
      throw error;
    }

    return result;
  }

  // async insertTable({ id, name, password, rol }) {
  //   try {
  //     await pool.query(
  //       `INSERT INTO users (id, name, password, rol) VALUES ($1, $2, $3, $4);`,
  //       [id, name, password, rol],
  //     );
  //   } catch (error) {
  //     console.error('Error creando una mesa: ', error);
  //     throw error; // Propagar el error para que pueda ser manejado en otro lugar si es necesario
  //   }
  // }
}

// async findLogin(name, password) {
//   const result = await pool.query(
//     `SELECT rol
//     FROM users as u
//     WHERE u.name = $1 AND u.password = $2`,
//     [name, password]
//   );
//   return result;
// }

module.exports = UserServices;
