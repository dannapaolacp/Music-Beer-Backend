const musicServices = require('../services/musicServices');

const service = new musicServices();

const createMusic = async (req, res) => {
  try {
    const { link, table_name } = req.body;
    await service.insertMusic({ link, table_name }); // Pasar un objeto con los valores
    res.status(201).json({ message: 'Music created successfully' });
  } catch (error) {
    console.error(error);
  }
};

const deleteMusic = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await service.deleteMusic({id});
    if (result.rowCount !== 0) {
      res.status(200).json({ message: 'Music deleted successfully' });
    }
    res.status(404).json({ message: 'Music not found' });
  } catch (error) {
    console.error(error.message);
  }
};

const getMusics = async (req, res) => {
  try {
    // Muestra todo el contenido de req.body
    const allMusic = await service.findMusic();
    res.status(200).json(allMusic.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'aqui Internal Server Error' });
  }
};

// const updateMusic = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { password } = req.body;

//     const result = await service.updateOne({id, password});
//     console.log(result);
//     if (result.rowCount != 0) {
//       res.status(200).json({ message: 'User updated successfully' });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const getMusic = async (req, res) => {
//   try {
//     // Muestra todo el contenido de req.body
//     const { name, password } = req.body;
//     const data = await service.findUsers();
//     if (data.rowCount !== 0) {
//       let user = {
//         id: data.rows[0].id,
//         name: data.rows[0].name,
//         password: data.rows[0].password,
//         rol: data.rows[0].rol,
//       };
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ message: 'aqui Internal Server Error' });
//   }
// };

module.exports = {
  createMusic,
  getMusics,
  //updateMusic,
  deleteMusic,
};
