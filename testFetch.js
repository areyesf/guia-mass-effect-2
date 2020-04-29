document.addEventListener("DOMContentLoaded", getJson);

function getJson() {
    fetch("./sources/missions.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }