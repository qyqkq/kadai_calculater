var result = document.getElementById("result");
    function update(){
      result.value = "";
    }
    
    function period(){
      if(result.value.slice(-1) !== ".") {
        result.value += ".";
      }else if(result.value.slice(-1) === "0"){
        result.value = 0 + ".";
      }
    }
    
    function ope(elem){
      if(result.value.slice(-1) === "+" ||  result.value.slice(-1) === "-" || result.value.slice(-1) === "*" || result.value.slice(-1) === "/" ){
        return;
      }else{
      result.value = result.value + elem.value;
      }
    }
    
    function edit(elem) {
      if(result.value === "0"){
        result.value = "";
      }else{
        result.value += "";
      }
      result.value = result.value + elem.value; 
    }
    
    

    
    function calc(){
      result.value = new Function("return " + result.value)();
    }
    