// Axios v1.0.0 Copyright (c) 2023 power and contributors
'use strict';

class Axios {
  constructor() {

  }
  async request(configOrUrl) {
    Object.assign({}, configOrUrl);

  }
}

function createInstance() {
  const context = new Axios();
  const instance = function () {
    return function () {
      context.request(arguments);
    }
  };
  return instance
}

const axios = createInstance();

module.exports = axios;
