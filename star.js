// //CONST fetch = require("node-fetch")
// API:https://swapi.dev/
// fetch('https://swapi.dev/api/people')
//         .then(res => {
//             if (res.ok) {
//                 console.log ("REQUUEST SUCCESSFUL")
//             }
//             else {
//                 console.log("REQUEST NOT SUCCESSFUL")
//             }
//             return res
//         })
//         .then(res => res.json())
//         .then(data => console.log(data())
//             .catch(error => console.log(error))



const charholder = document.querySelector(".charholder")
const starpic = document.querySelector(".starpic")

let starData = []
fetch("https://swapi.dev/api/people")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        starData = data["results"]
        starData.map(({ name }, i) => starholder.innerHTML += 
            <div class="card" role="${i}" >
            <img src="https://random.imagecdn.app/500/150" />
               <h1 role="${i}"> ${name}</h1>
            </div>
        )
    })
    .catch(err => console.log(err))
console.log(charholder)


