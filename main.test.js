// A simple test to verify a visible window is opened with a title
var Application = require('spectron').Application
var assert = require('assert')
const path = require('path')
// import mocha from 'mocha'

describe('Electron testing', function() {

  this.timeout(1000)

  beforeEach(function (done) {
    this.app = new Application({
      path: path.join(__dirname, 'index.html')
    })
    this.app.start().then(function() {
      return done()
    })
  })

  afterEach(function (done) {
    if (this.app && this.app.isRunning()) {
      return this.app.stop().then(function() {
        return done()
      })
    }
  })

it.skip('should have a title', (done) => {
    app.start().then(function () {
      // Check if the window is visible
      return app.browserWindow.isVisible()
    }).then(function (isVisible) {
      // Verify the window is visible
      assert.equal(isVisible, true)
    }).then(function () {
      // Get the window's title
      return app.client.getTitle()
    }).then(function (title) {
      // Verify the window's title
      assert.equal(title, 'My App')
    }).then(function () {
      // Stop the application

      return app.stop()
    }).then(() => {
      done()
    })
    .catch(function (error) {
      // Log any failures
      console.error('Test failed', error.message)
    })
  })
})
