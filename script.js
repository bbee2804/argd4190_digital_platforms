document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip)
}

document.addEventListener("DOMContentLoaded", function () {
  let dog = document.getElementById("dog");
  let dahlia = document.getElementById("dahlia");
  let circle = document.getElementById("circle");
  let pink = document.getElementById("pink");
  let overlayText = document.getElementById("overlay-text");

  let rotate = document.getElementById("rotate");
  let skewX = document.getElementById("skewX");
  let skewY = document.getElementById("skewY");
  let scale = document.getElementById("scale");

  let textInput = document.getElementById("textInput");
  let textColor = document.getElementById("textColor");
  let textX = document.getElementById("textX");
  let textY = document.getElementById("textY");

  let dahliaX = document.getElementById("dahliaX");
  let dahliaY = document.getElementById("dahliaY");

  let circleX = document.getElementById("circleX");
  let circleY = document.getElementById("circleY");

  let pinkX = document.getElementById("pinkX");
  let pinkY = document.getElementById("pinkY");

  function updateDog() {
    let r = rotate.value;
    let x = skewX.value;
    let y = skewY.value;
    let s = scale.value;

    dog.style.transform = "rotate(" + r + "deg) skewX(" + x + "deg) skewY(" + y + "deg) scale(" + s + ")";
  }

  function updateText() {
    overlayText.textContent = textInput.value;
    overlayText.style.color = textColor.value;
    overlayText.style.left = textX.value + "px";
    overlayText.style.top = textY.value + "px";
  }

  function updateDahlia() {
    dahlia.style.left = dahliaX.value + "px";
    dahlia.style.top = dahliaY.value + "px";
  }

  function updateCircle() {
    circle.style.left = circleX.value + "px";
    circle.style.top = circleY.value + "px";
  }

  function updatePink() {
    pink.style.left = pinkX.value + "px";
    pink.style.top = pinkY.value + "px";
  }

  rotate.addEventListener("input", updateDog);
  skewX.addEventListener("input", updateDog);
  skewY.addEventListener("input", updateDog);
  scale.addEventListener("input", updateDog);

  textInput.addEventListener("input", updateText);
  textColor.addEventListener("input", updateText);
  textX.addEventListener("input", updateText);
  textY.addEventListener("input", updateText);

  dahliaX.addEventListener("input", updateDahlia);
  dahliaY.addEventListener("input", updateDahlia);

  circleX.addEventListener("input", updateCircle);
  circleY.addEventListener("input", updateCircle);

  pinkX.addEventListener("input", updatePink);
  pinkY.addEventListener("input", updatePink);

  updateDog();
  updateText();
  updateDahlia();
  updateCircle();
  updatePink();
});

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  address: {
    street: "123 main street",
    city: "new york",
    zip: 10001
  },
  hobbies: ["dancing", "cooking", "singing"]
};

console.log(person.hobbies[2]);

-

<script>
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip)
  // gsap code here!
 });


 gsap.registerPlugin(ScrollTrigger, Draggable);

let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

// set initial state of items
gsap.set('.cards li', {xPercent: 400, opacity: 0, scale: 0});

