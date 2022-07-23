// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals'});
  };
  
  // @desc    Set goals
  // @route   POST /api/goals
  // @access  Private
  const setGoal = (req, res) => {
    if (!req.body.text) res.status(400).json({message : "Please add a text field"})
    
    res.status(200).json({message: 'Set Goals'});
  };
  
  // @desc    Update goals
  // @route   PUT /api/goals/:id
  // @access  Private
  const updateGoal = (req, res) => {
    res.status(200).json({message: 'Update Goal ${req.params.id}'});
  };
  
  // @desc    Delete goal
  // @route   DELETE /api/goals/:id
  // @access  Private
  const deleteGoal = (req, res) => {
    res.status(200).json({message: 'Delete Goals $ {req.params.id }'});
  };
  
  module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}