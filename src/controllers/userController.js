const userServices = require('../services/userServices');

const service = new userServices();

const createUser = async (req, res) => {
  try {
    const { id, name, password, rol } = req.body;
    await service.insertOne({ id, name, password, rol }); // Pasar un objeto con los valores
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
  }
};

const deleteTable = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await service.deleteTable({ id });
    if (result.rowCount !== 0) {
      res.status(200).json({ message: 'Table deleted successfully' });
    }
    res.status(404).json({ message: 'Table not found' });
  } catch (error) {
    console.error(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    // Muestra todo el contenido de req.body
    const allUsers = await service.findUsers();
    res.status(200).json(allUsers.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'aqui Internal Server Error' });
  }
};

const getAdminUser = async (req, res) => {
  try {
    const AdminUser = await service.findAdminUser();
    res.status(200).json(AdminUser.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'aqui Internal Server Error' });
  }
};

const getEmployeeUser = async (req, res) => {
  try {
    const EmployeeUser = await service.findEmployeeUser();
    res.status(200).json(EmployeeUser.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'aqui Internal Server Error' });
  }
};

const getTableUser = async (req, res) => {
  try {
    const TableUser = await service.findTableUser();
    res.status(200).json(TableUser.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Tables Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    const result = await service.updateOne({ id, password });
    console.log(result);
    if (result.rowCount != 0) {
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getUser = async (req, res) => {
  try {
    // Muestra todo el contenido de req.body
    const { name, password } = req.body;
    const data = await service.findUsers();
    if (data.rowCount !== 0) {
      let user = {
        id: data.rows[0].id,
        name: data.rows[0].name,
        password: data.rows[0].password,
        rol: data.rows[0].rol,
      };
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'aqui Internal Server Error' });
  }
};

module.exports = {
  createUser,
  getUsers,
  getAdminUser,
  getEmployeeUser,
  getTableUser,
  updateUser,
  deleteTable,
};
