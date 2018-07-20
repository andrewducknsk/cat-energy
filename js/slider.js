(function () {
    if(document.location.pathname === '/' || document.location.pathname === '/index.html') {
        var toddler =document.querySelector('.toddler--js'),
            toddlerPin = document.querySelector('.toddler__pin--js'),
            toddlerLine = document.querySelector('.toddler__line--js'),
            slideBefore = document.querySelector('.slider__slide--before-js');

        function sliderImg(e) {
            e.preventDefault();
            var coords = toddlerLine.getBoundingClientRect().left;

            function onMouseMove (eMove) {
                eMove.preventDefault();

                var toddlerLineWidth = toddlerLine.offsetWidth;

                var shift = eMove.clientX - coords;
                var percent = shift * 100 / toddlerLineWidth + '%';

                toddlerPin.style.left = shift + 'px';

                if (shift <= 0) {
                    toddlerPin.style.left = 0 + 'px';
                    percent = 0;

                } else if (shift >= toddlerLineWidth) {
                    toddlerPin.style.left = toddlerLineWidth + 'px';
                    percent = 100;
                }

                slideBefore.style.clipPath = 'inset(0 ' + percent + ' 0 0)';
            }

            function onMouseLeave () {
                toddler.removeEventListener('mousemove', onMouseMove);
            }

            function onMouseUp (evUp) {
                evUp.preventDefault();

                toddler.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp)
            }

            toddler.addEventListener('mouseleave', onMouseLeave);
            toddler.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
        toddlerPin.addEventListener('mousedown', sliderImg);
    };
}());