var ticketFee = 800;
let age = 31;
let student = true;

if (age < 10) {
    var ticketFee = 0;
    console.log(ticketFee);
}
else if (student === true) {
    var ticketFee = 800 * 50 / 100;
    console.log(ticketFee);
}
else if (age >= 60) {
    var ticketFee = ticketFee - 800 * 15 / 100;
    console.log(ticketFee);
}
else {
    console.log(ticketFee);
}