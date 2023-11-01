import buildHome from "./home";
import buildMenu from "./menu";

//Builds a header with 3 buttons before a given "location" parameter.
export default function buildHeaderBefore(location) {
    const body = document.body;
    const header = document.createElement("div");
    header.id = "header";

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.classList.add("navButton");
    homeButton.addEventListener("click", () => buildHome(location));
    header.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("navButton");
    menuButton.addEventListener("click", () => buildMenu(location));
    header.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("navButton");
    header.appendChild(contactButton);

    body.insertBefore(header, location);
};