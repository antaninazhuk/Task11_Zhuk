// Task 1

// function printNumbers(from, to) {
//     let i = from;

//     let timerID = setInterval(function() {
//         console.log(i);
//         if (i === to) {
//             clearInterval(timerID)
//         }
//         i++;
//     }, 1000);
// }

// printNumbers(4, 15);

// function printNumbers(from, to) {
//     let i = from;

//     let timerId = setTimeout(function work() {
//         console.log(i);
//         if (i < to) {
//             setTimeout(work, 1000);
//         }
//         i++;
//     }, 1000)
// }


// printNumbers(4, 15);

// Task 2

// function showMessage(message) {
//     timerId = setInterval(() => console.log(message), 3000);
//     setTimeout(() => clearInterval(timerId), 30000);
// }

// showMessage('Hi')


// Task 3

// 1, 6, 4, 5, 3


// Task 4

// let jordan = {
//     name: "Michael",
//     age: 59,
//     showName: function() { console.log(this.name) },
//     showNameWanted: function(player) { this.showName.call(player) },
// }


// let messi = {
//     name: "Lionel",
//     age: 34,
// }


// jordan.showNameWanted(messi);