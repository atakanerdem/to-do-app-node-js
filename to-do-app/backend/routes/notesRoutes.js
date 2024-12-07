
const express = require("express");
const {
  getAllNotes,
  addNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");


const router = express.Router();


router.get("/", getAllNotes); 
router.post("/", addNote); 
router.put("/:id", updateNote); 
router.delete("/:id", deleteNote); 


module.exports = router;
