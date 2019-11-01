'use strict';

(() => {
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

  const changeImagesHandler = window.debounce(() => {
    elFirstImage.classList.remove('slider__image--first-animation');
    elFirstImage.classList.add('slider__image--first-animation');

    elSecondImage.classList.remove('slider__image--second-animation');
    elSecondImage.classList.add('slider__image--second-animation');
    preventHorizontalScroll();

    setTimeout(() => {
      elFirstImage.classList.remove('slider__image--first-animation');
      elSecondImage.classList.remove('slider__image--second-animation');
      preventHorizontalScroll();
    }, 2000);

    replaceImageAddresses();
  });

  elsControlButtons.forEach((elControlButton) => {
    elControlButton.addEventListener('click', changeImagesHandler);
  });
})();
