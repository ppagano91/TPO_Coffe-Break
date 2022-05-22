// document.getElementById('MyElement').className = 'MyClass';
const logoBtn = document.getElementById('logo');
const header = document.getElementById('header');
const headerTitle = document.getElementById('headerTitle');

// tomar los elementos con <a>
const links = document.getElementsByClassName('link');

const changeHeaderColor = () => {
  let min = 0;
  let max = 256;
  let r = Math.floor(Math.random() * (max - min) + min);
  let g = Math.floor(Math.random() * (max - min) + min);
  let b = Math.floor(Math.random() * (max - min) + min);
  let rgb = `rgb(${r},${g},${b})`;
  let rgb2 = `rgb(${256 - r},${256 - g},${256 - b}`;
  header.style.background = rgb;
  // logoBtn.style.background = rgb2;

  for (let link of links) {
    // console.log(link);
    link.style.color = rgb2;
  }
  headerTitle.style.color = rgb2;

  // link.style.color = rgb2;
};

logoBtn.addEventListener('click', changeHeaderColor);

// DARK MODE
const btnSwitch = document.getElementById('btnSwitch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
  // if (btnSwitch.classList[1] == 'active') {
  //   header.style.background = 'burlywood';
  //   headerTitle.style.color = 'black';
  // }
});
