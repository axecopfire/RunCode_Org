import Data from '../data';
import Stallions from "./Stallions";

window.onload = () => {
  document.getElementById("Stallions").innerHTML = Stallions(Data.team);
}