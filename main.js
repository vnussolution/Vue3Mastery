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
                {id:123,color:'green'},
                {id:234,color:'blue'},
            ]
        }
    }
});