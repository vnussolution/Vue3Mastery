const app = Vue.createApp({
    data(){
        return { 
            cart:[],
            premium:false
        }
    },
    methods:{
        addToCart(id){
        this.cart.push(id);
      },
      removeFromCart(id){
          const index = this.cart.indexOf(id);
          this.cart.splice(index,1);
      }

    }
});