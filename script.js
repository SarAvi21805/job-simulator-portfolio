const projects = [
    { name: "KDrama Tracker", emotion: "joy", tech: "React/Node", link: "https://github.com/SarAvi21805/kdrama-tracker-frontend" },
    { name: "KPop Blog", emotion: "joy", tech: "HTML/CSS", link: "https://github.com/SarAvi21805/kpop-blog" },
    { name: "Aventura Orquídeas", emotion: "joy", tech: "Java/Android", link: "https://github.com/SarAvi21805/aventura-orquideas" },
    { name: "Assembler Lab 7", emotion: "fear", tech: "Assembler", link: "https://github.com/stan-2021131/Lab7-Assembler" },
    { name: "Interprete Lisp", emotion: "fear", tech: "Java/Lisp", link: "https://github.com/gnicoool/Proyecto-1---Interprete-Lisp" },
    { name: "Algoritmos HDT10", emotion: "sadness", tech: "Java", link: "https://github.com/SarAvi21805/HDT10-Algoritmos" },
    { name: "Pacman Pthreads", emotion: "disgust", tech: "C++", link: "https://github.com/SarAvi21805/pacman-pthreads-CC3086" }
];

const display = document.getElementById('content-display');
const title = document.getElementById('emotion-title');
const desc = document.getElementById('emotion-description');
const body = document.body;

// Cambiar el fondo dinámicamente
function changeAmbiance(emotion) {
    const colors = {
        joy: "#4a3f00",      // Amarillo oscuro/dorado
        sadness: "#001a3d",  // Azul profundo
        fear: "#2d004a",     // Morado oscuro
        disgust: "#003d1a",  // Verde bosque
        reset: "#090a0f"     // Original
    };
    body.style.backgroundColor = colors[emotion] || colors.reset;
}

