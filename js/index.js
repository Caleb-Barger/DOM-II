// Your code goes here

// function clickEventHandler(event) {
//     event.preventDefault();
//     console.log(event.type + "!!!!!!!!!!!!");
//     console.log(event.target);
//     console.log(event.currentTarget);

//     // document.body.innerHTML = "<div>gone</div>";
// }

// console.log("Caleb is Here!");

// // const nav = document.querySelectorAll(".nav-link");
// // const homeLink = nav[0];

// // console.log(homeLink);

// // or....

// homeLink.addEventListener(
//     'click',
//     clickEventHandler,
//     true,
// ); // with id attached... wow i feel cheated

// document.querySelector('nav').addEventListener(
//     'click',
//     clickEventHandler
// );

// document.querySelector(".main-navigation").addEventListener(
//     'click',
//     clickEventHandler
// )

// document.addEventListener(
//     'click',
//     clickEventHandler
// );

function mouseoverEventHandler(event) {
    // console.log(event.target);
    console.log("HOVERRRIng!!");
    event.target.style.color = "red";
}

function keydownEventHandler(event) {
    console.log("a key was pressed");
    homeLink.style.color = "black";
}

function wheelEventHandler(event) {
    console.log("Somebody is scrollin on this page!");
}

function dragNDropEventListner(event) {
    document.querySelectorAll("p").style.fontSize = "5rem";
}

function loadEventHandler(event) {
    const logoHeader = document.querySelector(".logo-heading");
    logoHeader.textContent = "Caleb!!";
}

function focusEventHandler(event) {
    console.log("FOCUSSING SO HARD");
}

function resizeEventHandler(evnet) {
    console.log("Waass I to thicc? :(");
}

function scrollEventHandler(event) {
    console.log(event.currentTarget, "BOOOOM!!");
}

function selectEventHandler(event) {
    event.target.style.color = "red";
}

function dbClickEventListner() {
    console.log("CLICK CLICK!");
}

homeLink.addEventListener(
    'mouseover', 
    mouseoverEventHandler
)

document.addEventListener(
    'keydown',
    keydownEventHandler
)

document.addEventListener(
    'wheel',
    wheelEventHandler
)

document.addEventListener(
    'drag / drop',
    dragNDropEventListner
)

document.addEventListener(
    'load',
    loadEventHandler
)

document.addEventListener(
    'focus',
    focusEventHandler
)

document.addEventListener(
    'resize',
    resizeEventHandler
)

document.addEventListener(
    'scroll',
    scrollEventHandler
)

funInSun.addEventListener(
    'select',
    selectEventHandler
)

document.addEventListener(
    'dblclick',
    dbClickEventListner
)












