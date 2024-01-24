'use strict';

module.exports = ({ strapi }) => ({
    async find(ctx) {
        try {
          return await strapi.plugin('qr-system').service('url').find(ctx.query);
        } catch (err) {
          ctx.throw(500, err);
        }
      },

      async findBySlug(ctx) {
         try {
          console.log("Estoy dentro de la url CTX:", ctx.params);
          return await strapi.plugin('qr-system').service('url').findBySlug(ctx.params, ctx);
        } catch (err) {
          ctx.throw(500, err);
        }
      },

      async findOne(ctx) {
        try {
          return await strapi.plugin('qr-system').service('url').findOne(ctx.params.id);
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