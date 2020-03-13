const nodemailer = require('nodemailer');
const emailTemplate = require('./templates');
const { smtp } = require('../../config');

const transporter = nodemailer.createTransport(smtp);

module.exports = (layout, data) => {
  let mailOpts = {
    from: '"The SmartDesk Team" <noreply@smartdesk.com>',
    to: data['recipient'],
    subject: data['subject'],
    html: emailTemplate[layout](data)
  };

  return transporter.sendMail(mailOpts);
};
