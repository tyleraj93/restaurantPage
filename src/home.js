import clearContent from "./clearContent";

const buildReview = (reviewer, score, remarks, placement) => {
    const name = document.createElement("p");
    name.textContent = reviewer;
    placement.appendChild(name);
    const rating = document.createElement("p");
    rating.textContent = "⭐".repeat(score);
    placement.appendChild(rating);
    const review = document.createElement("p");
    review.textContent = remarks;
    placement.appendChild(review);
}

// Build a home section in a given parameter

export default function buildHome(location) {
    if (location.textContent) {
        clearContent(location);
    };
    // Name section
    const titleHolder = document.createElement("div");
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Loki's Lair";
    titleHolder.appendChild(restaurantName);
    location.appendChild(titleHolder);

    // Bio Section
    const bioHolder = document.createElement("div");
    const bioHeader = document.createElement("h2");
    bioHeader.textContent = "Loki's Lair: A Norse Culinary Voyage";
    bioHolder.appendChild(bioHeader);
    const bio = document.createElement("p");
    bio.textContent = "Nestled in the heart of Norsewood's historic Midgard District, Loki's Lair invites guests on an epicurean journey through the legends of the North. Inspired by the tales of gods, giants, and heroes, our establishment seeks to capture the audacious spirit of the Vikings in every dish. Founder and head chef, Bjorn Eriksson, traces his lineage directly to the seafaring Norsemen of old. With a passion for both history and gastronomy, Bjorn embarked on a quest to revive the flavors of ancient Scandinavia. At Loki's Lair, he combines time-honored cooking techniques with modern flair, crafting dishes that tell a story of both past and present. Our menu, divided into \"Start Feasts,\" \"Mead Mixes,\" and \"Sweet Finishes,\" is a testament to the rich tapestry of Norse culture. From Odin's Oracles to Ragnarok Roulade, every offering seeks to transport diners to the great halls of Valhalla, where heroes feast and mead flows freely. The ambiance, too, is meticulously curated. Enter through a grand wooden doorway, intricately carved with runes and mythical beasts. Dine beneath the glow of wrought iron chandeliers, their flames dancing in reflection on polished horn tableware. And, if you listen closely, the haunting strains of a distant lyre might just reach your ears, completing the enchantment. At Loki's Lair, we don't just serve meals; we serve memories. Whether you're a lover of history, a culinary enthusiast, or simply seeking a unique dining experience, join us for a taste of the extraordinary."
    bioHolder.appendChild(bio);
    location.appendChild(bioHolder);

    // Review section
    const reviewHolder = document.createElement("div");
    const review1 = buildReview(
        "Olaf K.",
        5,
        "As a fan of Norse mythology, I couldn't resist visiting Loki's Lair. The Heimdall's Hearth Breads were a comforting start, and I was thoroughly impressed by the Niflheim Frost Bites – refreshing and innovative. But what really stole the show was Loki's Trick cocktail. Smoky, fruity, with a hint of mint – it's a drink fit for the gods! Highly recommend.",
        reviewHolder
    );
    const review2 = buildReview(
        "Astrid F.",
        4,
        "I love trying unique dessert dishes, and the Ragnarok Roulade at Loki's Lair didn't disappoint! The combination of chocolate, cherry, and cream was heavenly. Also tried the Yggdrasil Trifle, which was good but a tad too sweet for my taste. The service was impeccable, and the Norse-inspired decor added to the overall experience. Will be back to try their cocktails next time.",
        reviewHolder
    );
    const review3 = buildReview(
        "Ingrid H.",
        5,
        "The ambiance at Loki's Lair perfectly complements its Norse theme. I'm a big fan of gin cocktails, and Freya's Elixir was beautifully balanced – sweet, tangy, with a touch of effervescence. Ended the night with Sif's Golden Tresses; the saffron buns were an absolute delight. Deducting one star because the place was a bit crowded, but the food and drink are top-notch!",
        reviewHolder
    );
    location.appendChild(reviewHolder);

}
