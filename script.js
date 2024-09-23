function createFireworks() {
    const firework = document.createElement('div');
    firework.innerHTML = '🎆';
    firework.style.position = 'absolute';
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    firework.style.fontSize = '30px';
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 2000);
}

setInterval(createFireworks, 500);
function createMeteor() {
    const meteor = document.createElement('div');
    meteor.innerHTML = '🌠';
    meteor.style.position = 'absolute';
    meteor.style.left = Math.random() * 100 + 'vw';
    meteor.style.top = Math.random() * 100 + 'vh';
    meteor.style.fontSize = '30px';
    meteor.style.animation = 'moveMeteor 3s linear';
    document.body.appendChild(meteor);
    setTimeout(() => meteor.remove(), 3000);
}

setInterval(createMeteor, 2000);
