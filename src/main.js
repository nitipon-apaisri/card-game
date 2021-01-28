import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
   data() {
      return {
         cardNumber: 5,
         symbol: "clubs",
         maxNumber: 13,
         allSymbol: ["clubs", "diamonds", "hearts", "spades"],
         number: 0,
         newNumber: 0,
         previousNumber: 0,
      };
   },
   methods: {
      randomNumber() {
         return Math.floor(Math.random() * Math.floor(this.maxNumber) + 1);
      },
      randomSymbol() {
         let randomIndex = Math.floor(Math.random() * this.allSymbol.length);
         let randomElement = this.allSymbol[randomIndex];
         return randomElement;
      },
      okButt() {
         this.previousNumber = this.number;
      },
      start() {
         document.querySelector(".ok-btn").style.display = "block";
         this.cardNumber = this.randomNumber();
         this.number = this.cardNumber;
         this.newNumber = this.randomNumber();
         if (this.cardNumber == 11) {
            this.cardNumber = "J";
         } else if (this.cardNumber == 12) {
            this.cardNumber = "Q";
         } else if (this.cardNumber == 13) {
            this.cardNumber = "K";
         } else if (this.cardNumber == 1) {
            this.cardNumber = "A";
         }
         this.symbol = this.randomSymbol();
      },
      lower() {
         if (this.previousNumber < this.number) {
            console.log("You win");
         } else {
            console.log("you lost");
         }
         this.start();
      },
   },
   render: (h) => h(App),
}).$mount("#app");
