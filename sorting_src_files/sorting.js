
createNewArray()

 
//to receive the input speed input
/*let delay=260;
    let delayEle=document.querySelector('#speed_input');
delayEle.addEventListener('input',function(){
    delay=320-parseInt(delayEle.value);
})*/


function createNewArray(count=50) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
     let array = [];
    for (let i = 0; i < count; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < count; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
       
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}
//to get user input algo

document.querySelector('.go').addEventListener('click',(e)=>{
    const Algo=document.querySelector('#algo');
console.log(Algo.value);
const val=Algo.value;
if(val=='bubbleSort')
{document.querySelector('.Sort').addEventListener('click',async function(){
   
    document.querySelector('.Sort').disabled=true;
    await  BubbleSort();
   document.querySelector('.Sort').disabled=false;

});}
else
if(val=='selectionSort')
{document.querySelector('.Sort').addEventListener('click',async function(){
   
    document.querySelector('.Sort').disabled=true;
    await  SelectionSort();
   document.querySelector('.Sort').disabled=false;

});}
});









