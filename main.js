const app = Vue.createApp({
    data(){
        return { 
            product: 'Socks',
            description:'long description here',
            image:'./assets/images/socks_green.jpg',
            inventory: 0,
            onSale: false,
            details:['50% cotton','30% wool', '20% polyester'],
            items:[
                {id:123,color:'green',image:'./assets/images/socks_green.jpg'},
                {id:234,color:'blue', image:'./assets/images/socks_blue.jpg'},
            ],
            cart:0,
            inStock:false

        }
    },
    methods:{
        addToCart(){
            this.cart += 1;
        },
        removeFromCart(){
            if(this.cart >0)
            this.cart -=1;
        },
        updateImage(image){
            console.log('---',image);
            this.image = image;
        }
    }
});