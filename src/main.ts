import "./style.css";

const counter = document.querySelector(".counter-box__number");
let counterNumber = Number(
	document.querySelector(".counter-box__number")?.textContent
);
const nextBtn = document.querySelector(".counter-box__btn.is-next");
const prevBtn = document.querySelector(".counter-box__btn.is-prev");
const resetBtn = document.querySelector(".counter-box__btn.is-reset");
const customBtn = document.querySelector(".counter-box__btn.is-custom");

const formatNumber = (element: number) => {
	if (counter) {
		counter.textContent = element.toString().padStart(2, "0");
		counterNumber = Number(counter.textContent);
	}
};

const setCustomNumber = () => {
	let customNumber = Number(prompt("Select custom number"));

	if (customNumber !== undefined && customNumber !== null) {
		while (
			typeof customNumber === "number" &&
			(Number.isNaN(customNumber) || customNumber <= 0)
		) {
			alert("It needs to be a positive number");
			customNumber = Number(prompt("Select custom number"));
		}

		formatNumber(customNumber);
	}
};

nextBtn?.addEventListener("click", () => {
	formatNumber(++counterNumber);
});
prevBtn?.addEventListener("click", () => {
	if (counterNumber > 0) {
		formatNumber(--counterNumber);
	}
});
resetBtn?.addEventListener("click", () => {
	formatNumber((counterNumber = 0));
});
customBtn?.addEventListener("click", setCustomNumber);
