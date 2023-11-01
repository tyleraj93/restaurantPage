import buildHeaderBefore from "./header";
import buildHome from "./home";

const content = document.getElementById("content");

//Build header
buildHeaderBefore(content);
buildHome(content);