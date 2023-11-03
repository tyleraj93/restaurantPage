import clearContent from "./clearContent";
import oraclesImg from "./images/odinsOracles.png"
import breadsImg from "./images/bread.png";
import lokisImg from "./images/lokisTrick.png";
import muleImg from "./images/mjolnirMule.png";
import triffleImg from "./images/triffle.png";
import rouladeImg from "./images/roulade.png";

const buildItem = (name, description, placement) => {
    const item = document.createElement("div");
    item.className = "item";
    const itemName = document.createElement("h3");
    itemName.textContent = name;
    item.appendChild(itemName);
    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;
    item.appendChild(itemDescription);
    placement.appendChild(item);
};
    
const buildImage = (imageSource, location) => {
    const imageHolder = document.createElement("div");
    const itemImage = document.createElement("img");
    itemImage.src = imageSource
    itemImage.classList = "itemImage";
    imageHolder.appendChild(itemImage);
    location.appendChild(imageHolder);
}

export default function buildMenu(location) {
    if (location.textContent) {
        clearContent(location);
    }

    // Title Section
    const titleHolder = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "Menu";
    titleHolder.appendChild(title);
    location.appendChild(titleHolder);

    // Appetizer Section
    const appetizerHolder = document.createElement("div");
    const appetizer = document.createElement("h2");
    appetizer.textContent = "Beginnings";
    appetizerHolder.appendChild(appetizer);
    const oraclesImage = buildImage(oraclesImg, appetizerHolder);
    const oracles = buildItem(
        "Odin's Oracles",
        "A platter of mini salmon and dill tarts, served with a side of rye crisps.",
        appetizerHolder
    );
    const thunderbolts = buildItem(
        "Thor's Thunderbolts",
        "Spicy meatballs accompanied with a tangy lingonberry dip.",
        appetizerHolder
    );
    const delight = buildItem(
        "Frigg's Forest Delight",
        "Wild mushroom and leek soup, drizzled with truffle oil.",
        appetizerHolder
    );
    const breadsImage = buildImage(breadsImg, appetizerHolder);
    const breads = buildItem(
        "Heimdall's Hearth Breads",
        "Selection of fresh baked Nordic bread, served with whipped butter infused with herbs and sea salt.",
        appetizerHolder
    );
    const spears = buildItem(
        "Valkyrie's Veggie Spears",
        "Crisp seasonal vegetables with a creamy blue cheese and skyr dip.",
        appetizerHolder
    );
    location.appendChild(appetizerHolder);

    // Drink Section
    const drinkHolder = document.createElement("div");
    const drink = document.createElement("h2");
    drink.textContent = "Elixirs";
    drinkHolder.appendChild(drink);
    const muleImage = buildImage(muleImg, drinkHolder);
    const mule = buildItem(
        "Mjölnir Mule",
        "A Norse twist on the classic, with aquavit, ginger beer, and fresh lime, garnished with a sprig of rosemary.",
        drinkHolder
    );
    const elixir = buildItem(
        "Freya's Elixir",
        "A floral gin cocktail with elderflower liqueur, topped with prosecco and a hint of lemon.",
        drinkHolder
    );
    const apple = buildItem(
        "Asgardian Apple",
        "A mix of apple brandy, cinnamon, and sparkling cider, served on ice with a slice of dehydrated apple.",
        drinkHolder
    );
    const bliss = buildItem(
        "Bifrost Bliss",
        "A vibrant cocktail representing the rainbow bridge, layered with blue curaçao, grenadine, and orange juice.",
        drinkHolder
    );
    const trickImage = buildImage(lokisImg, drinkHolder);
    const trick = buildItem(
        "Loki's Trick",
        "A mysterious, smoky cocktail with mezcal, blackberries, and a hint of mint.",
        drinkHolder
    );
    location.appendChild(drinkHolder);

    // Dessert Section
    const dessertHolder = document.createElement("div");
    const dessert = document.createElement("h2");
    dessert.textContent = "Sweet Finishes";
    dessertHolder.appendChild(dessert);
    const triffleImage = buildImage(triffleImg, dessertHolder);
    const triffle = buildItem(
        "Yggdrasil Trifle",
        "Layers of sponge cake, berry compote, and rich cream, representing the layers of the World Tree.",
        dessertHolder
    );
    const tresses = buildItem(
        "Sif's Golden Tresses",
        "Delicate saffron buns, served warm with a side of clotted cream.",
        dessertHolder
    );
    const blessing = buildItem(
        "Baldur's Blessing",
        "A light honey and almond cake, garnished with edible flowers.",
        dessertHolder
    );
    const bites = buildItem(
        "Niflheim Frost Bites",
        "Icy lemon and berry sorbet orbs, served in a chilled bowl.",
        dessertHolder
    );
    const rouladeImage = buildImage(rouladeImg, dessertHolder);
    const roulade = buildItem(
        "Ragnarok Roulade",
        "A decadent chocolate roulade filled with cherry and whipped cream, symbolizing the end of the world's indulgence.",
        dessertHolder
    );
    location.appendChild(dessertHolder);
}
