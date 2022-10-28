const takenItems = document.querySelectorAll(".item");
const fakeBorders = document.querySelectorAll(".fake-border");
const sizeFont = getComputedStyle(document.documentElement).fontSize;

function calcTransf() {

    takenItems.forEach((item) => {
        if (window.innerWidth >= (43.75 * sizeFont)) {
            item.querySelector(".item-img").style.transform = `translateX(${(-328 + item.offsetWidth) / 32}rem)` //32=16*2
        }
        else {
            item.querySelector(".item-img").style.transform = "translateX(0)";
        }

    });
}


setInterval(calcTransf, 1);




// Overlay - Flashlight 
const options = document.querySelector(".options");
options.addEventListener(("mousemove"), (e) => {
    for (const item of fakeBorders) {
        const rect = item.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        item.style.setProperty("--mouse-x", `${x}px`);
        item.style.setProperty("--mouse-y", `${y}px`);
    }
});
