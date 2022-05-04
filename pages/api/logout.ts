import { NextIronHandler, withSession } from "../../src/settings";

const logout: NextIronHandler = async (req, res) => {
  req.session.destroy();

  return res.json({ success: true });
};
export default withSession(logout);
