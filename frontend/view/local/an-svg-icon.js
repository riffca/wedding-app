import './an-svg-icon.scss';

export default {
    props: [
        'path'
    ],

    template: `
        <div id="an-svg-icon"></div>
    `,

    ready(){
        fetch(this.path)
            .then((response)=>{
                return response.text();
            })
            .then(html=>{
                this.$el.innerHTML = html;
            });
    }
};
