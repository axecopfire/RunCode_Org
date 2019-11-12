import Data from '../data';
import Stallions from "./Stallions";

window.onload = () => {
  document.getElementById("Stallions").appendChild(Stallions(Data.team));
}