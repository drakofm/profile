let paral1 = document.querySelector('#parallax1');
let paral2 = document.querySelector('#parallax2');
let paral3 = document.querySelector('#parallax3');
let paral4 = document.querySelector('#parallax4');
window.addEventListener('mousemove', e => {
  // let x = e.clientX / window.innerWidth;
  // let y = e.clientY / window.innerHeight;  
  let x = window.innerWidth / 2 - e.clientX;
  let y = window.innerHeight / 2 - e.clientY;  
  paral1.style.transform = `translate(${x / 7}px, ${y / 7}px)`;
  paral2.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
  paral3.style.transform = `translate(${x / 9}px, ${y / 9}px)`;
  paral4.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
});