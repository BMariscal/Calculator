display = document.querySelector("input");

let list = []; //values displayed
let current_operation = ""; //values calculated

function myFunction(x) {
  //Calculate and display answer after '=' button is pressed
  function checkVal() {
    try{
        let answer = eval(current_operation);
    // display.value = answer.toPrecision(4);
        display.value = answer
        if (list.length === 13 && !(isNaN(list[list.length-1]))) {
            list = [];
            list.push(answer);
            current_operation = answer.toString();
         
         }else {
            list = [];
            list.push(answer);
            current_operation = answer.toString();
        
          }
    }catch(e){
         display.value = 'ERROR';
       }
  }

    //When AC button's pressed
  function allCancel() {
    current_operation = "";
    display.value = "0";
    list = [];
  }


  //When CE button's pressed
  function cancelEntry() {
    let newlisting = [];
    list.pop()
    list.pop()

    //current_operation = list.join('')

    for (let i=0; i < list.length; i++){
      
        if(list[i] === '÷'){
          newlisting.push('/');
        }else if (list[i] === 'x'){
          newlisting.push('*');
        }else{
          newlisting.push(list[i]);
        }

    }
 
    current_operation = newlisting.join('')
    if (current_operation.length === 0){
      display.value = "0"
    }else{
      display.value = list.join('') 
    }
    
  }
  
  
  
  //builds current_operation/calls checkVal() when '=' is pressed/calls AC and CE functions
  if (x) {
    console.log(x)
    if (x === "=") {
      checkVal();
    }
    else {
      list.push(x);
      display.value = list.join("");
      if (x === "x") {
        current_operation += "*";
       
      } else if (x === "÷") {
        current_operation += "/";
        
      } else if (x === "AC") {
        allCancel();
        
      } else if (x === "CE") {
        cancelEntry();
        
      } else {
        current_operation += x;
       
      }
    }
  }

}
