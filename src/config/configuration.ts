export default (): any => ({
  mail: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
    sender: process.env.MAIL_SENDER,
  },
});
