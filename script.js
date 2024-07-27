var input =  document.querySelector("#addtaskip")
var add = document.querySelector("#addtaskbtn")
var tasklist = document.querySelector("#tasklist")

var todotask;
var task ;

add.addEventListener("click", function(){
 task=input.value;
 if (task===''){}
 else{
 todotask=`<div class=" mt-3 w-full border border-sky-400  p-4 rounded-xl flex  justify-around">
        <input type="checkbox" class="w-7 border-2 text-grey-600 border-sky-500">
        <h2 id='tsheading' class="text-3xl px-2 font-bold">${task}</h2>
            <div class="">
                <button id="completed" class="bg-blue-500 hover:bg-blue-700 text-white font-bold  p-2 mr-2 rounded">Completed</button>
                <button id='delete' class="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded">Delete</button>
            </div>
                    
    </div>`
    tasklist.innerHTML+=todotask;
    input.value='';
 }

})


//Here we use event delagation :-
// Event delegation is a technique in JavaScript where you attach a single event listener to a parent element to manage events for multiple child elements.
//  This is particularly useful when dealing with dynamically added elements.

// How it Works:

// Event Bubbling: When an event occurs on an element, it first runs the handlers on that element, then on its parent, and so on, up the DOM tree.
// Single Listener: Instead of adding event listeners to each child element, you add a single event listener to the parent element.
// Check Target: In the event handler, you check the event.target property to determine which child element triggered the event.



tasklist.addEventListener("click", function(e){
    // console.log(e.target)
    if(e.target.id==='completed'){
        e.target.parentElement.parentElement.children[1].style.textDecoration = "line-through";
    } else if(e.target.id==='delete'){
        e.target.parentElement.parentElement.remove();
    }else if(e.target.type==='checkbox'){
        if(e.target.checked){
            e.target.parentElement.children[1].style.textDecoration = "line-through";
        }else{
            e.target.parentElement.children[1].style.textDecoration = "none";
        }
    }
    
})