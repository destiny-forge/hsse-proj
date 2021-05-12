import decode from 'jwt-decode';

class AuthService {
  // Initializing important variables
  constructor(domain) {
    this.domain =
      domain || window.location.origin.indexOf('localhost') > 0
        ? 'http://localhost:5001'
        : '/api';
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(type, email, password) {
    // Get a token from api server using the fetch api
    return this.fetch(`/auth/authenticate`, {
      method: 'POST',
      body: JSON.stringify({
        type,
        email,
        password,
      }),
    }).then((res) => {
      this.setToken(res.data.token); // Setting the token in localStorage
      return Promise.resolve(res);
    });
  }

  register(type, email, password) {
    return this.fetch(`/account/register`, {
      method: 'POST',
      body: JSON.stringify({
        type,
        email,
        password,
      }),
    }).then((res) => {
      return Promise.resolve(res);
    });
  }

  confirmEmail(token) {
    return this.fetch(`/account/confirm/${token}`, {
      method: 'POST',
      body: JSON.stringify({
        token,
      }),
    }).then((res) => {
      return Promise.resolve(res);
    });
  }

  passwordReset(token, password) {
    return this.fetch(`/account/reset/${token}`, {
      method: 'POST',
      body: JSON.stringify({
        token,
        password,
      }),
    }).then((res) => {
      return Promise.resolve(res);
    });
  }

  forgotPassword(type, email) {
    return this.fetch(`/account/reset`, {
      method: 'POST',
      body: JSON.stringify({
        type,
        email,
      }),
    }).then((res) => {
      return Promise.resolve(res);
    });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  setToken(token) {
    // Saves user token to localStorage
    localStorage.setItem('client_token', token);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('client_token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('client_token');
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }

  getQueryString(params) {
    const esc = encodeURIComponent;
    return Object.keys(params)
      .map((k) => esc(k) + '=' + esc(params[k]))
      .join('&');
  }

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (this.loggedIn()) {
      headers['Authorization'] = `Bearer ${this.getToken()}`;
    }

    if (options) {
      if (options.method === 'GET' || options.method === 'DELETE') {
        const qs = '?' + this.getQueryString(options.data);
        url = url + qs;
      }
    }

    return fetch(`${this.domain}${url}`, {
      headers,
      ...options,
    })
      .then(this._checkStatus)
      .then((response) => response.json());
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}

export default AuthService;
