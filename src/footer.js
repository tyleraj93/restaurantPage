export default function buildFooter() {
    const body = document.body;
    const footerHolder = document.createElement("div");
    footerHolder.id = "footer";
    const corp = document.createElement("p");
    corp.textContent = "Odin's Hospitality Group";
    footerHolder.appendChild(corp);
    const company = document.createElement("p");
    company.textContent = "Loki's Lair";
    footerHolder.appendChild(company);
    body.appendChild(footerHolder);
}