export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const login = async (req, res) => {
  try {
    res.send("Signin Route");
  } catch (error) {}
};

export const logout = async (req, res) => {
  try {
    res.send("Logout Route");
  } catch (error) {}
};
