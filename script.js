// Ampliamos la lista de proyectos con tus fotos de GitHub
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

function filterEmotion(emotion) {
    display.innerHTML = '';
    const filtered = projects.filter(p => p.emotion === emotion);
    
    // Títulos según emoción
    const messages = {
        joy: ["Recuerdos Esenciales", "Lo que me apasiona crear y disfrutar."],
        sadness: ["Pensamientos Profundos", "Análisis de algoritmos y estructuras de datos."],
        fear: ["Zonas de Riesgo", "Proyectos complejos de bajo nivel y arquitectura."],
        disgust: ["Control de Calidad", "Sistemas robustos y buenas prácticas de POO."]
    };

    title.innerText = messages[emotion][0];
    desc.innerText = messages[emotion][1];

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>Tech: ${p.tech}</p>
            <a href="${p.link}" target="_blank">Explorar Memoria →</a>
        `;
        display.appendChild(card);
    });
}

function showAbout() {
    title.innerText = "Isla de la Personalidad";
    desc.innerText = "Conociendo el motor central.";
    display.innerHTML = `
        <div class="project-card" style="grid-column: 1 / -1; text-align: left;">
            <p>¡Hola! Soy Saray. Me apasiona cómo la tecnología puede contar historias, igual que un buen KDrama o un Comeback de K-Pop. Mi enfoque es crear software que no solo sea funcional, sino que tenga "alma" y una experiencia de usuario impecable.</p>
            <p><strong>Educación:</strong> Estudiante de Ingeniería en Ciencias de la Computación.</p>
        </div>
    `;
}

function showSkills() {
    title.innerText = "Manual de Sistemas";
    desc.innerText = "Dones y habilidades técnicas.";
    display.innerHTML = `
        <div class="skills-container" style="grid-column: 1 / -1;">
            <div class="skill-col">
                <h3>Lenguajes</h3>
                <ul><li>Java / C++</li><li>JavaScript / Go</li><li>Assembler / Lisp</li></ul>
            </div>
            <div class="skill-col">
                <h3>Web & Mobile</h3>
                <ul><li>React / HTML5</li><li>Node.js / CSS3</li><li>Android Studio</li></ul>
            </div>
            <div class="skill-col">
                <h3>Soft Skills</h3>
                <ul><li>Trabajo en equipo</li><li>Pensamiento Crítico</li><li>Adaptabilidad</li></ul>
            </div>
        </div>
    `;
}

function showContact() {
    title.innerText = "Establecer Conexión";
    desc.innerText = "Enviando señal al Cuartel Central...";
    display.innerHTML = `
        <div class="project-card" style="grid-column: 1 / -1;">
            <p>¿Listo para trabajar juntos?</p>
            <div style="margin-top:20px;">
                <a href="mailto:tu-correo@ejemplo.com" class="nav-btn">Email</a>
                <a href="https://linkedin.com/in/tu-usuario" class="nav-btn">LinkedIn</a>
                <a href="https://github.com/SarAvi21805" class="nav-btn">GitHub</a>
            </div>
        </div>
    `;
}