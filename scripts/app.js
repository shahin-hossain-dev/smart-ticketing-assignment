
const allSeat = document.getElementsByClassName('btn-seat');
const maxSeat = [];
for (const seat of allSeat) {
    seat.addEventListener('click', function (event) {
        const element = event.target;
        const elementId = element.innerText;

        if (maxSeat.includes(element.innerText) === false) {

            if (maxSeat.length < 4) {
                maxSeat.push(element.innerText);
                element.classList.add('bg-[#1DD100]');
                element.classList.add('text-white');
                totalSeatCount();
                setSelectedSeat();
                setTicketList(element);
                totalPriceCount();

            }
            else {
                alert("You can't buy over 4 tickets");
            }
        }
        else {
            alert("This seat already sold")
        }

    })
}

document.getElementById('btn-discount').addEventListener('click', function () {
    const couponCode = getInputValueById('coupon-field')
    if (couponCode === 'NEW15') {
        console.log('15% discount')
    }
    else if (couponCode === 'Couple20') {
        console.log('20% discount')
    }

})

function getInputValueById(elementId) {
    const element = document.getElementById(elementId);
    const value = element.value;
    return value;
}


function totalPriceCount() {
    const total = getElementValueById('total');
    const ticketPrice = getElementValueById('ticket-price');
    const updatedTotal = total + ticketPrice;
    setElementValueById('total', updatedTotal);
}

function setTicketList(element) {
    const selectedContainer = document.getElementById('selected-container');
    const perTicketPrice = getElementValueById('per-ticket-price');
    const tr = document.createElement('tr');
    tr.classList.add('text-[#03071299]', 'text-base')
    tr.innerHTML = `
        <td>${element.innerText}</td>
       <td>Economy</td>
       <td id="ticket-price" class="text-right">${perTicketPrice}</td>
    `
    selectedContainer.appendChild(tr);
}


function setSelectedSeat() {
    const selectedSeat = getElementValueById('selected-seat-count');
    const updateSelectedSeat = selectedSeat + 1;
    setElementValueById('selected-seat-count', updateSelectedSeat)
}

function totalSeatCount() {
    const totalSeat = getElementValueById('total-seat');
    const updateSeat = totalSeat - 1;
    setElementValueById('total-seat', updateSeat);
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText);
    return value;
}

