const sliderContainer = document.querySelector('.slider-container');
const pageCounter = document.querySelector('.current-page');

const firstPageButton = document.querySelector('.first-page');
const lastPageButton = document.querySelector('.last-page');
const prevPageButton = document.querySelector('.prev-page');
const nextPageButton = document.querySelector('.next-page');

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

let pagesCount = 6;
let cardsPerPage = 8;
let currentPage = 1;

if (window.matchMedia("(max-width: 1279px)").matches) {
  pagesCount = 8;
  cardsPerPage = 6;
  currentPage = 1;
}
if (window.matchMedia("(max-width: 767px)").matches) {
  pagesCount = 16;
  cardsPerPage = 3;
  currentPage = 1;
}



let petsArray = generatePetsArray(pagesCount);

displayPage(petsArray, sliderContainer, cardsPerPage, currentPage);

nextPageButton.addEventListener('click', movePage);
prevPageButton.addEventListener('click', movePage);
firstPageButton.addEventListener('click', moveToFirstPage);
lastPageButton.addEventListener('click', moveToLastPage);

function moveToFirstPage() {
  currentPage = 1;
  displayPage(petsArray, sliderContainer, cardsPerPage, currentPage);
  pageCounter.textContent = currentPage;
  prevPageButton.disabled = true;
  firstPageButton.disabled = true;
  nextPageButton.disabled = false;
  lastPageButton.disabled = false;
}

function moveToLastPage() {
  currentPage = pagesCount;
  displayPage(petsArray, sliderContainer, cardsPerPage, currentPage);
  pageCounter.textContent = currentPage;
  nextPageButton.disabled = true;
  lastPageButton.disabled = true;
  prevPageButton.disabled = false;
  firstPageButton.disabled = false;
}

function movePage(e)
{
  if (e.target === nextPageButton) {
    currentPage++  
    if (currentPage === pagesCount)
    {
      displayPage(petsArray, sliderContainer, cardsPerPage, currentPage);
      pageCounter.textContent = currentPage;
      nextPageButton.disabled = true;
      lastPageButton.disabled = true;
    }
    else {
      pageCounter.textContent = currentPage;
      displayPage(petsArray, sliderContainer, cardsPerPage, currentPage);
    }

    if (currentPage > 1) {
      prevPageButton.disabled = false;
      firstPageButton.disabled = false;
    }
    
  }

  if (e.target === prevPageButton) {
    currentPage--;
    if (currentPage === 1)
    {
      displayPage(petsArray, sliderContainer, cardsPerPage, currentPage);
      pageCounter.textContent = currentPage;
      prevPageButton.disabled = true;
      firstPageButton.disabled = true;
    }
    else {
      pageCounter.textContent = currentPage;
      displayPage(petsArray, sliderContainer, cardsPerPage, currentPage);
    }

    if (currentPage < pagesCount) {
      nextPageButton.disabled = false;
      lastPageButton.disabled = false;
    }
  }
}


function getRandomCards(arr, count) {
  return arr.sort(() => Math.random() - Math.random()).slice(0, count);
}

function createCard (pet) {
  let card = document.createElement('div');
  let photo = document.createElement('img');
  let name = document.createElement('div');
  let button = document.createElement('button');

  photo.src = pet.img;
  name.appendChild(document.createTextNode(pet.name));
  button.appendChild(document.createTextNode('Learn more'));

  card.className = 'slider-container__card';
  card.classList.add('slider-card');
  name.className = 'slider-card__title';
  button.className = 'slider-card__button';
  photo.className = 'slider-card__image';

  card.append(photo, name, button);

  return card;
}

function generatePetsArray(pagesCount) {
  let petsArray = [];
  for (let i = 0; i < pagesCount; i++) {
    let petsSet = getRandomCards(jsonData, cardsPerPage);
    for (let pet of petsSet) {
      petsArray.push(createCard(pet));
    }
  }
  return petsArray;
}

function displayPage(pets, container, cardsPerPage, page) {
  container.innerHTML = "";
  page--;

  let start = cardsPerPage * page;
  let end = start + cardsPerPage;
  let paginatedPets = pets.slice(start, end);

  for (let pet of paginatedPets) {
    container.append(pet);
  }

}



