import "../css/main.css";
import "../css/extrastyles.css";

import {secretButton, secretPara} from './dom-loader';
var showText =  false;

secretButton.addEventListener('click', buttonIsClicked);
togglePara();
function buttonIsClicked() {
	showText = !showText;
	buttonText();
	togglePara();
}

function buttonText() {
	if (showText) {
		secretButton.textContent = "Hide Data";
	} else {
		secretButton.textContent = "show Data";
	}
}

function togglePara() {
	if (showText) {
		secretPara.style.display = "Block";
	} else {
		secretPara.style.display = "none";
	}
}