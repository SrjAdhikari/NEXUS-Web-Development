//* ****************************************************
//* JavaScript Events
//* ****************************************************


//* What is JavaScript Events ?
// Events in JavaScript are actionss and occurences that happen in a web page or application.
// They enable interaction between the user and the web page, such as clicking a button, typing in a form, or scrolling the page.
// JavaScript listens for these events and performs specific actions through event handlers or event listeners.


//* Types of JavaScript Events
// 1. Mouse Events     : Triggered when a user interacts with a mouse.
// 2. Keyboard Events  : Triggered when a user interacts with the keyboard.
// 3. Form Events      : Triggered when a user interacts with form elements such as form submission.
// 4. Document Events  : Triggered when a user interacts with the entire document or window.


//* ****************************************************
//* Mouse Events
//* ****************************************************

//* 1. Click Event
// The click event is triggered when a user clicks on an HTML element such as a button, link, or image.


//* 2. Double Click Event
// The dblclick event is triggered when a user double-clicks on an HTML element.


//* 3. Mouseover Event
// The mouseover event is triggered when a user moves the mouse cursor over an HTML element.
// It is often used to display a hover effect or highlight the element.


//* 4. Mouseout Event
// The mouseout event is triggered when a user moves the mouse cursor away from an HTML element.
// It is often used to remove a hover effect or highlight when the mouse leaves the element.


//* 5. Mousemove Event
// The mousemove event is triggered when a user moves the mouse cursor within an HTML element.


//* ****************************************************
//* Keyboard Events
//* ****************************************************

//* 1. Keydown Event
// The keydown event is triggered when a user presses a key on the keyboard.


//* 2. Keyup Event
// The keyup event is triggered when a user releases a key on the keyboard.


//* ****************************************************
//* Form Events
//* ****************************************************

//* 1. Submit Event
// The submit event is triggered when a form is submitted.
// It is often used to validate form data before sending it to a server.


//* 2. Reset Event
// The reset event is triggered when a form is reset.
// It is often used to clear form fields.


//* 3. Change Event
// The change event is triggered when the value of an input field changes and the user moves away.


//* 4. Focus / Focusin Event
// The focus event is triggered  when an input field gains focus.


//* 5. Blur / Focusout Event
// The blur event is triggered when an input field loses focus.


//* 6. Input Event
// The input event is triggered every time the user types in a text field (fires continuously as the user types).


//* 7. FormData() Object
// The FormData() object is used to collect form data.
// It returns a FormData object that contains the form data as key/value pairs.


//* Syntax:
// const formData = new FormData(formElement);
// formElement : The form element that contains the form data.


//* FormData Object Properties
// 1. append(key, value) : Adds a new key/value pair to the FormData object.
// 2. delete(key) : Deletes a key/value pair from the FormData object.
// 3. entries() : Returns an iterator of all the key/value pairs in the FormData object.
// 4. get(key) : Returns the value associated with the specified key.
// 5. getAll(key) : Returns an array of all the values associated with the specified key.
// 6. has(key) : Returns true if the FormData object contains the specified key.
// 7. keys() : Returns an iterator of all the keys in the FormData object.
// 8. values() : Returns an iterator of all the values in the FormData object.
// 9. set(key, value) : Set a new value for an existing key or adds the key/value if it does not exist.


//* ****************************************************
//* Document or Window Events
//* ****************************************************

//* 1. Load Event
// The load event is triggered when the entire page has finished loading (including images, stylesheets, and scripts).


//* 2. Scroll Event
// The scroll event is triggered when a user scrolls the page up or down.


//* 3. Resize Event
// The resize event is triggered when the window is resized.


//* ****************************************************
//* Event Object
//* ****************************************************

// The event object in JavaScript is automatically passed to event listeners when an event is triggered.
// It contains information about the event, such as the type of event, the target element, and additional details like mouse coordinates, key pressed, etc.


//* Event Object Properties
// 1. type: The type of event that has occurred (e.g., "click", "keydown", "submit").
// 2. target: The element that triggered the event.
// 3. tagName : The name of the HTML element that triggered the event.
// 4. key : The key pressed during a keyboard event.
// 5. keyCode : The key code of the key pressed during a keyboard event.
// 6. currentTarget: The element where the event listener is attached.
// 7. preventDefault(): Prevents the default behavior of the event (e.g., form submission).
// 8. stopPropagation(): Prevents the event from bubbling up the DOM tree.
// 9. clientX : The x-coordinate of the mouse event relative to the viewport.
// 10. clientY : The y-coordinate of the mouse event relative to the viewport.
// 11. offsetX : The x-coordinate of the mouse event relative to the target element.
// 12. offsetY : The y-coordinate of the mouse event relative to the target element.
// 13. bubbles : A boolean indicates whether the event bubbles up the DOM hierarchy.
// 14. preventDefault(): Prevents the default behavior of the event (e.g., form submission, page reload).
// 15. stopPropagation(): Prevents further propagation of the event in the bubbling or capturing phase.