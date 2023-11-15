export default function decorate(block) {
    /* grab the caption text and use as alt */
    const imgElement = document.getElementsByTagName("img");
    imgElement.setAttribute("alt","Alt Text");
 }