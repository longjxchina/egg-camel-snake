'use strict';

const camelSnake = require('./../../lib/camel-snake');

module.exports = {
  camel(obj) {
    return camelSnake.camel(obj);
  },

  snake(obj) {
    return camelSnake.snake(obj);
  },
};
