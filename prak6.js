//15 вариант
let menu = { 
  width: 300, 
  height: 200, 
  title: "Menu", 
  func: function(){ alert("hello1") }, 
  func2: function(){ alert("hello2") }, 
  func3: function(){ alert("hello3") }, 
  func4: function(){ alert("hello4") }, 
  func5: function(){ alert("hello5") }, 
  func6: function(){ alert("hello6") }, 
  func7: function(){ alert("hello7") }, 
  func8: function(){ alert("hello8") }, 
  func08: function(){ alert("hello9") }, 
  func18: function(){ alert("hello10") }, 
  func28: function(){ alert("hello11") }, 
  func38: function(){ alert("hello12") } 
}; 
let count = 0; 
let a = {}; 
let evenFun=(object,callback)=> { 
  for (key in object) { 
    if (typeof object[key] === "function") { 
      count++; 
    } 
  } 
  callback(); 
} 

evenFun(menu,function(){ 
  alert("всего методов: " + count); 
  let i = 0; 
  for (key in menu) { 
    if (typeof menu[key] === "function") { 
      a = menu[key]; 
      i++; 
      if(i % 2 == 0){ 
        a(); 
      } 
    } 
  } 
});