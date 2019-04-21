let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('../app')
chai.use(chaiHttp)
chai.should()
describe('get UserDetails : ', function () {
  it('should get all students record', (done) => {
    chai.request(app)
      .get('/user')
      .end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })
})
