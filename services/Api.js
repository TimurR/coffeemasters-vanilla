const API = {
  url: "/data/menu.json",
  fetchMenu: async function () {
    const result = await fetch(this.url);
    return await result.json();
  },
};

export default API;
