const express = require("express");
const router = express.Router();

//GetAll
router.get('/', (req, res) => {
  res.status().json();
});

//GetById
router.get('/:id', (req, res) => {
  res.status().json();
});

router.post('/', (req, res) => {
  res.status().json();
});

//Complete Update
router.put('/:id', (req, res) => {
  res.status().json();
});

//Partial Update
router.patch('/:id', (req, res) => {
  res.status().json();
});

router.delete('/:id', (req, res) => {
  res.status().json();
});

module.exports = router;
