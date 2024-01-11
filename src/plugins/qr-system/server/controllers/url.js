'use strict';

module.exports = ({ strapi }) => ({
    async find(ctx) {
        try {
          return await strapi.plugin('qr-system').service('url').find(ctx.query);
        } catch (err) {
          ctx.throw(500, err);
        }
      },

      async delete(ctx) {
        try {
          ctx.body = await strapi
            .plugin("qr-system")
            .service("url")
            .delete(ctx.params.id);
        } catch (err) {
          ctx.throw(500, err);
        }
      },
    
      async create(ctx) {
        try {
          ctx.body = await strapi
            .plugin("qr-system")
            .service("url")
            .create(ctx.request.body);
        } catch (err) {
          ctx.throw(500, err);
        }
      },
    
      async update(ctx) {
        try {
          ctx.body = await strapi
            .plugin("qr-system")
            .service("url")
            .update(ctx.params.id, ctx.request.body);
        } catch (err) {
          ctx.throw(500, err);
        }
      },
});