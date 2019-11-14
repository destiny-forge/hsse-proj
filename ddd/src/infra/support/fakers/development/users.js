const { encryptPassword } = require('src/infra/encryption');

module.exports = () => {
  const password = encryptPassword('pass');

  return [
    {
      _id: '48e40a9c-c5e9-4d63-9aba-b77cdf4ca67b',
      email: 'testdev@gmail.com',
      password: password,
      roles: [
        'user',
        'uploader',
        'detailer',
        'linker',
        'juniorappraiser',
        'seniorappraiser',
        'juniorfilterer',
        'seniorfilterer',
        'prioritizer',
        'administrator'
      ],
      confirmed: 1
    }
  ];
};
