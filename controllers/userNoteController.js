const UserLandmarkNote = require('../models/UserLandmarkNote');

// Not ekle
const addNote = async (req, res) => {
  const { landmarkId, note } = req.body;
  const userId = req.user.id;

  try {
    const existingNote = await UserLandmarkNote.findOne({ userId, landmarkId });
    if (existingNote) {
      return res.status(400).json({ message: 'You already added a note for this landmark.' });
    }

    const newNote = new UserLandmarkNote({ userId, landmarkId, note });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ message: 'Error adding note', error: err.message });
  }
};

// Notları listele (giriş yapan kullanıcıya özel)
const getUserNotes = async (req, res) => {
  const userId = req.user.id;
  try {
    const notes = await UserLandmarkNote.find({ userId }).populate('landmarkId');
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching notes', error: err.message });
  }
};

// Not güncelle
const updateNote = async (req, res) => {
  const userId = req.user.id;
  const { note } = req.body;
  const noteId = req.params.id;

  try {
    const existingNote = await UserLandmarkNote.findOne({ _id: noteId, userId });
    if (!existingNote) return res.status(404).json({ message: 'Note not found' });

    existingNote.note = note;
    await existingNote.save();

    res.json(existingNote);
  } catch (err) {
    res.status(500).json({ message: 'Error updating note', error: err.message });
  }
};

// Not sil
const deleteNote = async (req, res) => {
  const userId = req.user.id;
  const noteId = req.params.id;

  try {
    const deleted = await UserLandmarkNote.findOneAndDelete({ _id: noteId, userId });
    if (!deleted) return res.status(404).json({ message: 'Note not found' });

    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting note', error: err.message });
  }
};

module.exports = {
  addNote,
  getUserNotes,
  updateNote,
  deleteNote,
};
