// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const handleHeart = (heart) => {
  heart.innerHTML = heart.innerHTML === EMPTY_HEART ? FULL_HEART : EMPTY_HEART; //toggle empty/full heart

  if (heart.classList.contains(`activated-heart`)) {
    heart.classList.remove("activated-heart");
  } else {
    heart.classList.add("activated-heart");
  } //toggle class for red color
};

// Your JavaScript code goes here!
document.querySelectorAll(".like-glyph").forEach((heart) => {
  heart.addEventListener(`click`, () => {
    mimicServerCall()
      .then(() => {
        handleHeart(heart);
      })
      .catch((e) => {
        console.log(e);
        const errModal = document.getElementById("modal");
        errModal.classList.remove("hidden");
        errModal.children[1].innerHTML = e;
        setTimeout(() => {
          errModal.classList.add("hidden");
          errModal.children[1].innerHTML = "";
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}