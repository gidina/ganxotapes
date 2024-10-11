const setUser = () => {
  sessionStorage.setItem("key", "value");
};

const getUser = () => {
  const data = sessionStorage.getItem("key");
  return data;
};
