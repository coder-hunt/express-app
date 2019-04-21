
function userDetails (req, res) {
  res.status(200).send({'firstName': 'Pushpendra', 'lastName': 'Kumar'})
}
module.exports.userDetails = userDetails
