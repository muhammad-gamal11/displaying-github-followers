const get = (item) => {
  const element = document.querySelector(item);
  if (element) return element;
  throw new Error("selected item doesn't exist");
};

export default get;
