export const successReq = (res, status, message, data) => {
  res.json({
    status,
    success: true,
    message,
    content: data,
  });
};

export const failedReq = (res, status, message = "An error occurred!") => {
  res.json({
    success: false,
    error: {
      code: status,
      message,
    },
  });
};
