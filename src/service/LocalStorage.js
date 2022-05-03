const LocalStorage = {
  get: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },

  set: (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },
};

export default Object.freeze(LocalStorage);
