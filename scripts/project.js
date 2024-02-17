// get JSON
const getPlanets = async () =>{
    const response = await fetch("JSON/SWplanets.json");
    let list;
    if (response.ok){
        list = await response.json();    }
    return list;
}

let planetList;

getPlanets().then(list =>{
    planetList = list;
    return planetList;
})

// get input
const getInput = () => {
    const searchInput = document.getElementById("search").querySelector("input").value;
    return searchInput;
}

const getMenu = () =>{
    const searchType = document.getElementById("drop-menu").value;
    return searchType;
}

// search JSON for input
const search = () =>{
    let input = getInput();
    let searchType = getMenu();
    console.log(searchType);
    if (searchType == "p"){
        let filteredPlanets = planetList.filter(planetList => planetList.Name.includes(input));
        displayResults(filteredPlanets);
    }else{
        let filteredPlanets = planetList.filter(planetList => planetList.Grid == input);
        displayResults(filteredPlanets);
    }
}

// display results
// const displayResults = (searchResults) =>{
//     let results = document.getElementById("results");
//     results.reset();
//     let resultsTable = document.getElementById("results-table")
//     searchResults.forEach(planet => {
//         const row = document.createElement("tr");
//         const nameColumn = document.createElement("td");
//         const regionColumn = document.createElement("td");
//         const sectorColumn = document.createElement("td");
//         const systemColumn = document.createElement("td");
//         const gridColumn = document.createElement("td");
//         nameColumn.innerHTML = planet.Name;
//         regionColumn.innerHTML = planet.Region;
//         sectorColumn.innerHTML = planet.Sector;
//         systemColumn.innerHTML = planet.System;
//         gridColumn.innerHTML = planet.Grid;
//         row.appendChild(nameColumn);
//         row.appendChild(regionColumn);
//         row.appendChild(sectorColumn);
//         row.appendChild(systemColumn);
//         row.appendChild(gridColumn);
//         resultsTable.appendChild(row);
//     })
// }

const displayResults = (searchResults) => {
    let resultsTable = document.getElementById("results-table");

    // Clear all rows except the header row
    while (resultsTable.rows.length > 1) {
        resultsTable.deleteRow(1);
    }

    searchResults.forEach(planet => {
        const row = resultsTable.insertRow();

        const nameColumn = row.insertCell();
        const regionColumn = row.insertCell();
        const sectorColumn = row.insertCell();
        const systemColumn = row.insertCell();
        const gridColumn = row.insertCell();

        nameColumn.innerHTML = planet.Name;
        regionColumn.innerHTML = planet.Region;
        sectorColumn.innerHTML = planet.Sector;
        systemColumn.innerHTML = planet.System;
        gridColumn.innerHTML = planet.Grid;
    });
}

planetList = getPlanets();