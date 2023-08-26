const app = Vue.createApp({
    data(){
        return {
            item_no: 0,
            product: 'Socks',
            image: 'assets/images/socks_blue.jpg',
            availability: true,
            options: [
                {
                    colour: "blue", image: "assets/images/blue.png", image_url: "assets/images/socks_blue.jpg", alt: "blue"
                },
                {
                    colour: "green", image: "assets/images/green.png", image_url: "assets/images/socks_green.jpg", alt: "green"
                }
            ]
        }
    },
    methods:{
        alterImage(optionsImage){
            this.image = optionsImage;
        }
    }
})