// Proyectos
function filterEmotion(emotion) {
    const colors = { joy: "#f1c40f", sadness: "#3498db", fear: "#9b59b6", disgust: "#2ecc71" };
    magicFlash(colors[emotion]);
    changeAmbiance(emotion);

    const display = document.getElementById('content-display');
    display.className = 'grid-projects';
    display.innerHTML = ''; 

    const messages = {
        joy: ["Recuerdos Esenciales", "Lo que apasiona a Saraí."],
        sadness: ["Pensamientos Profundos", "Lógica y estructuras de datos."],
        fear: ["Zonas de Riesgo", "Arquitectura y bajo nivel."],
        disgust: ["Control de Calidad", "Código limpio y robusto."]
    };

    title.innerText = messages[emotion][0];
    desc.innerText = messages[emotion][1];

    projects.filter(p => p.emotion === emotion).forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        // Agregamos una clase según la emoción para el borde
        card.classList.add(`border-${emotion}`);
        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.tech}</p>
            <a href="${p.link}" target="_blank" class="memory-link">Abrir Memoria</a>
        `;
        display.appendChild(card);
    });
}


// Funciones de Navegación

// Isla (sobre mí)
function showAbout() {
    changeAmbiance('reset');
    const display = document.getElementById('content-display');
    title.innerText = "Archipiélago de Personalidad";
    desc.innerText = "Los pilares que sostienen mi mundo.";
    display.className = 'grid-projects'; // Usamos grid para ver varias islas
    display.innerHTML = `
        <p>¡Hola! Soy Saraí, una desarrolladora que mezcla la lógica del código con la estética del K-pop y la sensibilidad de Inside Out.</p>
        <p><strong>Dato Curioso:</strong> Programo mejor escuchando K-OST (bandas sonoras de dramas).</p>
        <p><strong>Naturaleza:</strong> Curiosa, creativa y apasionada por el K-Pop.</p>
        <hr>
        <div class="project-card island-card">
            <h3>Isla Académica</h3>
            <p>Ingeniería en Ciencias de la Computación</p>
            <p><em>UVG - En formación constante</em></p>
        </div>
        <div class="project-card island-card">
            <h3>Isla de Identidad</h3>
            <p>Desarrolladora apasionada por el UI/UX y la lógica eficiente.</p>
            <p>"Mezclando código con estética K-Pop."</p>
        </div>
        <div class="project-card island-card">
            <h3>Isla de Intereses</h3>
            <p>K-Dramas, Anime, Música Instrumental.</p>
            <p>Fan de la narrativa visual de Disney y Encanto.</p>
        </div>
    `;
}

// Manual de Sistemas
function showSkills() {
    changeAmbiance('reset');
    const display = document.getElementById('content-display');
    title.innerText = "Manual de Operaciones";
    desc.innerText = "Especificaciones técnicas del sistema.";
    display.className = 'grid-projects';
    display.innerHTML = `
        <div class="project-card skill-box" style="border: 2px solid #2ecc71">
            <h4>Visión (Frontend)</h4>
            <p>React, JavaScript, HTML5, CSS3</p>
        </div>
        <div class="project-card skill-box" style="border: 2px solid #f1c40f">
            <h4>Motor (Backend)</h4>
            <p>Node.js, Go, Python, Java</p>
        </div>
        <div class="project-card skill-box" style="border: 2px solid #3498db">
            <h4>Bajo Nivel</h4>
            <p>Assembler, C++, Lisp</p>
        </div>
        <div class="project-card skill-box" style="border: 2px solid #9b59b6">
            <h4>Almacenamiento</h4>
            <p>SQL, NoSQL, Estructuras de Datos</p>
        </div>
    `;
}

// Conexión
function showContact() {
    changeAmbiance('reset');
    const display = document.getElementById('content-display');
    title.innerText = "Sistema de Creencias";
    desc.innerText = "Estableciendo hilos de conexión.";
    display.className = 'info-view';
    display.innerHTML = `
        <div class="glass-panel" style="border-left: 5px solid #9b59b6">
            <p>¿Te gustaría que colaboremos en un nuevo proyecto?</p>
            <div class="contact-grid">
                <a href="mailto:alejandraviles2005@gmail.com" class="btn-contact joy-btn">EMAIL</a>
                <a href="https://github.com/SarAvi21805" target="_blank" class="btn-contact fear-btn">GITHUB</a>
                <a href="https://www.linkedin.com/in/alejandra-avil%C3%A9s-3886b5408/" target="_blank" class="btn-contact sadness-btn">LINKEDIN</a>
            </div>
        </div>
    `;
}

// Alternar música de fondo
function toggleMusic() {
    const audio = document.getElementById('bgm');
    const btn = document.getElementById('music-toggle');
    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸ Pause BGM";
    } else {
        audio.pause();
        btn.innerText = "🎵 Play BGM";
    }
}

// Iniciar Consola y Audio
function startConsole() {
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(() => document.getElementById('overlay').style.display = 'none', 1000);
    const audio = document.getElementById('welcome-audio');
    audio.play();
    createParticles();
}

// 5. Apagar Consola
function sleepMode() {
    magicFlash('#000');
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('overlay').style.opacity = '1';
        document.querySelector('.start-msg h1').innerText = "SISTEMA EN REPOSO";
        document.querySelector('.start-msg p').innerText = "Haz clic para despertar a Riley";
        const audio = document.getElementById('bgm');
        audio.pause();
    }, 500);
}

// Generador de Partículas
function createParticles() {
    for (let i = 0; i < 30; i++) {
        let p = document.createElement('div');
        p.className = 'particle';
        let size = Math.random() * 5 + 'px';
        p.style.width = size;
        p.style.height = size;
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(p);
    }
}

// Destello mágico de color
function magicFlash(color) {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.backgroundColor = color;
    flash.style.opacity = '0.3';
    flash.style.zIndex = '999';
    flash.style.pointerEvents = 'none';
    flash.style.transition = 'opacity 0.8s ease';
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => flash.remove(), 800);
    }, 100);
}