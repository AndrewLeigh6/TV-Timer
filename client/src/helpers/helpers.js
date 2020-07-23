/* from https://davidwalsh.name/javascript-debounce-function 
stops a function from firing too many times */
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const setEqualTitleHeights = () => {
  const titles = document.querySelectorAll("p[class^=MediaDetails_Title]");

  let largestHeight = 0;

  // get tallest title
  titles.forEach(element => {
    if (element.clientHeight > largestHeight) {
      largestHeight = element.clientHeight;
    }
  });

  // set all titles to largest height
  titles.forEach(element => {
    element.style.height = largestHeight + "px";
  });
};

const setEqualPosterHeights = () => {
  const posters = document.querySelectorAll("[class^=MediaDetails_Poster]");

  let largestHeight = 0;

  // get tallest poster
  posters.forEach(element => {
    if (element.height > largestHeight) {
      largestHeight = element.height;
    }
  });

  // set all posters to largest height
  posters.forEach(element => {
    element.style.height = largestHeight + "px";
  });
};

export const setEqualHeights = debounce(() => {
  setEqualTitleHeights();
  setEqualPosterHeights();
}, 250);

/* this looks absolutely hideous, but it's just so
    we can get the getMinutes result to look like 01, 02,
    etc instead of 1, 2. */
const padMinutes = minutes => {
  const paddedMinutes = String(minutes).padStart(2, "0");

  return paddedMinutes;
};

export const getTimeString = time => {
  const paddedMinutes = padMinutes(time.getMinutes());
  const timeString = time.getHours() + ":" + paddedMinutes;

  return timeString;
};
