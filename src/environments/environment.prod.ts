const HOST = 'https://api.github.com/users/johnpapa';

export const environment = {
  production: true,
  FYLE_GIT: {
    userDetails: HOST,
    repos: HOST + '/repos',
  },
};
