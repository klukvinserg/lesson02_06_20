let i = 0;

function myClick() {
  let myDiv = document.createElement("div");
  myDiv.classList.add("myDiv");
  myDiv.setAttribute("id", i)

  let radio = document.createElement("input")
  radio.setAttribute("name", "buttonR");
  radio.setAttribute("type", "radio")

  let myTag = document.createElement("b");
  myTag.innerHTML = "Phone"

  let myTagTwo = document.createElement("b");
  myTagTwo.innerHTML = "Priority";

  let myTagThree = document.createElement("b");
  myTagThree.innerHTML = "Phone type";


  let myButton = document.createElement("input");
  myButton.setAttribute("name", "buttonD");
  myButton.setAttribute("type", "button");
  myButton.setAttribute("value", "delete");
  myButton.addEventListener('click', deleteEl)     
 
  
 


  radio.setAttribute("name", "buttonR");
  radio.setAttribute("type", "radio")


  let selectMy = document.createElement("select");
  selectMy.setAttribute("name", "selectName");

  let selectMyOption = document.createElement("option");
  selectMyOption.innerHTML = "Пункт 1";
  selectMyOptionTwo = document.createElement("option");
  selectMyOptionTwo.innerHTML = "Пункт 2";

  selectMy.appendChild(selectMyOption);
  selectMy.appendChild(selectMyOptionTwo);
  

  let myInput = document.createElement("input");
  myInput.setAttribute("name", "phone");
  myInput.setAttribute("type", "text");
  myDiv.appendChild(myTag);
  myDiv.appendChild(myInput);
  myDiv.appendChild(myTagThree);
  myDiv.appendChild(selectMy);
  myDiv.appendChild(myTagTwo);
  myDiv.appendChild(radio);
  myDiv.appendChild(myButton);
  main.appendChild(myDiv);

  i++

}


function deleteEl(event) {  
  
 let delMy = document.getElementById(event.path[1].id);


 
 console.log(delMy);
 console.log(event.path[1].id);
 delMy.remove()
  
}


// function myClick() {


//   let myDiv = document.createElement("div");
  

//   if (r.checked === false) {
    

//   myDiv.innerHTML = "remeber no";

//   mainBlock.appendChild(myDiv);

//     // document.write("no")

//   } else {
//     // document.write("Привет" + nameU.value)

//     myDiv.innerHTML = "You are " + nameU.value;

//     mainBlock.appendChild(myDiv);
//   }

  
// }
