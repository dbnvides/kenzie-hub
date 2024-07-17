export const setLocalStorage = (itemName, data) => {
  localStorage.setItem(itemName, JSON.stringify(data));
};

export const getLocalStorage = (item) => {
  const newItem = JSON.parse(localStorage.getItem(item));
  return newItem;
};
