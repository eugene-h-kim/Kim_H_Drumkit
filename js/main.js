// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!

(() => {
    console.log('music player script file'); // #1

    const theKeys = document.querySelectorAll('.key');

    function findAndPlayAudio(event) {   // #3
        // debugger;    // #4
        // use the event's keyCode number (goes with the keyboard key pressed) and find the matching audio element

        // #5
        let audioEl = document.querySelector(`audio[data-key="${event.keyCode}"]`);

        // if there is no matching audio element, then stop the function here
        if (!audioEl) { return; }

        // find the div that matches and animate it
        let matchingDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);
        matchingDiv.classList.add('playing');

        // if there is a match, rewind it first and then ask it to play
        audioEl.currentTime = 0; // #7
        audioEl.play(); // #6
    }

    function removePlayingClass(event) {
        if (event.propertyName === 'transform') {
            this.classList.remove('playing');
        }
    }

    window.addEventListener('keyup', findAndPlayAudio); // #2

    theKeys.forEach(key => key.addEventListener('transitionend', removePlayingClass));
    
})();
