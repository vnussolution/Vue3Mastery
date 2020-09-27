app.component("product-display", {
    props:{
        premium:{type:Boolean, required:true}
    },
  template:
    /*html*/
    `      <div class="product-display">
                <div class="product-container">
                <div class="product-image">
                    <img
                    :src="image"
                    class="img-responsive"
                    :class="{'out-of-stock-img': !inStock}"
                    alt="Image"
                    />
                </div>
                <div class="product-info">
                    <h1>{{title}}</h1>
                    <p v-if="inventory > 10">In stock</p>
                    <p > Shipping : {{shipping}} </p>
                    <p v-else-if="inventory <= 10 && inventory >0">Almost sold out</p>
                    <p v-else="inventory <= 0">Sold out</p>
                    <p v-if="onSale">On Sale</p>
                    <ul>
                    <li v-for="detail in details">{{detail}}</li>
                    </ul>
                    <div
                    v-for="(item, index ) in items"
                    :key="item.id"
                    @mouseover="updateImage(index)"
                    class="color-circle"
                    :style="{backgroundColor:item.color}"
                    ></div>
                    <button
                    class="button"
                    @click="addToCart"
                    class=""
                    :disabled="!inStock"
                    :class="{disabledButton:!inStock}"

                    >
                    Add to cart
                    </button>
                    <button class="button" @click="removeFromCart">
                    Rmove from cart
                    </button>
                </div>
                </div>
            </div>`,
  data() {
    return {
      product: "Socks",
      description: "long description here",
      inventory: 2,
      onSale: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      items: [
        {
          id: 123,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 234,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      brand: "Vue Mastery",
      selectedItem: 0,
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart',this.items[this.selectedItem].id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart',this.items[this.selectedItem].id);
    },
    updateImage(index) {
      this.selectedItem = index;
    },
  },
  computed: {
    title() {
      const onSale = this.onSale ? " is on sale" : "";
      return this.brand + " " + this.product + onSale;
    },
    image() {
      return this.items[this.selectedItem].image;
    },
    inStock() {
      console.log(" aa", this.items[this.selectedItem].quantity);
      return this.items[this.selectedItem].quantity > 0 ? true : false;
    },
    shipping(){
        return this.premium ? 'Free':'2.99'
    }
  },
});
