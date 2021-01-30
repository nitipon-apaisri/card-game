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
         msg: "",
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
         document.querySelector(".alert").style.display = "none";
         this.previousNumber = this.number;
      },
      start() {
         this.msg = "Welcome to The Game";
         document.querySelector(".alert").style.display = "block";
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
         this.start();
         if (this.previousNumber > this.number) {
            this.msg = "You win";
            console.log("You win");
         } else {
            this.msg = "You lost";
            console.log("you lost");
         }
      },
      higher() {
         this.start();
         if (this.previousNumber < this.number) {
            this.msg = "You win";
            console.log("You win");
         } else {
            this.msg = "You lost";
            console.log("you lost");
         }
      },
      equal() {
         this.start();
         if (this.previousNumber == this.number) {
            this.msg = "You win";
            console.log("You win");
         } else {
            this.msg = "You lost";
            console.log("you lost");
         }
      },
   },
   render: (h) => h(App),
}).$mount("#app");
