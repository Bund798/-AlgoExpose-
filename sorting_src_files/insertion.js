//aynchronus function for insertion sort
async function InsertionSort()
{ let bars = document.querySelectorAll(".bar");
  
// Provide lightgreen colour to 0th bar
bars[0].style.backgroundColor = " rgb(49, 226, 13)";
for(let i=1;i<bars.length;i++)
{
    let j= i-1;
    let key=bars[i].style.height;



bars[i].style.backgroundColor = "darkblue";
      
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
  
    // For placing selected element at its correct position 
    while (j >= 0 && parseInt(bars[j].style.height) >parseInt(key) ) {
        
      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "darkblue";
        
      // For placing jth element over (j+1)th element
     
      swap(bars[j+1],bars[j]);
     
  
      // Assign j-1 to j
      j = j - 1;
  
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        },delay)
      );
        
      // Provide lightgreen color to the sorted part
      for(let k=i;k>=0;k--){
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
  
    // Placing the selected element to its correct position
   bars[j+1].style.height=key;
    
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      },delay)
    );
      
    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
}