
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
        }
        else {
            alert("You can't buy over 4 tickets");
        }
    }
    else {
        alert("This seat already sold")
    }
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText);
    return value;
}