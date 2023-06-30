const signUpRequestSerializer = (req, res, next) =>{
    const { name, email, password, confirm_password } = req.body;

    // Check if name is provided and it's a non-empty string
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Please provide a valid name' });
    }

    // Check if phone is provided and it's a non-empty string
    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      return res.status(400).json({ error: 'Please provide a valid phone number' });
    }

    // Check if password is provided and it's a non-empty string
    if (!password || typeof password !== 'string' || password.trim().length === 0) {
      return res.status(400).json({ error: 'Please provide a valid password' });
    }

    // Check if confirm_password is provided and it's a non-empty string
    if (!confirm_password || typeof confirm_password !== 'string' || confirm_password.trim().length === 0) {
      return res.status(400).json({ error: 'Please provide a valid confirmation password' });
    }
    if (password !== confirm_password) {
      // It returns an error if the password does not match
      return res.status(400).send({
        error: "Password does not match"
      });
    }
    return next();
}

module.exports = { signUpRequestSerializer };
  