/* ===== TYPEWRITER ===== */
const roles = ["Frontend Developer", "UI Designer", "Problem Solver", "Creative Coder"];
let roleIndex = 0, charIndex = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type(){
    const current = roles[roleIndex];
    if(!deleting){
        tw.textContent = current.substring(0, charIndex+1);
        charIndex++;
        if(charIndex === current.length){
            deleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        tw.textContent = current.substring(0, charIndex-1);
        charIndex--;
        if(charIndex === 0){
            deleting = false;
            roleIndex = (roleIndex+1) % roles.length;
        }
    }
    setTimeout(type, deleting ? 60 : 100);
}
type();

/* ===== SCROLL REVEAL ===== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            // Animate skill bars when section is visible
            entry.target.querySelectorAll('.bar span[data-width]').forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
        }
    });
}, { threshold:0.15 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger').forEach(el => {
    observer.observe(el);
});

/* Also observe skill section directly */
document.querySelectorAll('.bar span[data-width]').forEach(bar => {
    const barObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting){
            bar.style.width = bar.dataset.width;
        }
    }, {threshold:0.5});
    barObserver.observe(bar);
});