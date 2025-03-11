

await getData()

document.getElementsByClassName("hero__description")[0].innerHTML= "<button id="testB"> Click Me! </button>"

document.getElementById("testB").addEventListener("click", function(){
console.log("fuck you");

var today = new Date();
var opt = { year: "numeric" };
var year = today.toLocaleDateString("en-US", opt);

document.querySelectorAll("#year")[0].innerHTML =  year;



async function getData() {


})


  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
