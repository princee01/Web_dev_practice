const imgs = document.querySelectorAll(".header-slider ul img")
const prev_btn = document.querySelector(".control_previous")
const next_btn = document.querySelector(".control_next")

let n = 0;
function changeslide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeslide();

prev_btn.addEventListener("click", (e) => {
    if (n < 1) {
        n = imgs.length-1;
    } else {
        n--;
    }
    changeslide();
})
next_btn.addEventListener("click", (e) => {
    if (n == imgs.length-1) {
        n = 0;
    } else {
        n++;
    }
    changeslide();
})

const scrollcontainer = document.querySelectorAll('.products');
for (const item of scrollcontainer) {
    item.addEventListener('wheel', (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}