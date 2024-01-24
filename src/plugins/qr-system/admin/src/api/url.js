import { request } from "@strapi/helper-plugin";
import { FormData } from 'formdata-node';
import fetch, { blobFrom } from 'node-fetch';

const urlRequests = {
  /* getAllUrls: async () => {
    console.log("Entre aqui");
    return await fetch("http://localhost:1337/qr-system/find", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, */

  getAllUrls: async () => {
    return await request('/qr-system/find', {
        method: "GET",
    });
  },

  addUrl: async (data) => {
    console.log("data", data);
    
    return await fetch("http://localhost:1337/qr-system/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          slug: data.slug,
          urlRedirect: data.urlRedirect,
          qrImage: data.qrImage,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  },

  /* editUrl: async (id, data) => {
    return await fetch(`http://localhost:1337/qr-system/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          slug: data.slug,
          urlRedirect: data.urlRedirect,
          imageQr: data.imageQr,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, */

  editUrl: async (id, data) => {
    console.log("editar");
    return await request(`/qr-system/update/${id}`, {
      method: "PUT",
      body: { data: data },
    });
  },

  deleteUrl: async (id) => {
    return await request(`/qr-system/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default urlRequests;
