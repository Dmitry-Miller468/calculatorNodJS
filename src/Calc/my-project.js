const numbersKeys = document.querySelector('#nums')
const operatorKeys = document.querySelector('#ops')
const opSymbolKeys = document.querySelector('#ops2')
const calc = {
   numberA: 0,
   numberB: 0,
   stage: 'A',
   screen: document.querySelector('#screen'),
   operation: '',

   init() {
      this._handleEvents();
   },
   _handleEvents() {
      numbersKeys.addEventListener('click', this._addNumber.bind(this));
      operatorKeys.addEventListener('click', this._opHandler.bind(this));
      opSymbolKeys.addEventListener('click', this._opHandler.bind(this));
   },

   _addNumber(evt) {
      if (evt.target.name === 'number') {
         let value = evt.target.dataset.value
         if (this[`number${this.stage}`] === 0) {
            this[`number${this.stage}`] = +value
            this[`number${this.stage}`] += value
         }
         this.screen.value = this[`number${this.stage}`];
      }
      if (evt.target.name === 'plus') {
         this.numberA = -20;
      }
   },
   _opHandler(evt) {
      if (evt.target.name === 'operator') {
         this.stage = 'B';
         // this.screen.value = '';
         this.operation = evt.target.dataset.value;
      }
      if (evt.target.name === 'result') {
         this[`_make${this.operation}`]();
         this.numberA = this.screen.value;
         this.numberB = 0;
         this.stage = 'A';
      }
      if (evt.target.name === 'clear') {
         this.screen.value = 0;
         this.numberA = 0;
         this.numberB = 0;
      }

      if (evt.target.name === 'clearB') {
         this.screen.value = 0;
         this.numberB = 0;
      }

      if (evt.target.name === 'X2') {
         this.screen.value = this.numberA * this.numberA
         this.numberA = 0;
         this.numberB = 0;
      }

      if (evt.target.name === 'Sq') {
         this.screen.value = Math.sqrt(this.numberA)
      }

      if (evt.target.name === 'delete') {
         this.numberA.remove()
      }

      if (evt.target.name === 'SplX') {
         this.screen.value = 1 / this.numberA
      }

   },

   _makeSum() {
      this.screen.value = +this.numberA + +this.numberB
   },
   _makeMin() {
      this.screen.value = +this.numberA - +this.numberB
   },
   _makeMul() {
      this.screen.value = this.numberA * this.numberB
   },
   _makeSpl() {
      this.screen.value = this.numberA / this.numberB
   },
   _makePrc() {
      this.screen.value = +this.numberA % +this.numberB
   },
}

calc.init()       