'use strict';

const { Redirect } = require("react-router-dom/cjs/react-router-dom.min");

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany("plugin::qr-system.url", query);
  },

  async findBySlug(query, ctx) {
    console.log("slug", query.slug);
    let datos = await strapi.entityService.findMany("plugin::qr-system.url", query);
    for (let i = 0; i < datos.length; i++) {
      if (datos[i].slug === query.slug) {
        console.log("Tipo", typeof datos[i].urlRedirect);
        console.log("datos[i].urlRedirect", datos[i].urlRedirect);
         ctx.status = 301;
         ctx.redirect(datos[i].urlRedirect);
        
        return datos[i];
      }
    }
  },

  async findOne(id) {
    return await strapi.entityService.findOne("plugin::qr-system.url", id);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::qr-system.url", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::qr-system.url", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::qr-system.url", id, data);
  },
});