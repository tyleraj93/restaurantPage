import clearContent from "./clearContent";

const buildHours = (day, time, placement) => {
    const hours = document.createElement("p");
    hours.textContent = `${day}: ${time}`;
    placement.appendChild(hours);
}

export default function buildAbout(location) {
    if (location.textContent) {
        clearContent(location);
    }

    // Title section
    const titleHolder = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "About us";
    titleHolder.appendChild(title);
    location.appendChild(titleHolder);

    // Number Section
    const numberHolder = document.createElement("div");
    const number = document.createElement("h2");
    number.textContent = "Phone Number: "
    numberHolder.appendChild(number);
    const phone = document.createElement("p");
    phone.textContent = "666-555-4444";
    numberHolder.appendChild(phone);
    location.appendChild(numberHolder);

    // Hours section
    const hoursHolder = document.createElement("div");
    const hours = document.createElement("h2");
    hours.textContent = "Hours";
    hoursHolder.appendChild(hours);
    const sunday = buildHours("Sunday" , "4pm - 10pm", hoursHolder);
    const monday = buildHours("Monday", "6pm - 12am", hoursHolder);
    const tuesday = buildHours("Tuesday", "6pm - 12am", hoursHolder);
    const wednesday = buildHours("Wednesday", "6pm - 12am", hoursHolder);
    const thursday = buildHours("Thurday", "6pm - 12am", hoursHolder);
    const friday = buildHours("Friday", "6pm - 2am", hoursHolder);
    const saturday = buildHours("Saturday", "4pm - 2am", hoursHolder);
    location.appendChild(hoursHolder);

    // Location section, not the parameter
    const locationHolder = document.createElement("div");
    const locationText = document.createElement("h2");
    locationText.textContent = "Location";
    locationHolder.appendChild(locationText);
    const address = document.createElement("p");
    address.innerHTML =
        "Asgardian Plaza, <br>Valhalla Avenue, <br>Midgard District, <br>Thornton, <br>Norsewood, <br>9X4 2YZ <br>Realm of Legends, Northern Isles";
    locationHolder.appendChild(address);
    location.appendChild(locationHolder);
}