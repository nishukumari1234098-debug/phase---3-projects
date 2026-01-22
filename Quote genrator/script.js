let quotes = [
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Small steps every day lead to big changes. – Unknown",
    "Success is the sum of small efforts repeated daily. – Robert Collier",
    "Dream big and dare to fail. – Norman Vaughan",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Your limitation—it’s only your imagination. – Unknown",
    "Push yourself, because no one else is going to do it for you. – Unknown",
    "Great things never come from comfort zones. – Unknown",
    "Wake up with determination. Go to bed with satisfaction. – Unknown",
    "Little by little, a little becomes a lot. – Tanzanian Proverb",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Don’t stop when you’re tired. Stop when you’re done. – Marilyn Monroe",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "Opportunities don’t happen, you create them. – Chris Grosser",
    "Act as if what you do makes a difference. It does. – William James",
    "Happiness is not by chance, but by choice. – Jim Rohn",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "Everything you can imagine is real. – Pablo Picasso",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Don’t limit your challenges. Challenge your limits. – Unknown",
    "You are stronger than you think. – Unknown",
    "If you can dream it, you can do it. – Walt Disney",
    "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
    "Stay positive, work hard, make it happen. – Unknown",
    "The future depends on what you do today. – Mahatma Gandhi",
    "Mistakes are proof that you are trying. – Unknown",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "Every moment is a fresh beginning. – T.S. Eliot",
    "Believe in yourself and all that you are. – Christian D. Larson",
    "With the new day comes new strength and new thoughts. – Eleanor Roosevelt",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Go the extra mile. It’s never crowded. – Wayne Dyer",
    "You don’t have to be perfect to be amazing. – Unknown",
    "A winner is a dreamer who never gives up. – Nelson Mandela",
    "Make today so awesome that yesterday gets jealous. – Unknown",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Don’t wait for opportunity. Create it. – George Bernard Shaw",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently. – Marie Forleo",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Do something today that your future self will thank you for. – Sean Patrick Flanery",
    "If you want to fly, give up everything that weighs you down. – Buddha",
    "Be so good they can’t ignore you. – Steve Martin",
    "Fall seven times, stand up eight. – Japanese Proverb",
];

let counter = 0;

function showQuote(){

    let randomNumber = Math.random();
    let randomIndex = Math.floor(randomNumber * quotes.length);

    let selectedQuote = quotes[randomIndex];

    document.getElementById("quote").textContent = '"' + selectedQuote + '"';

    counter = counter + 1;
    document.getElementById("count").textContent = counter;
}


function copyQuote(){
    let quoteText = document.getElementById("quote").textContent;

    navigator.clipboard.writeText(quoteText);

    alert("Quote copied! 📋");
}