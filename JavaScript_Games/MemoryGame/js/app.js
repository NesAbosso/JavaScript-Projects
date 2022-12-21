const cardArray = [
    {
        name: "Banana cat",
        img:  './images/bcat',
    },
    {
        name: "Blue cat",
        img: 'images/bg.png',
    },
    {
        name: "Candy",
        img: 'images/candy.png',
    },
    {
        name: "Cat",
        img: 'images/cat.png',
    },
    {
        name: "Cup cat",
        img: 'images/cupcat.png',
    },
    {
        name: "Watermelon",
        img: 'images/watermelon.png',
    },
    {
        name: "Banana cat",
        img: 'images/bcat.png',
    },
    {
        name: "Blue cat",
        img: 'images/bg.png',
    },
    {
        name: "Candy",
        img: 'images/candy.png',
    },
    {
        name: "Cat",
        img: 'images/cat.png',
    },
    {
        name: "Cup cat",
        img: 'images/cupcat.png',
    },
    {
        name: "Watermelon",
        img: './images/watermelon.png"g',
    },

    
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/pink.png')
        card.setAttribute('date-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId = optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/pink.png')
        cards[optionTwoId].setAttribute('src', 'images/pink.png')
        alert('You have clicked the same image')
    }


    console.log('check for match!')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/dpink.png')
        cards[optionTwoId].setAttribute('src', 'images/dpink.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/pink.png')
        cards[optionTwoId].setAttribute('src', 'images/pink.png')
        alert('Sorry try again!')
    }
    resultDisplay.itextContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = 'Congratulations you found them all!'
    }
}
function flipCard() {
   
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout ( checkMatch, 500)
    }
}