// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let checkedPoint = false;
let intervalID = '';

startBtn.addEventListener('click', () => {
  if (checkedPoint) return;
  intervalID = setInterval(() => {
    checkedPoint = true;
    startBtn.setAttribute('disabled', 'disabled');
    document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalID);
  startBtn.removeAttribute('disabled', 'disabled');
  checkedPoint = false;
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
