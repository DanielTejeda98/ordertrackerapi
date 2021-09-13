/*
  Controller for the manager access routes.
*/
const bcrypt = require('bcryptjs');

const User = require('../models/user')

exports.createUser = (req, res, next) =>
{
  //Error Handler
  // const errors = validationResult(req);
  // if(!errors.isEmpty())
  // {
  //   const error = new Error('Validation failed.');
  //   error.statusCode = 422;
  //   error.data = errors.array();
  //   throw error;
  // }

  const id = req.body.id;
  const username = req.body.username;
  const password = req.body.password;
  const store = req.body.inStore;
  const accessLevel = req.body.accessLevel;
  const fName = req.body.fName;
  const lName = req.body.lName;

  //Hash password
  bcrypt
    .hash(password, 12)
    .then(hashedPass =>
      {
        //Create user object
        const user = new User
        (
          {
            _id: id,
            username: username,
            password: hashedPass,
            inStore: store,
            accessLevel: accessLevel,
            firstName: fName,
            lastName: lName
          }
        )
        //Save the new user onto the database
        return user.save()
      })
    .then(res =>
      {
        //Database operation succeed.
        res.status(201);
      })
    .catch(err => 
      {
        //If an error doesn't already exist
        if (!err.statusCode)
        {
          err.statusCode = 500;
        }
        //Go to error handler
        next(err);
      })
}