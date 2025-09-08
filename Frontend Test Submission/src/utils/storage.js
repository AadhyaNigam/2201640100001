export const loadShortened = () => {
  return JSON.parse(localStorage.getItem("shortenedUrls")) || [];
};

export const saveShortened = (list) => {
  localStorage.setItem("shortenedUrls", JSON.stringify(list));
};