import { getScrollbarWidth } from './scroll';

const ABSOLUTE_ELEMS = '.header, .callback-box';

export function lockBody() {
  const scrollbarWidthPX = `${getScrollbarWidth()}px`;

  document.body.classList.add('body--lock');
  document.body.style.paddingRight = scrollbarWidthPX;

  const $absoluteElems = document.querySelectorAll(ABSOLUTE_ELEMS);
  $absoluteElems.forEach(($elem) => ($elem.style.paddingRight = scrollbarWidthPX));
}

export function unlockBody() {
  document.body.classList.remove('body--lock');
  document.body.style.paddingRight = '';

  const $absoluteElems = document.querySelectorAll(ABSOLUTE_ELEMS);
  $absoluteElems.forEach(($elem) => ($elem.style.paddingRight = ''));
}

export function isBodyLock() {
  if (document.body.classList.contains('body--lock')) {
    return true;
  }

  return false;
}

export default {
  lockBody,
  unlockBody,
  isBodyLock
};
