import buildHeaderBefore from "./header";
import buildHome from "./home";
import buildFooter from "./footer";

const content = document.getElementById("content");

//Build page
buildHeaderBefore(content);
buildHome(content);
buildFooter();