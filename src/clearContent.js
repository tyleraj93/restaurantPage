export default function clearContent(location) {
    if (location.textContent) {
        location.textContent = "";
    }
}