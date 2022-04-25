const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.friends__button-prev');
const nextButton = document.querySelector('.friends__button-next');

const jsonData = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

let cardsCount = 3;

if (window.matchMedia("(max-width: 1279px)").matches) {
  cardsCount = 2;
}
if (window.matchMedia("(max-width: 767px)").matches) {
  cardsCount = 1;
}


let newCards = getRandomCards(jsonData);
sliderContainer.append(makeCardsSet(newCards));

sliderContainer.append(getBlankSet(2));
newCards = getRandomCards(jsonData.filter(item => !newCards.includes(item)))
let first = makeCardsSet(newCards);
first.classList.add("active");
sliderContainer.prepend(first);


function getRandomCards(arr) {
  return arr.sort(() => Math.random() - Math.random()).slice(0, cardsCount);
}

function makeCardsSet(pets) {
  let cardsSet = document.createElement('div');
  cardsSet.className = 'cards-set';
  for (let pet of pets) {   
    cardsSet.append(createCard(pet));
  }
  return cardsSet;
}

function getBlankSet(a) {
  let cardsSet = document.createElement('div');
  cardsSet.className = 'cards-set';
  for (let i=0; i < cardsCount; i++) {  
    cardsSet.append(createBlankCard(a));
  }
  return cardsSet;
}

function createBlankCard (pet) {
  let card = document.createElement('div');
  let photo = document.createElement('img');
  let name = document.createElement('div');
  let button = document.createElement('button');

  //photo.src = pet.img;
  name.appendChild(document.createTextNode(pet));
  button.appendChild(document.createTextNode('Learn more'));

  card.className = 'friends__card';
  card.classList.add('_blank');
  name.className = 'friends__name';
  button.className = 'friends__button';
  photo.className = 'friends__image';

  card.append(photo, name, button);
  return card;
}

function createCard (pet) {
  let card = document.createElement('div');
  let photo = document.createElement('img');
  let name = document.createElement('div');
  let button = document.createElement('button');

  photo.src = pet.img;
  name.appendChild(document.createTextNode(pet.name));
  button.appendChild(document.createTextNode('Learn more'));

  card.className = 'friends__card';
  name.className = 'friends__name';
  button.className = 'friends__button';
  photo.className = 'friends__image';

  card.append(photo, name, button);

  return card;
}

function slider() {
  let slider = document.querySelector(".slider-container"),
    last = slider.lastElementChild,
    first = slider.firstElementChild,
    btn = document.querySelectorAll(".friends-button");
    
    slider.insertBefore(last, first);

  btn.forEach(btn => {
    btn.addEventListener("click", movement);
  });
 
  function movement(e) {
    slider = document.querySelector(".slider-container");
    last = slider.lastElementChild;
    first = slider.firstElementChild;

    const activeSlide = document.querySelector(".active");

    newCards = getRandomCards(jsonData.filter(item => !newCards.includes(item)));
    
    if (e.target.id === "next") {
      slider.insertBefore(first, last.nextSibling);
      let nextCardSet = activeSlide.nextElementSibling;
      let items = nextCardSet.querySelectorAll('.friends__card');  
      for (let i = 0; i < cardsCount; i++) {
        items[i].querySelector('.friends__image').src = newCards[i].img;
        items[i].querySelector('.friends__name').textContent = newCards[i].name;
      }    
      activeSlide.classList.remove("active");
      activeSlide.nextElementSibling.classList.add("active");
      
    } else if (e.target.id === "prev") {
      slider.insertBefore(last, first);
      let prevCardSet = activeSlide.previousElementSibling;
      let items = prevCardSet.querySelectorAll('.friends__card');     
      activeSlide.classList.remove("active");
      activeSlide.previousElementSibling.classList.add("active");
      for (let i = 0; i < cardsCount; i++) {
        items[i].querySelector('.friends__image').src = newCards[i].img;
        items[i].querySelector('.friends__name').textContent = newCards[i].name;
      }  
    }
  }
}
slider();


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const headerConteiner = document.querySelector('.header__container');
const headerLogo = document.querySelector('.header__logo');

const links = document.querySelectorAll('.header__link');

for (let link of links) {
  link.addEventListener('click', closeBurger);
}

burger.addEventListener('click', closeBurger);

overlay.addEventListener('click', closeBurger);

function closeBurger() {
  if (getComputedStyle(burger).display === 'block') {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    overlay.classList.toggle('active');
    headerConteiner.classList.toggle('burger');
    headerLogo.classList.toggle('burger');
  }
}