// Promise to swap two blocks
const container =document.querySelector('.flex-container');
function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;
  
        /*window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 260);
        });*/
    });
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {
    var bars = document.querySelectorAll(".bar");
  
    // BubbleSort Algorithm
    for (var i = 0; i < bars.length-1; i += 1) {
        for (var j = 0; j < bars.length - i - 1; j += 1) {
            console.log(bars.length);
            // To change background-color of the
            // bars to be compared
            bars[j].style.backgroundColor = "#FF4949";
            bars[j + 1].style.backgroundColor = "#FF4949";
  
            
            console.log("run");
            var value1 = parseInt(bars[j].style.height);
            var value2 = parseInt(bars[j + 1].style.height);
            console.log(value1);
            console.log(value2);
            // To compare value of two bar
            if (value1 >value2) {
                swap(bars[j], bars[j+1]);
                // To wait for .1 sec
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 100)
        );

                
                //bars = document.querySelectorAll(".bar");
            }
  
            // Changing the color to the previous one
            bars[j].style.backgroundColor = "#6b5b95";
            bars[j + 1].style.backgroundColor = "#6b5b95";
            
        } 
  
        //changing the color of greatest element 
        //found in the above traversal
        bars[bars.length - i-1].style.backgroundColor = "#13CE66";
    } bars[0].style.backgroundColor = "#13CE66";
}
