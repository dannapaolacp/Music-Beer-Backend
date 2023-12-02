const boom = require('@hapi/boom');
const pool = require('../libs/postgresPool');

class musicServices {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async deleteMusic({ id }) {
    let result;
    try {
      result = await pool.query(`DELETE FROM music WHERE id = $1 ;`, [id]);
    } catch (error) {
      console.error('Error in delete user:', error);
      throw error;
    }

    return result;
  }

  async insertMusic({ link, table_name, name_music }) {
    try {
      await pool.query(
        `INSERT INTO music (link,table_name, name_music) VALUES ($1, $2, $3);`,
        [link, table_name, name_music],
      );
    } catch (error) {
      console.error('Error in insertOne:', error);
      throw error; // Propagar el error para que pueda ser manejado en otro lugar si es necesario
    }
  }

  async findMusic() {
    const result = await pool.query(
      `SELECT *
      FROM music `,
    );
    return result;
  }

  // async updateMusic({ id, password}) {
  //   let result;
  //   try {
  //     result = await pool.query(
  //       `UPDATE music SET  = $2 WHERE id = $1;`,
  //       [id, password]
  //     );
  //   } catch (error) {
  //     console.error("Error in update date:", error);
  //     throw error;
  //   }

  //   return result;
  // }
}

module.exports = musicServices;
