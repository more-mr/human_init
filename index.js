var today = new Date();
var opt = { year: "numeric" };
var year = today.toLocaleDateString("en-US", opt);

document.querySelectorAll("#year")[0].innerHTML =  year;
