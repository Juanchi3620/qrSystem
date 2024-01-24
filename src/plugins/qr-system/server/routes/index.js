module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'GET',
    path: '/find',
    handler: 'url.find',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'GET',
    path: '/find/:slug',
    handler: 'url.findBySlug',
    config: {
      policies: [],
      auth: false,
    },
  },

/*   {
    method: 'GET',
    path: '/find/:id',
    handler: 'url.findOne',
    config: {
      policies: [],
      auth: false,
    },
  }, */

  {
    method: "POST",
    path: "/create",
    handler: "url.create",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "url.delete",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/update/:id",
    handler: "url.update",
    config: {
      policies: [],
      auth: false,
    },
  },
];
