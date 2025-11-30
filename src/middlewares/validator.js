export const validateTask = (req, res, next) => {
  const { title, priority } = req.body;

  if (!title || !priority) {
    return res.status(400).json({
      success: false,
      message: "Title and priority are required"
    });
  }

  next();
};