const spacing = 0.1, // spacing of the cards (stagger)
	snapTime = gsap.utils.snap(spacing), // we'll use this to snapTime the playhead on the seamlessLoop
	cards = gsap.utils.toArray('.cards li'),
	// this function will get called for each element in the buildSeamlessLoop() function, and we just need to return an animation that'll get inserted into a master timeline, spaced
	animateFunc = element => {
		const tl = gsap.timeline();
		tl.fromTo(element, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false})
		  .fromTo(element, {xPercent: 400}, {xPercent: -400, duration: 1, ease: "none", immediateRender: false}, 0);
		return tl;
	},
	seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
	playhead = {offset: 0}, // a proxy object we use to simulate the playhead position, but it can go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline.
	wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()), // feed in any offset (time) and it'll return the corresponding wrapped time (a safe value between 0 and the seamlessLoop's duration)
	scrub = gsap.to(playhead, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
		offset: 0,
		onUpdate() {
			seamlessLoop.time(wrapTime(playhead.offset)); // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
		},
		duration: 0.5,
		ease: "power3",
		paused: true
	}),
	trigger = ScrollTrigger.create({
		start: 0,
		onUpdate(self) {
			let scroll = self.scroll();
			if (scroll > self.end - 1) {
				wrap(1, 2);
			} else if (scroll < 1 && self.direction < 0) {
				wrap(-1, self.end - 2);
			} else {
				scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
				scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
			}
		},
		end: "+=3000",
		pin: ".gallery"
	}),
	// converts a progress value (0-1, but could go outside those bounds when wrapping) into a "safe" scroll value that's at least 1 away from the start or end because we reserve those for sensing when the user scrolls ALL the way up or down, to wrap.
	progressToScroll = progress => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end),
	wrap = (iterationDelta, scrollTo) => {
		iteration += iterationDelta;
		trigger.scroll(scrollTo);
		trigger.update(); // by default, when we trigger.scroll(), it waits 1 tick to update().
	};

// when the user stops scrolling, snap to the closest item.
ScrollTrigger.addEventListener("scrollEnd", () => scrollToOffset(scrub.vars.offset));

// feed in an offset (like a time on the seamlessLoop timeline, but it can exceed 0 and duration() in either direction; it'll wrap) and it'll set the scroll position accordingly. That'll call the onUpdate() on the trigger if there's a change.
function scrollToOffset(offset) { // moves the scroll playhead to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
	let snappedTime = snapTime(offset),
		progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration(),
		scroll = progressToScroll(progress);
	if (progress >= 1 || progress < 0) {
		return wrap(Math.floor(progress), scroll);
	}
	trigger.scroll(scroll);
}

document.querySelector(".next").addEventListener("click", () => scrollToOffset(scrub.vars.offset + spacing));
document.querySelector(".prev").addEventListener("click", () => scrollToOffset(scrub.vars.offset - spacing));


// below is the dragging functionality (mobile-friendly too)...
Draggable.create(".drag-proxy", {
  type: "x",
  trigger: ".cards",
  onPress() {
    this.startOffset = scrub.vars.offset;
  },
  onDrag() {
    scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
    scrub.invalidate().restart(); // same thing as we do in the ScrollTrigger's onUpdate
  },
  onDragEnd() {
    scrollToOffset(scrub.vars.offset);
  }
});







console.clear(); // Start with a clean console on refesh

const slider = document.querySelector(".slider");
const items = gsap.utils.toArray(".item");
const offset = 30;


function moveCard() {
  const lastItem = slider.querySelector(".item:last-child");

  if (slider && lastItem) {
    lastItem.style.display = "none"; // Hide the last item
    const newItem = document.createElement("img");
    newItem.className = lastItem.className; // Set the same class name
    newItem.src = lastItem.src; // Set the same class name
    slider.insertBefore(newItem, slider.firstChild); // Insert the new item at the beginning of the slider
  }
}

document.body.addEventListener("click", (e) => {
  let state = Flip.getState(".item");

  moveCard();

  Flip.from(state, {
    targets: ".item",
    ease: "sine.inOut",
    absolute: true,
    onEnter: (elements) => {
      return gsap.from(elements, {
        duration: 0.3,
        yPercent: 20,
        opacity: 0,
        ease: "expo.out"
      });
    },
    onLeave: (element) => {
      return gsap.to(element, {
        duration: 0.3,
        yPercent: 5,
        xPercent: -5,
        transformOrigin: "bottom left",
        opacity: 0,
        ease: "expo.out",
        onComplete () {
          console.log("logging", element[0])
          slider.removeChild(element[0]);
        }
      });
    }
  });
});


