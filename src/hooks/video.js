export function getVideo(path) {
  const pathToVideos = new URL('@/assets/video/', import.meta.url);
  return `${pathToVideos}/${path}`;
}

export default {
  getVideo
};
