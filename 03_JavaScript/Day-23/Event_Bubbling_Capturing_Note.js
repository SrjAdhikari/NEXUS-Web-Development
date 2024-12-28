//* ****************************************************
//* Event Bubbling and Capturing In JavaScript
//* ****************************************************


//* Event Propagation
// Event propagation is the process of how events flow through the DOM (Document Object Model) when an event is triggered.


//* Phases (Order) of Event Propagation
// There are three phases of event propagation in JavaScript:
// 1. Capturing Phase : The event starts from the root (document) and travels down to the target element.
// 2. Target Phase : The element where the event listener is attached.
// 3. Bubbling Phase : After reaching the target element, the events moves up to the root element (window).


//* ****************************************************


//* What is Event Bubbling ?
// Event bubbling refers to the propagation (flow) of events from child elements to parent elements in the DOM hierarchy.
// When an event occurs on a child element, it is first handled by the child element and then propagated up the DOM hierarchy to the parent element.
// The event is then handled by the parent element, and the event can then be handled by any ancestor elements in the DOM hierarchy.

// To activate event bubbling, set the third parameter of the addEventListener() method to false. By default, most events in JavaScript use bubbling.
// Example: addEventListener("event", function, false);


//* ****************************************************


//* What is Event Capturing ?
// Event capturing refers to the propagation (flow) of events from parent elements to child elements in the DOM hierarchy.
// When an event occurs on a parent element, it is first handled by the parent element and then propagated down the DOM hierarchy to the child element.
// The event is then handled by the child element, and the event can then be handled by any descendant elements in the DOM hierarchy.

// To activate event capturing, set the third parameter of the addEventListener() method to true.
// Example: addEventListener("event", function, true);


//* ****************************************************


//* What is Event Delegation ?
// Event delegation is a technique where you attach a single event listener to a parent element instead of adding multiple event listeners to child elements. 
// In event delegation, a single event listener is attached to a parent element to handle events for its child elements.


//* Why Use Event Delegation ?
// 1. Efficient for dynamically created elements.
// 2. It allows us to handle events for multiple child elements at once.
// 3. Reduces memory usage by minimizing the number of event listeners.


//* ****************************************************


//* What is Stop Propagation ?
// Stop propagation is a method used to prevent the event from bubbling up or capturing in the DOM hierarchy.
// It prevents the event from being handled by any ancestor elements in the DOM hierarchy.
// Example: event.stopPropagation();