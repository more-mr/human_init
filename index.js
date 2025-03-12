document.getElementsByClassName("hero__description")[0].innerHTML= "<button onclick='getData()' id='testB'> Click Me! </button>"


async function getData() {
  const url = "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json";
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
