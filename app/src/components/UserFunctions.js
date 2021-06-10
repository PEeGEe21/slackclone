import axios from 'axios';

export const register = (newUser) => {
  return axios
    .post('http://localhost:8000/api/register', newUser, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};


export const login = (User) => {
  return axios
    .post(
      'api/login',
      {
        email: User.email,
        password: User.password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    .then((res) => {
      localStorage.setItem('usertoken', res.data.token);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = () => {
  return axios
    .get('api/profile', {
      headers: { Authorization: `Bearer $(localStorage.usertoken)` },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
