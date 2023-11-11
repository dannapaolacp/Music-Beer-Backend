// const express = require('express');
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const LoginServices = require('../services/loginServices');



// const TOKEN_KEY = "x4TvnErxRETbVcqaLl5dqMI115eN1p5y";
// const service = new LoginServices();
//verifyToken function to validate successful token creation via the key const

// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     console.log(authHeader);
//     if (token == null)
//         return res.status(401).send("Token requerido");
//     jwt.verify(token, TOKEN_KEY, (err, user) => {
//         if (err)
//             return res.status(403).send("Token invalido");
//         console.log(user);
//         req.user = user;
//         next();
//     })
// }

//Post method to validate user information in the database

// const createLogin = async (req, res) => {

//   try{
//     const { id } = req.body.user;
//     const { password } = req.body.password;
//     console.log(id);
//     console.log(password);
//     const data = await service.findLogin(id, password);
//     if (data.rowCount !== 0) {
//       let user = {
//         role: data.rows[0].role,
//       };
//       res.status(200).json(user);
//     }
//     res.status(404).json({ message: 'User not found' });
//   } catch (error) {
//     console.error(error.message);
//   }
// };



//Get method to query user information
//verifyToken function added to validate that the token is correct

// router.get("/", async (req, res, next) => {
//     try{
//       const users = await service.find();
//       res.json(users);
//     }catch(e){
//       // next(error);
//       console.error(e);
//     }
// });

// module.exports = {
//   createLogin
// }

const jwt = require("jsonwebtoken");
const LoginServices = require('../services/loginServices');

const service = new LoginServices();

const createLogin = async (req, res) => {
  try {
    console.log(req.body);  // Muestra todo el contenido de req.body
    const { name, password } = req.body;
    console.log(name);
    console.log(password);
    const data = await service.findLogin(name, password);
    if (data.rowCount !== 0) {
      let user = {
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
  createLogin,
};



