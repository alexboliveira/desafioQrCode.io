//importando card cardQrCode
import CardQrCode from "../modules/cardQrCode/cardQrCode.js";
const cardQrCode= new CardQrCode();




/*Css do #app*/

/*zerando as margens */
document.querySelector("body").style.margin = "0";
document.querySelector("body").style.padding = "0";


/*Alinhamentos padrões*/
document.querySelector("body").style.width = "100%";
document.querySelector("body").style.minHeight = "100vh";
document.querySelector("body").style.display = "flex";
document.querySelector("body").style.backgroundColor = "#D9D9D9";
document.querySelector("body").style.justifyContent = "center";
document.querySelector("body").style.alignItems = "center";
document.querySelector("body").style.flexWrap = "wrap";
document.querySelector("body").style.gap = "10px";
document.querySelector("body").style.fontFamily = "arial";