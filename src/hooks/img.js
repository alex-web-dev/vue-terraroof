export function getImage(path) {
  return new URL(`../assets/img/${path}`, import.meta.url).href;
}

export default {
  getImage
};
