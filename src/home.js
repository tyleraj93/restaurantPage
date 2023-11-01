import clearContent from "./clearContent";

// Build a home section in a given parameter

export default function buildHome(location) {
    if (location.textContent) {
        clearContent(location);
    };
    // Name section
    const titleHolder = document.createElement("div");
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Loki's Lounge";
    titleHolder.appendChild(restaurantName);
    location.appendChild(titleHolder);

    // Review section
    const reviewHolder = document.createElement("div");
    const name = document.createElement("p");
    name.textContent = "Olaf K";
    reviewHolder.appendChild(name);
    const rating = document.createElement("p");
    rating.textContent = "⭐⭐⭐⭐⭐";
    reviewHolder.appendChild(rating);
    const review = document.createElement("p");
    review.textContent =
        "As a fan of Norse mythology, I couldn't resist visiting Loki's Lair. The Heimdall's Hearth Breads were a comforting start, and I was thoroughly impressed by the Niflheim Frost Bites – refreshing and innovative. But what really stole the show was Loki's Trick cocktail. Smoky, fruity, with a hint of mint – it's a drink fit for the gods! Highly recommend.";
    reviewHolder.appendChild(review);
    location.appendChild(reviewHolder);

    // Hours section
    const hoursHolder = document.createElement("div");
    const hours = document.createElement("h2");
    hours.textContent = "Hours";
    hoursHolder.appendChild(hours);
    const sunday = document.createElement("p");
    sunday.textContent = "Sunday: 4pm - 10pm";
    hoursHolder.appendChild(sunday);
    const monday = document.createElement("p");
    monday.textContent = "Monday: 6pm - 12am";
    hoursHolder.appendChild(monday);
    const tuesday = document.createElement("p");
    tuesday.textContent = "Tuesday: 6pm - 12am";
    hoursHolder.appendChild(tuesday);
    const wednesday = document.createElement("p");
    wednesday.textContent = "Wednesday: 6pm - 12am";
    hoursHolder.appendChild(wednesday);
    const thursday = document.createElement("p");
    thursday.textContent = "Thursday: 6pm - 12am";
    hoursHolder.appendChild(thursday);
    const friday = document.createElement("p");
    friday.textContent = "Friday: 6pm - 2am";
    hoursHolder.appendChild(friday);
    const saturday = document.createElement("p");
    saturday.textContent = "Saturday: 4pm - 2am";
    hoursHolder.appendChild(saturday);
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
