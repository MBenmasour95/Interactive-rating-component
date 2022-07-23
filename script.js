/* === DOM Elements === */
const wrapper = document.getElementById("wrapper");
const buttonsWrapper = document.getElementById("buttons-wrapper");
const submitBtn = document.getElementById("submit-btn");
const buttons = document.querySelectorAll(".btn");

/* === Variable === */
let rating = 0;

/* === Style ===*/
const wrapperStyle = "align-items: center;justify-content: space-around;";

/* === EventListeners === */
buttonsWrapper.addEventListener("click", choosingRating);
submitBtn.addEventListener("click", submit);

/* === Functions === */
function choosingRating(e) {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (e.target.classList.contains("btn")) {
    e.target.classList.add("active");
    rating = e.target.innerText;
  }
}

function submit() {
  if (rating === 0) {
    buttons.forEach((btn) => {
      btn.classList.add("flashed");

      setTimeout(() => {
        btn.classList.remove("flashed");
      }, 500);
    });
  } else {
    wrapper.style.cssText = wrapperStyle;
    wrapper.innerHTML = `
    <img src="./images/illustration-thank-you.svg" alt="thank you" />
    <div class="rating">
        <p>You selected ${rating} out of 5</p>
    </div>
    <h2>Thank you!</h2>
    <p style="text-align: center;">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
    </p> 
    `;
  }
}
