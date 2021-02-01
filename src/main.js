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
         maxAttempts: 5,
         points: 0,
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
         if (this.maxAttempts == 0) {
            location.reload();
         }
      },
      start() {
         this.msg = "Welcome to The Game";
         document.querySelector(".alert").style.display = "block";
         document.querySelector(".score-board").style.display = "block";
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
      win() {
         this.points += 10;
         this.msg = "You win";
      },
      lost() {
         this.msg = "You lost";
         this.maxAttempts -= 1;
         if (this.maxAttempts == 0) {
            this.msg = "No more attempts, Goodbye 👋";
         }
      },
      lower() {
         this.start();
         if (this.previousNumber > this.number) {
            this.win();
         } else {
            this.lost();
         }
      },
      higher() {
         this.start();
         if (this.previousNumber < this.number) {
            this.win();
         } else {
            this.lost();
         }
      },
      equal() {
         this.start();
         if (this.previousNumber == this.number) {
            this.win();
         } else {
            this.lost();
         }
      },
   },
   render: (h) => h(App),
}).$mount("#app");
