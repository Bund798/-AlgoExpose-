createNewArray()
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
        bar.innerHTML=array[i];
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
});