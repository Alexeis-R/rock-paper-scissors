// Définition des choix possibles
const choices = ['rock', 'paper', 'scissors'];
let score = 0; // Initialisation du score

// Ajout d'un écouteur d'événement à chaque bouton de choix
document.querySelectorAll('.choices button').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id; // Récupère le choix du joueur
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Choix aléatoire de l'ordinateur
        displayChoices(playerChoice, computerChoice); // Affiche les choix
        const result = getResult(playerChoice, computerChoice); // Détermine le résultat
        document.getElementById('result-message').textContent = result; // Affiche le résultat
        if (result.includes('win')) {
            score++; // Incrémente le score si le joueur gagne
        } else if (result.includes('lose')) {
            score--; // Décrémente le score si le joueur perd
        }
        document.getElementById('score').textContent = score; // Met à jour le score affiché
    });
});

// Fonction pour déterminer le résultat du jeu
function getResult(player, computer) {
    if (player === computer) {
        return "It's a draw!"; // Égalité
    }
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return "You win!"; // Le joueur gagne
    } else {
        return "You lose!"; // Le joueur perd
    }
}

// Fonction pour afficher les choix du joueur et de l'ordinateur
function displayChoices(playerChoice, computerChoice) {
    document.querySelector('.choices').style.display = 'none'; // Cache les boutons de choix
    document.getElementById('picked').style.display = 'flex'; // Affiche les choix sélectionnés
    setChoiceImage('player-choice', playerChoice); // Affiche l'image du choix du joueur
    setChoiceImage('computer-choice', computerChoice); // Affiche l'image du choix de l'ordinateur
    document.getElementById('result-display').style.display = 'block'; // Affiche le résultat
}

// Fonction pour définir l'image du choix
function setChoiceImage(elementId, choice) {
    const element = document.getElementById(elementId);
    element.className = `choice-button ${choice}`; // Définit la classe CSS pour le style
    element.innerHTML = `<img src="./images/icon-${choice}.svg" alt="${choice}">`; // Définit l'image et l'attribut alt
}

// Fonctionnalité de la modal des règles
const rulesButton = document.getElementById('rules-button');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('rules-modal');

// Affiche la modal des règles lorsque le bouton est cliqué
rulesButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Cache la modal des règles lorsque le bouton de fermeture est cliqué
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cache la modal des règles lorsque l'utilisateur clique en dehors du modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Fonctionnalité du bouton "Play Again"
const playAgainButton = document.getElementById('play-again');
playAgainButton.addEventListener('click', () => {
    document.querySelector('.choices').style.display = 'flex'; // Affiche les boutons de choix
    document.getElementById('picked').style.display = 'none'; // Cache les choix sélectionnés
    document.getElementById('result-display').style.display = 'none'; // Cache le résultat
});