/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kaleb Bateman",
    photo: "images/ID.jpg",
    favoriteFoods: ["Tonkatsu", "Chicken Wrap-ups", "Pizza", "Enchiladas"],
    hobbies: ["Reading", "Boardgames", "Card Games", "Worldbuilding", "Conlanging"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Antioch, California",
        length: "1 year"
    },
    {
        place: "Martinez, California",
        length: "24 years"
    },
    {
        place: "Rexburg, Idaho",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent=myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(entry =>{
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = entry.place;
    dd.textContent = entry.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});