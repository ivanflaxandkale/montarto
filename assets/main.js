/* Cargar navbar y footer */
function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");

/* Animaciones al scroll */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll(".marca").forEach(el => observer.observe(el));
// JavaScript Document