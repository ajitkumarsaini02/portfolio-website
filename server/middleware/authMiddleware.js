const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const expectedToken = process.env.ADMIN_TOKEN || "ajit_admin_token_secure_2026";

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized: Missing or invalid token format." });
  }

  const token = authHeader.split(" ")[1];
  if (token !== expectedToken) {
    return res.status(403).json({ success: false, message: "Forbidden: Invalid admin token." });
  }

  next();
};

export { authMiddleware };
export default authMiddleware;