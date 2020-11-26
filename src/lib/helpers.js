// const bcrypt = require('bcryptjs');
// const passport = require('passport');

// const helpers = {};

// helpers.encryptPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(passport, salt);
//     return hash;
// };

// helpers.matchPassword = async (password, savePassword) => {
//     try {
//         await bcrypt.compare(password, savePassword);
//     } catch (e) {
//         console.log(e);
//     }
// };

// module.exports = helpers;
const bcrypt=require('bcryptjs');
const passport = require('passport');
const helpers={};

helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };
  
  helpers.matchPassword = async (password, savedPassword) => {
    try {
            return await bcrypt.compare(password, savedPassword);
    } catch (e) {
      console.log(e)
    }
  };
  
module.exports=helpers;