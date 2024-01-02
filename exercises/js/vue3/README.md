# Vue.js exercises, Part III. (store, routing, CLI)

## Exercise #0: Component events

The file [exercise0.html](exercise0.html) contains the playlist with components.
Implement the removal of playlist items by emitting and handling an event from the`playlistItem` component.

## Exercise #1: A global store

The file [exercise1.html](exercise1.html) contains the solution for the previous example. 
Additional it cointains a global store 
```js
    class Playlist {
        constructor() {
            this.list = [...];
        }
        add(song) {
            ...
        };
        remove(song) {
            ...
        };
    }
    
    let store = Vue.reactive(new Playlist());
```

Change the implementation of the `remove` and `addSong` methods in the `playListItemC` and `playlistFormC` components, to directly update the global store. Remove events and event handling where possible.

## Exercise 2: Vue router

Create a simple routing app with two pages. You can use [exercise2.html](exercise2.html) as starting file.
The main route `\` displays a header, an input field and a link.
The link should lead to route `\fruit\:name` where name is the current value of the input field.

![Exercise2 main page](images/exercise2_main.png)

On route `\fruit\:name` a different page is displayed, that
shows `name` in the header. 
This page contains a link to the main page.
Example below shows the page for `\fruit\apple`.

![Exercise2 apple page](images/exercise2_apple.png)

## Exercise 3: Grades router

Introduce a router to the gradebook application from exercise 1. 
You can use the [solution](../../../solutions/js/vue3/exercise1) as a starting point.

Challenge: You can also try to addapt the solution, such that if a student_no is used for which no student exists, an error is shown.