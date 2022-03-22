const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const times = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date();

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;
	// 1s = 1000ms
	// 1m = 60s
	// 1hr = 60min
	// 1d = 24hr

	// valies in ms
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;
	// calcucalte all values
	let days = t / oneDay;
	days = Math.floor(days);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minites = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / 1000);

	// set values array;
	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}

	items.forEach(function (item, index) {
		item.innerHTML = format(values[index]);
	});
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
