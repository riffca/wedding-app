import mediaQuery from '../../service/mediaQuery';




// E X P O R T
export default {

    bind() {
            let el = this.el;
            // N E E D S
            let $ = document.querySelector.bind(document);

            function queryFn(photosMedia) {
                if (photosMedia.matches) {
                    let LightboxHeight = window.getHeight - $('#an-brand').offsetHeight - 90;
                    el.style.maxHeight = LightboxHeight + 'px';
                    console.log('Lightbox Height: %s px', LightboxHeight);
                } else {
                    el.style.maxHeight = 'none';
                    console.log('mediaQuery cancel');
                }
            }

            el.onload = () => {

                //add opacity animation
                el.classList.add('img-loader');

                //add max-height to light-box images
                if (el.classList.contains('img')) {

                    let photosMedia = window.matchMedia('(min-width:768px)');
                    photosMedia.addListener(queryFn);
                    queryFn(photosMedia);

                    /*new mediaQuery(matchMedia('(min-width:768px)'), {
                        matched() {
                            let LightboxHeight = window.getHeight - $('#an-brand').offsetHeight - 90;
                            el.style.maxHeight = LightboxHeight + 'px';
                            console.log('Lightbox Height: %s px', LightboxHeight);

                        },
                        unMatched() {
                            el.style.maxHeight = 'none';
                            console.log('mediaQuery cancel');
                        }
                    });*/

                }

                //add portrait or album class not used
                if (el.naturalHeight > el.naturalWidth) {
                    //console.log(`CSS 'portrait' class added`);
                    el.classList.add('portrait');
                }
            };
            el.oncontextmenu = (e) => {
                e.preventDefault();
            };
        },

        update(oldValue, newValue) {

        }
};
