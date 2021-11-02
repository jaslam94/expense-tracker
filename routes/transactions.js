const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  delTransaction,
} = require("../services/transactionsService");

router.route("/").get(getTransactions).post(addTransaction);
router.route("/:id").delete(delTransaction);

module.exports = router;
