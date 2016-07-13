import './an-lightbox.scss';
export default {

    template: require('./an-lightbox.html'),
    props: ['foto', 'showFullScreen'],
    data() {
        return {
            current: 1,
            full: false
        };
    },
    computed: {
        index: function() {
            let index = this.current;
            if (this.current > this.foto.length) {
                index = 1;
            }
            if (this.current <= 0) {
                index = 5;
            }
            return index;
        }
    },
    ready() {
        console.log('Lightbox Active');
    }
};
