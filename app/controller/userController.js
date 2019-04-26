var url = require('url')
const nodeMailer = require('nodemailer')

function userDetails(req, res) {
  res.status(200).send(url.parse(req.url, true).query)
}

function sendMail() {
  let transport = nodeMailer.createTransport({
    'service': 'gmail',
    'auth': {
      'user': 'pushpendra.bhumca2013@gmail.com',
      'password': 'pushpVK@91'
    }
  })
  let mailOpetions = {
    from: 'pushpendra.bhumca2013@gmail.com',
    to: 'pushpendra.bhumca2013@gmail.com'
  }
  transport.sendMail(mailOpetions, function (error, response) {
    if (error) { console.log(error) } else { console.log(response) }
  })
}
module.exports = {
  userDetails: userDetails,
  sendMail: sendMail
}
