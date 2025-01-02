// Get the form and result element
const form  = document.querySelector('form');
const resultDiv = document.getElementById("result");


//******************* Click Event *******************

// When a user clicks on the form, log the event, target element, id and the value of the target element.
form.addEventListener("click", (e) => {
    console.log(`Event : ${e}`);                            // Event object
    console.log(`Target : ${e.target}`);                    // Element that occurred the event
    console.log(`Target ID : ${e.target.id}`);              // ID of the element that occurred the event
    console.log(`Target Value : ${e.target.value}`);        // Value of the element that occurred the event
    console.log("Form Clicked");
})


//******************* Input Event *******************

// Every time the user types in a text field (fires continuously as the user types), log the value.
form.addEventListener("input", (e) => {
    // Log the current value of the input field being typed in.
    console.log(`Input Value : ${e.target.value}`);
})


//******************* Change Event *******************

// When the value of an input field changes and the user moves away from the field, log the value.
form.addEventListener("change", (e) => {
    // Log the value of the element that triggered the "change" event
    console.log(`Change Value : ${e.target.value}`);
});


//******************* Focusin Event *******************

// When a user moves the cursor over an input field, log the value.
form.addEventListener("focusin", (e) => {
    // Log the current value of the form field that gains focus
    console.log(`Focusin Value : ${e.target.value}`);
})



//******************* Focusout Event *******************

// When a user moves the cursor away from an input field, log the value.
form.addEventListener("focusout", (e) => {
    // Log the current value of the form field that loses focus
    console.log(`Focusout Value : ${e.target.value}`);
})


//******************* Submit Event *******************

// When a user submits the form, log the event and display the form data.
form.addEventListener("submit", (e) => {
    // Prevents the default submission
    e.preventDefault();

    //* Get the form data
    // Method 1: Using event object
    // const firstName = document.getElementById("firstName").value;
    // const lastName = document.getElementById("lastName").value;
    // const age = document.getElementById("age").value;

    // Display the form data in the result div
    // resultDiv.innerHTML = `First Name : ${firstName} <br> Last Name : ${lastName} <br> Age : ${age}`;


    // Method 2: Using FormData() Object
    const data = new FormData(form);
    console.log(data);                                      // FormData object

    // Iterate over the form data entries
    const dataEntries = data.entries();

    // Access the data entries using for-of loop
    for(let [key, value] of dataEntries) {
        console.log(`${key} : ${value}`);

        // Display the form data in the result div
        resultDiv.innerHTML += `${key} : ${value} <br>`;
    }

});


//******************* Reset Event *******************

// When a user clicks the reset button, form data is reset.
form.addEventListener("reset", (e) => {
    console.log("Form Reset");
});