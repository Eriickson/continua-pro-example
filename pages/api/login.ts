import { client, NextIronHandler, withSession } from "../../src/settings";
import { serialize } from "cookie";
const signin: NextIronHandler = async (req, res) => {
  const { email, password } = req.body;

  const { data, status } = await client.post("/authenticate", {
    email,
    password,
  });

  if (status !== 200) return res.json({ success: false });

  const { auth_token, user_type } = data.data[0];

  try {
    res.setHeader(
      "Set-Cookie",
      serialize("authToken", auth_token, { path: "/", maxAge: 5400 })
    );
  } catch (err) {
    console.log({ err });
  }

  req.session.set("authToken", auth_token);
  req.session.set("userType", user_type);

  await req.session.save();

  return res.json({ success: true });
};

export default withSession(signin);
