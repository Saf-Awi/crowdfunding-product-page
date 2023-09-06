// Bookmark button function
const bookmarkButton = document.getElementById("bookmark");

bookmarkButton.addEventListener("click", function () {
    bookmarkButton.classList.toggle("checked");
    const buttonText = bookmarkButton.querySelector(".button-text");
    const circle = bookmarkButton.querySelector(".circle");
    const checkmark = bookmarkButton.querySelector(".checkmark");

    if (bookmarkButton.classList.contains("checked")) {
        buttonText.textContent = "Bookmarked";
        buttonText.style.color = "hsl(176, 72%, 28%)";
        circle.style.fill = "hsl(176, 72%, 28%)";
        checkmark.style.fill = "white";
    } else {
        buttonText.textContent = "Bookmark";
        circle.style.fill = "var(--dark-gray)";
        checkmark.style.fill = "#FFF";
        buttonText.style.color = "var(--dark-gray)";
    }
});

// Back this project button functions
const backProjectBtn = document.getElementById('back-project-li');
const selectRewardButtons = document.querySelectorAll('.select-reward');
const selectionModel = document.getElementById('selection-model');
const closeModel = document.getElementById('closeModel');
const overlayDiv = document.querySelector('.overlay');


backProjectBtn.addEventListener("click", function () {
    selectionModel.classList.remove('hidden');
    overlayDiv.classList.remove('hidden');

});

selectRewardButtons.forEach(function(button){
   button.addEventListener('click', function () {
    selectionModel.classList.remove('hidden');
    overlayDiv.classList.remove('hidden');
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });


   })
}
);


closeModel.addEventListener("click", function () {
    selectionModel.classList.add('hidden');
    overlayDiv.classList.add('hidden');

    

});

// Radio input function
const radioInputs = document.querySelectorAll('.radio-input');
const selectedPledgeContainers = document.querySelectorAll('.selected-pledge');

let selectedRadioInput = null;

radioInputs.forEach((radioInput, index) => {
    radioInput.addEventListener('change', () => {
        selectedPledgeContainers.forEach(container => {
            container.classList.add('hidden');
        });

        const pledgeCards = document.querySelectorAll('.model-pledge');
        pledgeCards.forEach(card => {
            card.classList.remove('cyan-border');
        });

        if (selectedRadioInput) {
            selectedRadioInput.checked = false;
        }

        selectedRadioInput = radioInput;

        selectedPledgeContainers[index].classList.remove('hidden');

        const selectedPledgeCard = selectedPledgeContainers[index].closest('.model-pledge');
        if (selectedPledgeCard) {
            selectedPledgeCard.classList.add('cyan-border');
        }
    });
});

// dollar counting total

function updateCount(inputId) {
    const inputElement = document.getElementById(inputId);
    const countSpan = document.getElementById("count");
    const currentCount = parseFloat(countSpan.textContent.replace("$", "").replace(",", ""));

    var inputValue = parseFloat(inputElement.value);

    if (!isNaN(inputValue)) {
        var newTotal = currentCount + inputValue;
        countSpan.textContent = "$" + newTotal.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

        inputElement.value = "";
    }

    var progressBar = document.getElementById("progressBar");
    var progressWidth = (newTotal / 100000) * 100; 
    progressBar.style.width = progressWidth + "%";

    // Clear the input field
    inputElement.value = "";

}

// select continue button 
const total = document.getElementById('total');


const continueButton = document.querySelectorAll('.continue-btn');
const successMessage = document.querySelector('.success-model-card');

continueButton.forEach(function(button) {
    button.addEventListener('click', function () {
        successMessage.classList.remove('hidden');
        selectionModel.classList.add('hidden');


       
     // backers total  
        
      const currentTotal = parseInt(total.textContent.replace(',', ''), 10);
    if (!isNaN(currentTotal)) {
        total.textContent = (currentTotal + 1).toLocaleString();   
}    



    })
})





// got it button

const gotItButton = document.querySelector('.got-it');

gotItButton.addEventListener('click', function() {
    successMessage.classList.add('hidden');
    overlayDiv.classList.add('hidden');

})

// mobile version navbar

const openMenu = document.querySelector('.open-menu');
const navMenu = document.getElementById('nav-menu');

openMenu.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    overlayDiv.classList.toggle('show');
})




