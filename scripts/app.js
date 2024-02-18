
const allSeat = document.getElementsByClassName('btn-seat');
const maxSeat = [];
for (const seat of allSeat) {
    seat.addEventListener('click', function (event) {
        const element = event.target;
        ticketMaxPurchase(element);
        const elementId = element.innerText;



    })
}

function ticketMaxPurchase(element) {

    if (maxSeat.includes(element.innerText) === false) {

        if (maxSeat.length < 4) {
            maxSeat.push(element.innerText);
            element.classList.add('bg-[#1DD100]');
            element.classList.add('text-white');
            totalSeatCount();
            setSelectedSeat();
        }
        else {
            alert("You can't buy over 4 tickets");
        }
    }
    else {
        alert("This seat already sold")
    }
}

function setSelectedSeat() {
    const selectedSeat = getElementValueById('selected-seat');
    const updateSelectedSeat = selectedSeat + 1;
    setElementValueById('selected-seat', updateSelectedSeat)
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

