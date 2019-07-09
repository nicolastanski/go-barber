export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: '',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Nicolas Tanski <nicolas.tanski@gmail.com>',
  },
};
