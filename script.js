document.addEventListener('DOMContentLoaded', () => {
    // --- Music Toggle ---
    const musicBtn = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    let isMusicPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '🎵 Music Off';
        } else {
            bgMusic.volume = 0.3;
            bgMusic.play().catch(e => console.log('Audio play failed:', e));
            musicBtn.innerHTML = '🎵 Music On';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // --- Screen Transition ---
    const openBtn = document.getElementById('open-btn');
    const openingScreen = document.getElementById('opening-screen');
    const mainScreen = document.getElementById('main-screen');

    openBtn.addEventListener('click', () => {
        openingScreen.classList.remove('active');
        openingScreen.classList.add('hidden');
        
        setTimeout(() => {
            mainScreen.classList.remove('hidden');
            mainScreen.classList.add('active');
            
            // Start typewriter animation after screen transition
            setTimeout(startTypewriter, 1000);
        }, 1000);
    });

    // --- Typewriter Effect ---
    const messages = [
        "Dassy, I don't know exactly how your day is going right now...",
        "But if today feels a little heavy, I hope this little page can make it even a tiny bit lighter.",
        "You don't have to do anything. You don't have to reply. Just smile if you can. That's already enough. 💙"
    ];
    
    const typeWriterElement = document.getElementById('typewriter-text');
    let msgIndex = 0;
    let charIndex = 0;

    function startTypewriter() {
        if (msgIndex < messages.length) {
            if (charIndex < messages[msgIndex].length) {
                typeWriterElement.innerHTML += messages[msgIndex].charAt(charIndex);
                charIndex++;
                setTimeout(startTypewriter, 40); // typing speed
            } else {
                setTimeout(() => {
                    if(msgIndex < messages.length - 1) {
                         typeWriterElement.innerHTML += '<br><br>';
                    }
                    msgIndex++;
                    charIndex = 0;
                    startTypewriter();
                }, 1500); // pause between messages
            }
        }
    }

    // --- Background Particles ---
    const particlesContainer = document.getElementById('particles-container');
    const particleTypes = ['💙', '✨', '🫧'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.innerText = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        
        // Random properties
        const size = Math.random() * 15 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        
        particle.style.fontSize = `${size}px`;
        particle.style.left = `${left}vw`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
        
        // Remove after animation completes
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
    
    // Create new particles periodically
    setInterval(createParticle, 800);
    
    // Initial particles
    for (let i = 0; i < 15; i++) {
        setTimeout(createParticle, Math.random() * 5000);
    }

    // --- Smile Button Interaction ---
    const smileBtn = document.getElementById('smile-btn');
    const randomMessageEl = document.getElementById('random-message');
    const clickSound = document.getElementById('click-sound');
    
    const smileMessages = [
        "You deserve a good day. 💙",
        "Here's a tiny smile for you. 😊",
        "Sending you a little happiness. ✨",
        "Don't forget to take care of yourself. 🫶",
        "I hope something wonderful happens to you today. 🌷",
        "Smile, Dassy. The world needs more of that. 💙"
    ];

    smileBtn.addEventListener('click', (e) => {
        // Play soft sound
        clickSound.volume = 0.4;
        clickSound.currentTime = 0;
        clickSound.play().catch(err => console.log('Audio play failed', err));
        
        // Show random message
        const randomMsg = smileMessages[Math.floor(Math.random() * smileMessages.length)];
        randomMessageEl.innerText = randomMsg;
        randomMessageEl.style.opacity = 1;
        
        // Create burst effect
        createBurst(e.clientX, e.clientY);
    });
    
    function createBurst(x, y) {
        const burstCount = 15;
        const burstTypes = ['💙', '✨'];
        
        for (let i = 0; i < burstCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('burst-particle');
            particle.innerText = burstTypes[Math.floor(Math.random() * burstTypes.length)];
            
            // Random direction
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
});

// Flip card function (global so inline onclick works)
window.flipCard = function(element) {
    element.classList.toggle('flipped');
};
