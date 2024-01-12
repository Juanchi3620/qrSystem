'use strict';

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany("plugin::qr-system.url", query);
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