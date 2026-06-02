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

function filterEmotion(emotion) {
    changeAmbiance(emotion);
    display.innerHTML = ''; 
    display.className = 'grid-projects';
    
    const filtered = projects.filter(p => p.emotion === emotion);
    
    /* Títulos según la emoción */
    const messages = {
        joy: ["Recuerdos Esenciales", "Lo que apasiona a Saraí."],
        sadness: ["Pensamientos Profundos", "Lógica y estructuras de datos."],
        fear: ["Zonas de Riesgo", "Arquitectura y bajo nivel."],
        disgust: ["Control de Calidad", "Código limpio y robusto."]
    };

    title.innerText = messages[emotion][0];
    desc.innerText = messages[emotion][1];

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>Tech: ${p.tech}</p>
            <a href="${p.link}" target="_blank">Abrir Memoria →</a>
        `;
        display.appendChild(card);
    });
}

// Funciones de Navegación
function showAbout() {
    changeAmbiance('reset');
    title.innerText = "Isla de la Personalidad";
    desc.innerText = "El núcleo de quien soy.";
    display.className = 'info-view';
    display.innerHTML = `
        <div class="glass-panel">
            <p>¡Hola! Soy Saraí, una desarrolladora que mezcla la lógica del código con la estética del K-pop y la sensibilidad de Inside Out.</p>
            <p><strong>Dato Curioso:</strong> Programo mejor escuchando K-OST (bandas sonoras de dramas).</p>
        </div>
    `;
}

function showSkills() {
    changeAmbiance('reset');
    title.innerText = "Manual de Sistemas";
    desc.innerText = "Mis herramientas de creación.";
    display.className = 'grid-projects';
    display.innerHTML = `
        <div class="project-card"><h3>Frontend</h3><p>React, JS, CSS, HTML</p></div>
        <div class="project-card"><h3>Backend</h3><p>Node.js, Go, Python</p></div>
        <div class="project-card"><h3>Low Level</h3><p>Assembler, C++, Lisp</p></div>
    `;
}

function showContact() {
    changeAmbiance('reset');
    title.innerText = "Establecer Conexión";
    desc.innerText = "Disponible para nuevos proyectos.";
    display.className = 'info-view';
    display.innerHTML = `
        <div class="glass-panel">
            <p>¿Te gustaría que colaboremos?</p>
            <div class="contact-links">
                <a href="mailto:tu-correo@ejemplo.com" class="nav-btn">Email</a>
                <a href="https://github.com/SarAvi21805" target="_blank" class="nav-btn">GitHub</a>
            </div>
        </div>
    `;
}

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