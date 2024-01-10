'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('qr-system')
      .service('myService')
      .getWelcomeMessage();
  },
});
