const paw = document.querySelector('#ic_paw.active');
const menu = document.querySelectorAll('.menu li');
const section = document.querySelector('section.content');
const hamburger = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.navbar .mid');

hamburger.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
  section.classList.toggle('active');

  if (!menuList.classList.contains('hidden'))
    setTimeout(() => {
      menuList.classList.add('hidden');
      section.classList.remove('active');
    }, 5000);
});

menu.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    if (!e.currentTarget.children[0].children[0].classList.contains('active')) {
      paw.classList.remove('active');
      e.currentTarget.children[0].children[0].classList.add('active');
    }
  });
  item.addEventListener('mouseout', (e) => {
    if (!paw.classList.contains('active')) {
      paw.classList.add('active');
      e.currentTarget.children[0].children[0].classList.remove('active');
    }
  });
});
