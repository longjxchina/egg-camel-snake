'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/extend/application.test.js', () => {

  it('camel string', () => {
    const val = 'gmt_create';
    const res = app.camel(val);
    const expect = 'gmtCreate';

    assert(expect === res);
  });

  it('camel object', function* () {
    const now = new Date();
    const val = {
      gmt_create: now,
    };
    const res = app.camel(val);
    const expect = {
      gmtCreate: now,
    };

    app.coreLogger.info(res);
    assert(expect.gmtCreate === res.gmtCreate);
  });

  it('camel array', function* () {
    const now = new Date();
    const val = [{
      gmt_create: now,
    }];
    const res = app.camel(val);
    const expect = [{
      gmtCreate: now,
    }];

    app.coreLogger.info(res);
    assert(expect[0].gmtCreate === res[0].gmtCreate);
  });
});
