# jquery-back-to-top-button
=========

### setup

```js
$(document).ready( function() {
    $('.topBtn').backToTop();
});
```

** example with options**

```js
$(document).ready( function() {
    $('.topBtn').backToTop({
        'offset' : 200,
        'speed' : 500,
        'positionBottom': 80,
        'positionRight': 40,
        'scrollTopDuration' : 1000
    });
});
```

### offset

browser window position (in pixels) after which the "top" button is shown
default offset is 300px


### speed

To specify the animation speed of the Scroll Top Icon to appear when the page reaches the scroll position.


### positionBottom

button bottom position
default bottom position is 20px


### positionRight

button right position
default right position is 20px


### scrollTopDuration

default scrollTopDuration is 700


[© internet-fabrig 2015](http://www.internet-fabrig.de)