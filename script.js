const projects = [
    { name: "KDrama Tracker", emotion: "joy", tech: "React/Node", link: "https://github.com/SarAvi21805/kdrama-tracker-frontend" },
    { name: "KPop Blog", emotion: "joy", tech: "HTML/CSS", link: "https://github.com/SarAvi21805/kpop-blog" },
    { name: "Assembler Lab 7", emotion: "fear", tech: "Assembler", link: "https://github.com/stan-2021131/Lab7-Assembler" },
    { name: "Lisp Interpreter", emotion: "fear", tech: "Lisp", link: "https://github.com/gnicoool/Proyecto-1---Interprete-Lisp" },
    { name: "Algoritmos HDT10", emotion: "sadness", tech: "Java", link: "https://github.com/SarAvi21805/HDT10-Algoritmos" },
    { name: "Business Tracking POO", emotion: "disgust", tech: "C++", link: "https://github.com/stan-2021131/Bussines-Tracking-POO--20" }
];

function filterEmotion(emotion) {
    const display = document.getElementById('project-display');
    const title = document.getElementById('emotion-title');
    display.innerHTML = ''; // Limpiar pantalla

    const filtered = projects.filter(p => p.emotion === emotion);

    // Títulos según emoción
    const texts = {
        joy: "Recuerdos Esenciales: Lo que me apasiona",
        fear: "Desafíos de Control: Proyectos de alta complejidad",
        sadness: "Pensamientos Profundos: Lógica y Estructuras",
        disgust: "Estándares de Calidad: Código Limpio y POO"
    };

    title.innerText = texts[emotion];

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>Tech: ${p.tech}</p>
            <a href="${p.link}" target="_blank" style="color: white;">Ver Repo →</a>
        `;
        display.appendChild(card);
    });
}
