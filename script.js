// TODO: add code here
window.addEventListener("load", function() {
  let json = [];
  // put DOM code here to ensure elements have been loaded
  console.log('window loaded');
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
      console.log(json);
      console.log(json.length);
      const container = document.getElementById("container");
      json.sort((a, b) => (a.hoursInSpace > b.hoursInSpace) ? 1 : -1)
      for (let i =0; i<json.length; i++){
        // console.log(json[i].firstName);
        // container.innerHTML = container.innerHTML  + "<br>" + json[i].firstName;
        container.innerHTML +=
        `<div class="astronaut">
           <div class="bio">
              <h3>${json[i].firstName} ${json[i].lastName}</h3>
              <ul>
                 <li>Hours in space: ${json[i].hoursInSpace}</li>
                 <li id="${json[i].id}">Active: ${json[i].active}</li>
                 <li >Skills: ${json[i].skills.join(", ")}</li>
              </ul>
           </div>
           <img class="avatar" src=${json[i].picture}>
        </div>`
        if (json[i].active === true) {
          const active = document.getElementById(String(json[i].id));
          active.style.color = "green";
        }//for if
      }//for loop
      container.innerHTML += `
                <h2>Total number of astronauts: ${json.length}</h2> `           
      })  //json function  
  })//response function
})//window load


