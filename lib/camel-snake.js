'use strict';

const Camel = require('to-camel-case');
const Snake = require('to-snake-case');

function camel(obj) {
  const type = typeof obj;

  switch (type) {
    case 'string':
      return Camel(obj);
    case 'object':
      return camelObject(obj);
    default:
      return obj;
  }
}

function camelObject(obj) {
  if (!obj) {
    return obj;
  }

  if (obj.hasOwnProperty('length')) {
    return camelArray(obj);
  }

  Object.keys(obj).forEach(key => {
    const newKey = Camel(key);
    obj[newKey] = obj[key];

    if (newKey !== key) {
      delete obj[key];
    }
  });

  return obj;
}

function camelArray(obj) {
  if (!obj) {
    return obj;
  }

  for (let index = 0, length = obj.length; index < length; index++) {
    const item = obj[index];

    obj[index] = camelObject(item);
  }

  return obj;
}

function snake(obj) {
  const type = typeof obj;

  switch (type) {
    case 'string':
      return Snake(obj);
    case 'object':
      return snakeObject(obj);
    default:
      return obj;
  }
}

function snakeObject(obj) {
  if (!obj) {
    return obj;
  }

  if (obj.hasOwnProperty('length')) {
    return snakeArray(obj);
  }

  Object.keys(obj).forEach(key => {
    const newKey = Snake(key);
    obj[newKey] = obj[key];

    if (newKey !== key) {
      delete obj[key];
    }
  });

  return obj;
}

function snakeArray(obj) {
  if (!obj) {
    return obj;
  }

  for (let index = 0, length = obj.length; index < length; index++) {
    const item = obj[index];

    obj[index] = snakeObject(item);
  }

  return obj;
}

module.exports = {
  camel,
  snake,
};
