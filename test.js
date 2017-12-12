var driver = require('./talosdriver')
var Google = require('./pages/google')


describe('google tests', function() {

  beforeAll(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
    google = new Google()
  })

  beforeEach(function(done) {
    google.getpage()
      .then(function() {done()})
  })

  afterAll(function() {driver.quit()})

  it('searches for test', function(done) {
    google.search('test')
      .then(function(elements) {
        expect(elements.length > 0).toBe(true)
        done()
      })
    })

  it('searches for foobar', function(done) {
    google.search('foobar')
      .then(function(elements) {
        expect(elements.length > 0).toBe(true)
        done()
      })
  })

  it('searches for narrative science', function(done) {
    google.search('narrative science')
      .then(function(elements) {
        expect(elements.length > 0).toBe(true)
        done()
      })
  })
})

