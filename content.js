const selector = "#player-error-message-container #reason";
const expectedReason = "Video unavailable";

function getUnrestrictedUrl(url) {
  // replace first occurence of youtube.com with yout-ube.com
  return url.replace(/youtube\.com/, "yout-ube.com");
}

function checkIsRestricted() {
  const element = document.querySelector(selector);
  if (element) {
    const reason = element.innerText.trim();
    if (reason === expectedReason) {
      return true;
    }
  }
  return false;
}

function redirectToUnrestrictedUrl() {
  const currentUrl = window.location.href;
  const unrestrictedUrl = getUnrestrictedUrl(currentUrl);
  console.log(`Redirecting to unrestricted URL: ${unrestrictedUrl}`);
  //   open the unrestricted URL in a new tab
  const win = window.open(unrestrictedUrl, "_blank");
  if (win) {
    win.focus();
  } else {
    console.log("Popups blocked");
    window.location.href = unrestrictedUrl;
  }
}

function checkAndRedirect() {
  console.log("Checking if video is restricted...");
  if (checkIsRestricted()) {
    console.log("Video is restricted. Redirecting...");
    redirectToUnrestrictedUrl();
  } else {
    console.log("Video is not restricted.");
  }
}

waitForElm(selector).then(() => {
  console.log("Element found. Checking for restrictions...");
  checkAndRedirect();
});

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
