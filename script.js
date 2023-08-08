const placesData = {
    bengaluru: {
        name: "Bengaluru",
        placesToVisit: ["Bangalore palace", "Iskcon Temple", "Cubbon park","Botonical garden"],
        hotels: ["Hotel 1", "Hotel 2", "Hotel 3"],
        famousThings: ["Famous Thing 1", "Famous Thing 2", "Famous Thing 3"],
    },
    mysore: {
        name: "Mysore",
        placesToVisit: ["Mysore Palace", "Sri Chamarajendra Zoological Gardens", "Sri Chamundeshwari Temple"],
        hotels: ["Hotel A", "Hotel B", "Hotel C"],
        famousThings: ["Famous Thing A", "Famous Thing B", "Famous Thing C"],
    },
    ooty: {
        name: "Ooty",
        placesToVisit: ["Place X", "Place Y", "Place Z"],
        hotels: ["Hotel X", "Hotel Y", "Hotel Z"],
        famousThings: ["Famous Thing X", "Famous Thing Y", "Famous Thing Z"],
    },
    coimbatore: {
        name: "Coimbatore",
        placesToVisit: ["Place P", "Place Q", "Place R"],
        hotels: ["Hotel P", "Hotel Q", "Hotel R"],
        famousThings: ["Famous Thing P", "Famous Thing Q", "Famous Thing R"],
    },
    palani: {
        name: "Palani",
        placesToVisit: ["Place M", "Place N", "Place O"],
        hotels: ["Hotel M", "Hotel N", "Hotel O"],
        famousThings: ["Famous Thing M", "Famous Thing N", "Famous Thing O"],
    },
    madurai: {
        name: "Madurai",
        placesToVisit: ["Place G", "Place H", "Place I"],
        hotels: ["Hotel G", "Hotel H", "Hotel I"],
        famousThings: ["Famous Thing G", "Famous Thing H", "Famous Thing I"],
    },
};

function loadContent(place) {
    const contentDiv = document.getElementById("content");
    const data = placesData[place];

    let contentHTML = `<h2>${data.name}</h2>`;
    contentHTML += "<h3>Places to Visit:</h3>";
    contentHTML += "<ul>";
    data.placesToVisit.forEach((place) => {
        contentHTML += `<li>${place}</li>`;
    });
    contentHTML += "</ul>";

    contentHTML += "<h3>Hotels:</h3>";
    contentHTML += "<ul>";
    data.hotels.forEach((hotel) => {
        contentHTML += `<li>${hotel}</li>`;
    });
    contentHTML += "</ul>";

    contentHTML += "<h3>Famous Things:</h3>";
    contentHTML += "<ul>";
    data.famousThings.forEach((thing) => {
        contentHTML += `<li>${thing}</li>`;
    });
    contentHTML += "</ul>";

    contentDiv.innerHTML = contentHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const place = link.getAttribute("href").substring(1);
            loadContent(place);
        });
    });
});
