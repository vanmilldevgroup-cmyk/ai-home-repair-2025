const RepairRequest = require('../models/repairRequestModel.js');
const User = require('../models/userModel.js');

// @desc    Get dashboard data
// @route   GET /api/dashboard
// @access  Private
const getDashboardData = async (req, res) => {
  try {
    // This is a placeholder for getting the logged in user
    // In a real app, you would get the user from the token
    const user = await User.findOne({ email: 'jane@example.com' });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const openRequests = await RepairRequest.countDocuments({ user: user._id, status: { $ne: 'Completed' } });
    const completedJobs = await RepairRequest.countDocuments({ user: user._id, status: 'Completed' });

    // This is a placeholder for total spent. In a real app, you would calculate this from invoices or payments.
    const totalSpent = '$2,450';

    const recentActivity = await RepairRequest.find({ user: user._id }).sort({ createdAt: -1 }).limit(5);

    res.json({
      userName: user.name,
      userProfilePicture: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJqqm4dzQILkwRyOQydUTBQgJIrbZQV_KEeA3reuffAADW75uYev8kyw4-O2a_pY6G_q7ANvsAX_kTuZfQuz6p9RfvD06D3N2fJxGb0zZzLNimeB6wvPeo6L_xKKi8pfxtZ68QruWt_nmHSJBaq2u3IqQMuRM6OQgGwchY28VVmunPxq-RazZxKirpkXbqneirJDubxuOpjwoAVj9g5KauBxAp4b0C7olnexCVBBd3k8nqH_i5a9une2uVcURafRqmY29N4uT3RLwc',
      stats: {
        openRequests,
        completedJobs,
        totalSpent,
      },
      recentActivity,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getDashboardData };
