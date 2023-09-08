import { useScrollbar } from './scroll';

const ABSOLUTE_ELEMS = '.header, .callback-box';

export function useBody() {
  function lockBody() {
    const { getScrollbarWidthPX } = useScrollbar();

    document.body.style.paddingRight = getScrollbarWidthPX();

    const $absoluteElems = document.querySelectorAll(ABSOLUTE_ELEMS);
    $absoluteElems.forEach(($elem) => ($elem.style.paddingRight = getScrollbarWidthPX()));
    
    document.body.classList.add('body--lock');
  }

  function unlockBody() {
    document.body.classList.remove('body--lock');
    document.body.style.paddingRight = '';

    const $absoluteElems = document.querySelectorAll(ABSOLUTE_ELEMS);
    $absoluteElems.forEach(($elem) => ($elem.style.paddingRight = ''));
  }

  function isBodyLock() {
    if (document.body.classList.contains('body--lock')) {
      return true;
    }

    return false;
  }

  return { lockBody, unlockBody, isBodyLock };
}
