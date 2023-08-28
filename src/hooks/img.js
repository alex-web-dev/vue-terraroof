export function useImage(path) {
  return new URL(`../assets/img/${path}`, import.meta.url).href;
}

export default {
  useImage
};
