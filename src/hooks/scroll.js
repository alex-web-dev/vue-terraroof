export function useScrollbar() {
  function getScrollbarWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }

  function getScrollbarWidthPX() {
    return `${getScrollbarWidth()}px`;
  }

  return { getScrollbarWidth, getScrollbarWidthPX };
}