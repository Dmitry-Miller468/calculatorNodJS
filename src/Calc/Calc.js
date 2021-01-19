import './Calc.css';

function Calc() {
   return (
      <div class="wrapperCenter">
         <input type="text" id="screen" disabled />
         <div class="memory">
            <button>MC</button>
            <button>MR</button>
            <button>M+</button>
            <button>M-</button>
            <button>MS</button>
            <button>M<sup>▼</sup></button>
         </div>
         <div class="wrapper">
            <div class="oneSide">
               <div id="ops2" class="opSymbol">
                  <button name="operator" data-value="Prc">%</button>
                  <button name="clearB">CE</button>
                  <button name="clear">C</button>
                  <button name="SplX">1/x</button>
                  <button name="X2">x<sup>2</sup></button>
                  <button name="Sq">2√x</button>
               </div>
               <div class="numb" id="nums">
                  <button name="number" data-value="7">7</button>
                  <button name="number" data-value="8">8</button>
                  <button name="number" data-value="9">9</button>
                  <button name="number" data-value="4">4</button>
                  <button name="number" data-value="5">5</button>
                  <button name="number" data-value="6">6</button>
                  <button name="number" data-value="1">1</button>
                  <button name="number" data-value="2">2</button>
                  <button name="number" data-value="3">3</button>
                  <button name="plus" data-value="plus">+/-</button>
                  <button name="number" data-value="0">0</button>
                  <button name="number" data-value=".">.</button>
               </div>
            </div>
            <div id="ops" class="twoSide">
               <button name="delete">⌫</button>
               <button name="operator" data-value="Spl">/</button>
               <button name="operator" data-value="Mul">x</button>
               <button name="operator" data-value="Min">-</button>
               <button name="operator" data-value="Sum">+</button>
               <button name="result">=</button>
            </div>
         </div>
      </div>
   );
}

export default Calc;