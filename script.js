const oldBtn = document.getElementById('old-btn');
const newBtn = document.getElementById('new-btn');

const oldCtn = document.getElementById('old');
const newCtn = document.getElementById('new');

oldBtn.addEventListener("click", () => {
    if (oldCtn.classList.contains('hidden')) {
        oldCtn.classList.remove('hidden');
        newCtn.classList.add('hidden');
    } else {
        oldCtn.classList.add('hidden');
        newCtn.classList.remove('hidden');
    }
});

newBtn.addEventListener("click", () => {
    if (newCtn.classList.contains('hidden')) {
        newCtn.classList.remove('hidden');
        oldCtn.classList.add('hidden');
    } else {
        newCtn.classList.add('hidden');
        oldCtn.classList.remove('hidden');
    }
});

const navBtns = document.getElementsByClassName('nav-btn');

for (let i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener("click", () => {
        alert("Still working on it!!");
    });
}