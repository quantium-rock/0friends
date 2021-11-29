import jsonFile from "./collections/cherry.json";

const path = "images/collections/cherry/";
const length = 22;

function randomI() {
    return Math.floor(Math.random()*length);
}
export var Id = String(randomI());

var png = () => { return path.concat(Id , ".png"); }

export var Image = png();
export var Name = jsonFile[Id].name;
export var Habitat = jsonFile[Id].attributes[1].value;
export var Skin = jsonFile[Id].attributes[2].value;
export var Outfit = jsonFile[Id].attributes[3].value;