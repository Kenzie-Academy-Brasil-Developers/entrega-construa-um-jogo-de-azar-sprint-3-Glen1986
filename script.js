let Directry = "./img/";
//Set variables for indicating path to folder includes images.
let list = new Array();
//var list indicates full path to the images including its file name.
for (let i = 0; i < 10; i++) {
  list[i] = Directry + i + ".jpg";
  //var list = "directory to folder" + "one of the numbers(i)" + "extention(png)".
  new Image().src = list[i];
  //Create image of which src is list[i].
}
let counter = 0;

function slot() {
  let Random = setInterval(function () {
    // Start generating random numbers. In this case generating process is displayed before the number has been decided.
    counter++;
    //Counter to count the times generating process.
    var left = Math.floor(Math.random() * 10);
    var center = Math.floor(Math.random() * 10);
    var right = Math.floor(Math.random() * 10);
    // The number is generated in decimal point so that the number should be multiplied by 10. Then the number will be rounded to integer by "floor".
    document.left.src = list[left];
    document.center.src = list[center];
    document.right.src = list[right];

    //Show the numbers during number generating process.
    if (counter > 5) {
      let final_left = list[left];
      let final_center = list[center];
      let final_right = list[right];
      // Show five numbers during generating process in 10 mm/sec.

      if (
        final_left == final_center ||
        final_left == final_right ||
        final_center == final_right
      ) {
        document.getElementById("all").innerHTML = "Segundoooo!";
        //In this case, if two of three numbers matches the user will get second prize.
      } else if (final_left == final_center && final_left == final_right) {
        document.getElementById("all").innerHTML = "Ganhooooo!!!!!!!";

        //When all of three numbers matches the user will get first prize.
      } else {
        document.getElementById("all").innerHTML = "Pra casa!";
        //When none of three numbers matches the user will fail.
      }

      counter = 0;
      clearInterval(Random);
      // After the result will be displayed the random number generating process should be closed.
    }
  }, 100); //End of setInterval function
} // End of function slot
