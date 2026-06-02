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

// Función de Proyectos
function filterEmotion(emotion) {
    changeAmbiance(emotion);
    const display = document.getElementById('content-display');
    display.className = 'grid-projects';
    display.innerHTML = ''; 
    
    /* Títulos según la emoción */
    const messages = {
        joy: ["Recuerdos Esenciales", "Lo que apasiona a Saraí."],
        sadness: ["Pensamientos Profundos", "Lógica y estructuras de datos."],
        fear: ["Zonas de Riesgo", "Arquitectura y bajo nivel."],
        disgust: ["Control de Calidad", "Código limpio y robusto."]
    };

    title.innerText = messages[emotion][0];
    desc.innerText = messages[emotion][1];

    // Filtro de proyectos (asumiendo que tienes el array 'projects' arriba)
    const filtered = projects.filter(p => p.emotion === emotion);
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `<h3>${p.name}</h3><p>${p.tech}</p><a href="${p.link}" target="_blank">Abrir Memoria</a>`;
        display.appendChild(card);
    });
}

// Funciones de Navegación

// Isla de la Personalidad
function showAbout() {
    changeAmbiance('reset');
    const display = document.getElementById('content-display');
    title.innerText = "Isla de la Personalidad";
    desc.innerText = "El núcleo de quien soy.";
    display.className = 'info-view';
    display.innerHTML = `
        <div class="island-card">
            <h2>Isla de Saraí</h2>
            <p>¡Hola! Soy Saraí, una desarrolladora que mezcla la lógica del código con la estética del K-pop y la sensibilidad de Inside Out.</p>
            <p><strong>Dato Curioso:</strong> Programo mejor escuchando K-OST (bandas sonoras de dramas).</p>
            <p><strong>Naturaleza:</strong> Curiosa, creativa y apasionada por el K-Pop.</p>
            <hr>
            <p><strong>Formación:</strong> Ingeniería en Ciencias de la Computación.</p>
            <p><strong>Dones:</strong> Programación lógica con estética visual.</p>
            <p><em>"Construyendo puentes entre el código y la emoción."</em></p>
        </div>
    `;
}

// Manual de Sistemas
function showSkills() {
    changeAmbiance('reset');
    const display = document.getElementById('content-display');
    title.innerText = "Manual de Sistemas";
    desc.innerText = "Mis herramientas de creación.";
    display.className = 'grid-projects';
    display.innerHTML = `
        <div class="project-card" style="border: 2px solid #2ecc71"><h3>Frontend</h3><h5>Visión Técnica</h5><p>React, JS, CSS, HTML</p></div>
        <div class="project-card" style="border: 2px solid #f1c40f"><h3>Backend</h3><h5>Imaginación</h5><p>Node.js, Go, Python</p><p>Diseño UI/UX, CSS Art, Animaciones</p></div>
        <div class="project-card" style="border: 2px solid #3498db"><h3>Low Level</h3><h5>Control de Bajo Nivel</h5><p>Assembler, C++, Lisp</p><p>Archivos de Memoria</p><p>SQL, NoSQL, Estructuras de Datos</p></div>
    `;
}

// Conexión
function showContact() {
    changeAmbiance('reset');
    const display = document.getElementById('content-display');
    title.innerText = "Establecer Conexión";
    desc.innerText = "Disponible para nuevos proyectos.";
    display.className = 'info-view';
    display.innerHTML = `
        <div class="glass-panel" style="border-left: 5px solid #9b59b6">
            <h3>Sistema de Conexiones</h3>
            <p>¿Te gustaría que colaboremos?</p>
            <div class="contact-links">
                <a href="mailto:alejandraviles2005@gmail.com" class="nav-btn">Email</a>
                <a href="https://github.com/SarAvi21805" target="_blank" class="nav-btn">GitHub</a>
                <a href="https://www.linkedin.com/in/alejandra-avil%C3%A9s-3886b5408/" target="_blank" class="nav-btn">LinkedIn</a>
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