'use strict';

/* typewriter Text header */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  const phrases = ["Let's Discover The World Together.", "Seamless Travel Experiences at Your Fingertips.", "Where Every Trip Tells a Story."];
  const el = document.getElementById("typewriter");
  
  let sleepTime = 200;
  
  let curPhraseIndex = 0;
  
  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];
  
      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }
  
      await sleep(sleepTime * 10);
  
      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }
  
      await sleep(sleepTime * 5);
  
      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };
  
  writeLoop();