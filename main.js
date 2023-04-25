(function () {
    [...document.querySelectorAll(".control")].forEach((button) => {
        button.addEventListener("click", function () {
            document
                .querySelector(".active-btn")
                .classList.remove("active-btn");
            this.classList.add("active-btn");
            document
                .querySelector(".section_active")
                .classList.remove("section_active");
            document
                .getElementById(button.dataset.id)
                .classList.add("section_active");
        });
    });
    // document.querySelector(".theme-btn").addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
    // });
})();

// To hide tooltip ================
// Get the tooltip element
const tooltip = document.querySelectorAll(".tooltip");

// Define the number of milliseconds to wait before hiding the tooltip
const delay = 1100; // Change this to adjust the delay time (in milliseconds)

tooltip.forEach((t) => {
    // Define a letiable to hold the timer ID
    let timerId;

    // Get the tooltip text element
    const tooltipText = t.querySelector(".tooltiptext");

    // Add a mouseover event listener to the tooltip
    t.addEventListener("mouseover", () => {
        // Clear any previously set timer
        clearTimeout(timerId);
    });

    // Add a mouseout event listener to the tooltip
    t.addEventListener("mouseover", () => {
        // Set a timer to hide the tooltip after the specified delay
        timerId = setTimeout(() => {
            tooltipText.style.display = "none";
        }, delay);
        tooltipText.style.display = "inline-block";
    });
});

// Portfolio Filter+++++++++++++++++++

function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("portfolio_card");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeShowClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addShowClass(x[i], "show");
    }
}
filterSelection("all"); // Execute the function and show all columns

function addShowClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function removeShowClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Modal JS +++++++++++++++++
// Get the modal
var modal = document.getElementById("portfolio_modal");

// Get the button that opens the modal
var btn = document.getElementById("portfolio_modal_btn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
