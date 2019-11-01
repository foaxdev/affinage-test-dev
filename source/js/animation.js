'use strict';

(() => {
  const TIMEOUT = 2000;

  const elFirstImage = document.querySelector('.slider__image--first');
  const elFirstWebpImage = document.querySelector('.js-slider-first-webp');

  const elSecondImage = document.querySelector('.slider__image--second');
  const elSecondWebpImage = document.querySelector('.js-slider-second-webp');

  const elsControlButtons = document.querySelectorAll('.slider__button');

  const replaceImageAddresses = () => {
    [elFirstWebpImage.srcset, elSecondWebpImage.srcset] = [elSecondWebpImage.srcset, elFirstWebpImage.srcset];
    [elFirstImage.srcset, elSecondImage.srcset] = [elSecondImage.srcset, elFirstImage.srcset];
    [elFirstImage.src, elSecondImage.src] = [elSecondImage.src, elFirstImage.src];
  };

  const preventHorizontalScroll = () => {
    document.body.classList.toggle('js-scroll');
  };

  const changeClassesForAnimation = (isSlow) => {
    let postfix = isSlow ? "-slow" : "-fast";

    elFirstImage.classList.remove(`slider__image--first-animation${postfix}`);
    elFirstImage.classList.add(`slider__image--first-animation${postfix}`);

    elSecondImage.classList.remove(`slider__image--second-animation${postfix}`);
    elSecondImage.classList.add(`slider__image--second-animation${postfix}`);
    preventHorizontalScroll();

    setTimeout(() => {
      elFirstImage.classList.remove(`slider__image--first-animation${postfix}`);
      elSecondImage.classList.remove(`slider__image--second-animation${postfix}`);
      preventHorizontalScroll();
    }, TIMEOUT);
  };

  const changeImagesFastHandler = window.debounce(() => {
    changeClassesForAnimation(false);
    replaceImageAddresses();
  });

  const changeImagesSlowHandler = window.debounce(() => {
    changeClassesForAnimation(true);
    replaceImageAddresses();
  });

  elsControlButtons[0].addEventListener('click', changeImagesFastHandler);
  elsControlButtons[1].addEventListener('click', changeImagesSlowHandler);
})();
