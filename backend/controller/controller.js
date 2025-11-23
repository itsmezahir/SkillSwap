const AuthService = require('../services/auth-services')

exports.register = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!email || !last_name || !first_name || !password) {
      return res.status(400).json({ status:'fail', message: 'Missing required fields' });
    }

    const user = await AuthService.register(first_name, last_name, email, password);

    res.status(201).json({ status: 'success', data: user });
  } catch (err) {
    res.status(500).json({ status:'fail', message: err.message || 'Internal server error' });
  }
};

exports.loginUser = async (req,res) => {
  try {
    const {email, password} = req.body;
    const user = await AuthService.login(email, password);

    res.status(200).json({ status: 'success', data: user });
  } catch(err) {
    res.status(500).json({ status:'fail', message: err.message || 'Internal server error' });
  }
}