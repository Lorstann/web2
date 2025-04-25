const VisitingPlan = require('../models/VisitingPlan');

// Plan oluştur
const createPlan = async (req, res) => {
  const { planName, items } = req.body;
  const userId = req.user.id;

  try {
    const newPlan = new VisitingPlan({ userId, planName, items });
    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (err) {
    res.status(500).json({ message: 'Error creating plan', error: err.message });
  }
};

// Kullanıcının planlarını listele
const getUserPlans = async (req, res) => {
  const userId = req.user.id;

  try {
    const plans = await VisitingPlan.find({ userId }).populate('items.landmarkId');
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching plans', error: err.message });
  }
};

// Plan güncelle
const updatePlan = async (req, res) => {
  const planId = req.params.id;
  const userId = req.user.id;
  const { planName, items } = req.body;

  try {
    const plan = await VisitingPlan.findOneAndUpdate(
      { _id: planId, userId },
      { planName, items },
      { new: true }
    );
    if (!plan) return res.status(404).json({ message: 'Plan not found' });

    res.json(plan);
  } catch (err) {
    res.status(500).json({ message: 'Error updating plan', error: err.message });
  }
};

// Plan sil
const deletePlan = async (req, res) => {
  const planId = req.params.id;
  const userId = req.user.id;

  try {
    const deleted = await VisitingPlan.findOneAndDelete({ _id: planId, userId });
    if (!deleted) return res.status(404).json({ message: 'Plan not found' });

    res.json({ message: 'Plan deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting plan', error: err.message });
  }
};

module.exports = {
  createPlan,
  getUserPlans,
  updatePlan,
  deletePlan,
};
