let clickCount = 0;
let totalSeat = 40;
let ticketPrice = 550;
let new15 = 0.15;
let couple20 = 0.2;

const clickCountSpan = document.getElementById('clickCountSpan');
const seatLeft = document.getElementById('seatLeft');
const ticketbox = document.getElementById('tickets-box');
const ticketTotalPriceDiv = document.getElementById('total-pirce');
const grandTotalPrice = document.getElementById('grand-total');
const discountBox = document.getElementById('discount-box');
const discountCoupon = document.getElementById('discount-coupon');
const discountPriceBox = document.getElementById('discount-price-box');
const passengerDetails = document.getElementById('passenger-details-btn');
const passengerPhoneNumber = document.getElementById('passenger-phone-number');
const headerSection = document.getElementById('header-section');
const offerSection = document.getElementById('offer-section');
const ticketSection = document.getElementById('ticket-section');
const seatSection = document.getElementById('seat-section');
const finalSection = document.getElementById('final-output');

let tickets = [];
// Set seat background color

function selectSeat() {
	const allSeats = document.querySelectorAll('.seat');

	allSeats.forEach(function (node) {
		node.onclick = function name() {
			if (tickets.length < 4) {
				const isTicketAlreadyTaken = tickets.includes(node.innerText);

				if (isTicketAlreadyTaken) {
					tickets = tickets.filter(function (item) {
						return item != node.innerText;
					});
					node.style.backgroundColor = '#F7F8F8';
					node.style.color = 'black';

					clickCountSpan.innerText = tickets.length;
					seatLeft.innerText = totalSeat - tickets.length;
					setTicketPrice();
					return;
				}

				tickets.push(node.innerText);

				node.style.backgroundColor = '#1dd100';
				node.style.color = 'white';
				setTicketPrice();
			} else {
				const isTicketAlreadyTaken = tickets.includes(node.innerText);

				if (isTicketAlreadyTaken) {
					tickets = tickets.filter(function (item) {
						return item != node.innerText;
					});
					node.style.backgroundColor = '#F7F8F8';
					node.style.color = 'black';

					clickCountSpan.innerText = tickets.length;
					seatLeft.innerText = totalSeat - tickets.length;
					setTicketPrice();
					return;
				} else {
					alert('You cannot select more then four');
				}
			}

			clickCountSpan.innerText = tickets.length;

			seatLeft.innerText = totalSeat - tickets.length;
		};
	});
}
selectSeat();

function setTicketPrice() {
	ticketbox.innerHTML = '';
	for (item of tickets) {
		const ticketDetails = document.createElement('div');
		ticketDetails.classList.add(
			'flex',
			'justify-between',
			'p-8',
			'border-b-2',
			'border-gray-200'
		);
		ticketDetails.innerHTML = `
        <p>${item}</p>
        <p>Economoy</p>
        <p>550</p>
        `;
		ticketbox.appendChild(ticketDetails);
	}
	ticketTotalPriceDiv.innerText = tickets.length * ticketPrice;
	grandTotalPrice.innerText = tickets.length * ticketPrice;
	if (tickets.length === 4) {
		discountBox.classList.add('flex');
		discountBox.classList.remove('hidden');
	} else {
		discountBox.classList.remove('flex');
		discountBox.classList.add('hidden');
	}
	passengerDetailsInfo();
}

function calculateDiscount() {
	let discountPrice = 0;
	if (discountCoupon.value === 'NEW15') {
		discountPrice = tickets.length * ticketPrice * new15;
		discountBox.classList.add('hidden');
	} else if (discountCoupon.value === 'COUPLE20') {
		discountPrice = tickets.length * ticketPrice * couple20;
		discountBox.classList.add('hidden');
	} else alert('Wrong Coupon');
	discountPriceBox.innerText = discountPrice;
	grandTotalPrice.innerText = tickets.length * ticketPrice - discountPrice;
}

function passengerDetailsInfo() {
	if (tickets.length > 0 && passengerPhoneNumber.value) {
		passengerDetails.classList.remove('hidden');
	} else {
		passengerDetails.classList.add('hidden');
	}
}

function phoneNumber() {
	passengerDetailsInfo();
}

function ticketConfirmed() {
	headerSection.classList.add('hidden');
	offerSection.classList.add('hidden');
	ticketSection.classList.add('hidden');
	seatSection.classList.add('hidden');
	finalSection.classList.remove('hidden');
}

function continueToTicket() {
	headerSection.classList.remove('hidden');
	offerSection.classList.remove('hidden');
	ticketSection.classList.remove('hidden');
	seatSection.classList.remove('hidden');
	finalSection.classList.add('hidden');
}
