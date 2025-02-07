import "./style.css";

let turn = 0;
const counter = document.querySelector(".counter-box__number");

const nextBtn = document.querySelector(".counter-box__btn.is-next");
const prevBtn = document.querySelector(".counter-box__btn.is-prev");
const resetBtn = document.querySelector(".counter-box__btn.is-reset");

const customInput = document.querySelector(".counter-box__input");
const customBtn = document.querySelector(".counter-box__btn.is-custom");

const formatNumber = (element: number) => {
	if (counter) {
		counter.textContent = element.toString().padStart(2, "0");
	}
};

const setCustomNumber = () => {
	if (customInput && customInput instanceof HTMLInputElement) {
		let customInputValue = Number(customInput.value);
		if (
			customInputValue !== undefined &&
			customInputValue !== null &&
			customInputValue >= 0
		) {
			turn = customInputValue;
			formatNumber(turn);
		} else {
			alert(
				"Escribe un número válido por favor. Tiene que ser 0 o positivo."
			);
		}
	}
};

if (nextBtn && nextBtn instanceof HTMLButtonElement) {
	nextBtn?.addEventListener("click", () => {
		formatNumber(++turn);
	});
}

if (prevBtn && prevBtn instanceof HTMLButtonElement) {
	prevBtn?.addEventListener("click", () => {
		if (turn > 0) {
			formatNumber(--turn);
		}
	});
}

if (resetBtn && resetBtn instanceof HTMLButtonElement) {
	resetBtn.addEventListener("click", () => {
		formatNumber((turn = 0));
	});
}

if (customBtn && customBtn instanceof HTMLButtonElement) {
	customBtn.addEventListener("click", setCustomNumber);
}

// Para que se ejecute una primera vez, ya que el número del div
// ya no está puesto en la estructura HTML, si no que lo indico yo en el JS
formatNumber(turn);
