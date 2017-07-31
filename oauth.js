const {BrowserWindow, webContents} = require('electron').remote
const path = require('path')
const url = require('url')

var options = {
  client_id: '3adf36cf6067ebae50a4',
  client_secret: 'c5ecb383308ea212342eda36f9c90b2fb0e38e46',
  scopes: ["notifications"]
};

const runOauth = () => {
  var authWindow = new BrowserWindow({width: 800, height: 600, show: false, 'node-integration': false});
  var githubUrl = 'https://github.com/login/oauth/authorize?';
  var authUrl = githubUrl + 'client_id=' + options.client_id + '&scope=' + options.scopes;
  authWindow.loadURL(authUrl);
  authWindow.show();

  function handleCallback(url) {
    var raw_code = /code=([^&]*)/.exec(url) || null;
    var code = (raw_code && raw_code.length > 1)
      ? raw_code[1]
      : null;
    var error = /\?error=(.+)$/.exec(url);

    if (code || error) {
      authWindow.destroy();
    }

    if (code) {
      requestGithubToken(options, code)
    } else if (error) {
      alert('Oops! Something went wrong and we couldn\'t' +
        'log you in using Github. Please try again.');
    }
  }

  authWindow.webContents.on('will-navigate', function(event, url) {
    handleCallback(url);
  });

  authWindow.webContents.on('did-get-redirect-request', function(event, oldUrl, newUrl) {
    handleCallback(newUrl);
  });

  authWindow.on('close', function() {
    authWindow = null;
  }, false);

  function requestGithubToken(options, code) {
    let data = new FormData()
    data.append('client_id', options.client_id)
    data.append('client_secret', options.client_secret)
    data.append('code', code)

    fetch(`https://github.com/login/oauth/access_token`, {
      method: 'POST',
      body: data
    }).then((response) => {
      return response.text()
    }).then((paramsString) => {
      let params = new URLSearchParams(paramsString)
      window.localStorage.setItem('githubAccessToken', params.get('access_token'))
    })
  }
}

module.exports = runOauth
