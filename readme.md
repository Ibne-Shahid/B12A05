# Answer of the questions written below:-

## Answer of question 1:-
The property **getElementById** selects a single element by its id. It returns the element object or null if not found. And **getElementsByClassName** selects all elements with a same class. Means can select multiple items and return a live HTML collection. And the property **querySelector** and **querySelectorAll** can select elements using any CSS selector. The **querySelector** selects the first matching element and **querySelectorAll** selects Nodelist of all matching elemnets.
## Answer of question 2:-
I will use **document.createElement()** to create an element and then I will use **appendChild()** to insert the new created element in DOM.
## Answer of question 3:-
**Event Bubbling** is a procces in DOM where an event first occurs on the child and then propagates upword through it's parents. The button's listener executes first and then the container's listener executes. Means the event happens on the target element and then the event moves upwords to the parent element.
## Answer of question 4:-
**Event Delegation** is a technique in **JavaScript** where we attach a single event listener to a parent element instead of adding multiple separate listeners to the child elements. It is useful because by using this we can add just one listener on the parent instead of adding many separate listeners on the child elements. It also works for dynamic elements, we don't need to add a listener every time when a new element is created.
## Answer of question 5:-
The **preventDefault()** method stops the default action of an element from happening. It doesn't stop the event from bubbling up. On the other hand, the **stopPropagation()** method stops the event from bubbling up to parent elements. It does not stop the default action of an element.
