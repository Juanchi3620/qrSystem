import { request } from "@strapi/helper-plugin";
import { FormData } from 'formdata-node';
import fetch, { blobFrom } from 'node-fetch';

const urlRequests = {
  getAllUrls: async () => {
    console.log("Entre aqui");
    return await fetch("http://localhost:1337/qr-system/find", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  },

  addImage: async (data) => {
    console.log("Entré a la función addImage");
    const file = await blobFrom(`${data.imageQr}`, 'image/png');
    const form = new FormData();

    form.append('files', file, `${data.imageQr}`);

    console.log("Entré a la función addImage");

    return await fetch('http://localhost:1337/api/upload', {
      method: 'post',
      body: JSON.stringify(form),
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
          imageQr: data.imageQr,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  },

  editUrl: async (id, data) => {
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
  },

  deleteUrl: async (id) => {
    return await request(`/qr-system/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default urlRequests;
