// Dynamic Greeting Based on Time
const greeting = document.getElementById('greeting');
const dynamicMessage = document.getElementById('dynamic-message');

const now = new Date();
const hour = now.getHours();

if (hour < 12) {
  dynamicMessage.textContent = "Good Morning, Beautiful! ☀️";
} else if (hour < 18) {
  dynamicMessage.textContent = "Good Afternoon, Love! 💕";
} else {
  dynamicMessage.textContent = "Good Evening, Gorgeous! 🌙";
}

// Countdown Timer
const birthday = new Date('YYYY-MM-DDT00:00:00'); // Replace YYYY-MM-DD with her birthday
const countdown = document.getElementById('countdown');
const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

if (now < birthday) {
  countdown.classList.remove('hidden');

  setInterval(() => {
    const now = new Date();
    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000)) / 1000);

    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
  }, 1000);
}

// Balloons Floating Animation
const balloons = document.querySelectorAll('.balloon');
balloons.forEach((balloon, index) => {
  const delay = Math.random() * 5;
  balloon.style.animationDuration = `${5 + delay}s`;
});
