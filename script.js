const messages = [
    "Medɔ wo paa ❤️",
    "Wo yɛ me anigye ❤️",
    "You make my world brighter ✨",
    "You are God's precious gift to me 💕",
    "My Tumtum Bronii forever ❤️",
    "I thank God for bringing you into my life 🙏",
    "You are beautiful inside and out 🌹",
    "Happy Birthday my love 🎂❤️"
];

function showLove() {
    const random =
        messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("loveText").textContent = random;
}

// CHANGE THIS DATE
const startDate = new Date("2026-05-01");

function updateCounter() {

    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("relationshipCounter").innerText =
        `${days} beautiful days together ❤️`;
}

updateCounter();

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

setInterval(createHeart,400);

function playMusic(){
    document.getElementById("song").play();
}

function foreverLove(){

    document.getElementById("foreverMessage").innerHTML =
    `
    Tumtum Bronii ❤️<br><br>

    Thank you for being part of my life.

    Will you keep being my best friend,
    my prayer partner,
    my happiness,
    and my Tumtum Bronii forever? ❤️
    `;
}

const song = document.getElementById("song");

function playMusic() {
    song.play();
}

function pauseMusic() {
    song.pause();
}

function stopMusic() {
    song.pause();
    song.currentTime = 0;
}

function toggleRepeat() {

    song.loop = !song.loop;

    const button =
        document.querySelector("button[onclick='toggleRepeat()']");

    if(song.loop){
        button.textContent = "🔁 Repeat: ON";
    } else {
        button.textContent = "🔁 Repeat: OFF";
    }
}

function changeVolume(value){
    song.volume = value;
}

function playMusic() {

    song.play();

    document.querySelector("button[onclick='playMusic()']")
        .textContent = "❤️ Playing for Tumtum Bronii...";
}

function stopMusic() {

    song.pause();

    song.currentTime = 0;

    document.querySelector("button[onclick='playMusic()']")
        .textContent = "▶️ Play";
}

function checkPassword(){

    const password =
        document.getElementById("password").value;

    if(password === "Tumtum2026"){

        document.getElementById("loginScreen").style.display="none";

        document.getElementById("website").style.display="block";

        song.play();

    }else{

        document.getElementById("error").innerHTML=
        "Oops... ❤️ That's not our secret password.";

    }

}

alert(
"Welcome, Tumtum Bronii ❤️\n\nThis little website was made especially for you.\nI hope it makes you smile.\n\nHappy Birthday ❤️"
);