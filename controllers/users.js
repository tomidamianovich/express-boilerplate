const { response } = require('express');

const getUsers = (req, res = response) => {
  const {query} = req
  res.json({
    msg: 'getUsers API - Controller',
    ...query
  });
};

const putUsers = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: 'putUsers API - Controller',
    id
  });
};

const postUsers = (req, res = response) => {
  const { body } = req;
  res.json({
    msg: 'postUsers API - Controller',
    ...body
  });
};

const deleteUsers = (req, res = response) => {
  res.json({
    msg: 'deleteUsers API - Controller'
  });
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
}