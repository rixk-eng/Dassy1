document.addEventListener('DOMContentLoaded', () => {
    // --- Music Toggle ---
    const music = document.getElementById("backgroundMusic");
    const musicToggle = document.getElementById("musicToggle");

    let isMusicPlaying = false;
    music.volume = 0.3;

    musicToggle.addEventListener("click", async () => {
        if (isMusicPlaying) {
            music.pause();
            isMusicPlaying = false;
            musicToggle.textContent = "🔇 Music Off";
        } else {
            try {
                await music.play();
                isMusicPlaying = true;
                musicToggle.textContent = "🎵 Music On";
            } catch (error) {
                console.log("Music playback requires user interaction.");
            }
        }
    });

    music.addEventListener("play", () => {
        musicToggle.textContent = "🎵 Music On";
        isMusicPlaying = true;
    });

    music.addEventListener("pause", () => {
        musicToggle.textContent = "🔇 Music Off";
        isMusicPlaying = false;
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

// --- Flip Card Logic ---
const messagePools = {
    reminder: [
        "You're more special than you probably realize. 💙",
        "Don't forget that you deserve good things too.",
        "You may not notice it, but you bring something special into the lives of people around you.",
        "You're doing better than you think.",
        "You are worthy of kindness, patience, and respect.",
        "Someone out there is genuinely hoping you're okay today.",
        "Your presence matters more than you know.",
        "You don't have to be perfect to be appreciated.",
        "Even on difficult days, you are still someone worth caring about.",
        "Never underestimate the little things that make you uniquely you. ✨"
    ],
    today: [
        "Take things slowly today. You don't have to figure everything out at once.",
        "It's okay to rest when you're tired.",
        "I hope today gives you at least one reason to smile.",
        "Don't be too hard on yourself today.",
        "Drink some water, breathe, and take things one step at a time. 💙",
        "Whatever you're carrying today, I hope it becomes a little lighter.",
        "You deserve a peaceful day.",
        "Give yourself permission to pause.",
        "I hope something unexpectedly good happens to you today. ✨",
        "One difficult day doesn't define your whole story."
    ],
    oneMoreThing: [
        "Your smile looks good on you, so don't forget to use it sometimes. 😊",
        "You have a beautiful way of being yourself.",
        "There are little things about you that make you memorable.",
        "Keep being genuine. That's something worth protecting.",
        "You don't have to change who you are to be appreciated.",
        "I hope you know how valuable you are.",
        "Your kindness, even when it's small, can mean a lot.",
        "There's something special about people who remain gentle despite difficult days.",
        "You deserve people who make you feel comfortable being yourself.",
        "Just a tiny reminder: you're worth appreciating. 💙"
    ],
    finally: [
        "Someone out there genuinely wishes you a peaceful and happy day.",
        "I hope you're taking care of yourself today.",
        "Whatever happens today, don't forget to be kind to yourself.",
        "I hope you find something that makes your heart feel lighter.",
        "You deserve happiness without having to earn it.",
        "I hope the next few days bring you more reasons to smile.",
        "Please remember to rest when you need to.",
        "I hope life gives you something beautiful when you least expect it. 🌷",
        "No pressure, no expectations—just a little happiness sent your way.",
        "Take care always, Dassy. You deserve peaceful days. 💙"
    ]
};

const previousMessages = {
    reminder: null,
    today: null,
    oneMoreThing: null,
    finally: null
};

window.flipCard = function(element, category) {
    const isFlipped = element.classList.contains('flipped');
    
    if (!isFlipped) {
        // Flipping to the back, get a new message
        const pool = messagePools[category];
        let newMsg = pool[Math.floor(Math.random() * pool.length)];
        
        // Ensure not identical to previous
        while (newMsg === previousMessages[category]) {
            newMsg = pool[Math.floor(Math.random() * pool.length)];
        }
        
        previousMessages[category] = newMsg;
        
        // Update content
        element.querySelector('.message-content').innerText = newMsg;
        element.classList.add('flipped');
    } else {
        // Flipping back to the front
        element.classList.remove('flipped');
    }
};
