createNewArray()
function createNewArray(count=50,doSort=false) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
     let array = [];
    for (let i = 0; i < count; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    if(doSort===true)
    {
        // Sorting Array in ascending order
     array.sort(function (a, b) {
	return a - b;
    });
    }

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < count; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 3}px`;
       
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bar.innerHTML=Math.floor(parseInt(bar.style.height)/3);
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
if(val=='linearSerach')
{document.querySelector('.Search').addEventListener('click',async function(){
   
    document.querySelector('.Search').disabled=true;
    await  LinearSearch();
   document.querySelector('.Search').disabled=false;

});}
else
if(val=='binarySearch')
{document.querySelector('.Search').addEventListener('click',async function(){
   
    document.querySelector('.Search').disabled=true;
    createNewArray(50,true);
    console.log("array sorted");
    await  BinarySearch();
   document.querySelector('.Search').disabled=false;

});}

});