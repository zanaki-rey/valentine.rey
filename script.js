const lockScreen = document.getElementById("lockScreen");
const valentineScreen = document.getElementById("valentineScreen");
const letterScreen = document.getElementById("letterScreen");

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const errorMsg = document.getElementById("errorMsg");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Password
const correctPassword = "062125";

// Unlock
unlockBtn.addEventListener("click", () => {
  if (passwordInput.value === correctPassword) {
    lockScreen.classList.add("hidden");
    valentineScreen.classList.remove("hidden");
  } else {
    errorMsg.innerHTML = "Wrong password 😭 try again!";
  }
});

// YES → Letter
yesBtn.addEventListener("click", () => {
  valentineScreen.classList.add("hidden");
  letterScreen.classList.remove("hidden");
});

// NO moves
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
