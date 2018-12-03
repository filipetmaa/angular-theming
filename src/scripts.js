function downloadJSAtOnload() {

    const container = document.getElementById("container");

    document.querySelectorAll('.checkboxes > label:last-child > input').forEach((item) => item.indeterminate = true);

    const progress = document.querySelectorAll('.progresses > progress.approximate');
    setInterval(() => {
        for (let i = 0; i < progress.length; ++i) {
            progress[i].value = progress[i].value === 100 ? 0 : progress[i].value + 10;
        }
    }, 1000);

    https://codegolf.stackexchange.com/a/150252
    const hsl2rgb = (H, S, L) => [5, 3, 1].map(i => A(L * 2) * S * ([1, Y, 0, 0, Y, 1][(i - ~H) % 6] - .5) + L, Y = (A = n => n > 1 ? 2 - n : n)((H /= 60) % 2));

    var convert = require('color-convert');

    document.querySelector('#primary > input').oninput = (event) => {
        const rgb = hsl2rgb(event.target.value, 0.897, 0.541);
        // const rgb2 = convert.hsl.rgb(event.target.value, 0.897, 0.541);
        console.log(rgb);
        // console.log(rgb2);
        container.style.setProperty('--primary', `${Math.round(rgb[0] * 255)}, ${Math.round(rgb[1] * 255)}, ${Math.round(rgb[2] * 255)}`);
    };

    document.querySelector('#primary-variant > input').oninput = (event) => {
        const rgb = hsl2rgb(event.target.value, 0.897, 0.541);
        container.style.setProperty('--primary-variant', `${Math.round(rgb[0] * 255)}, ${Math.round(rgb[1] * 255)}, ${Math.round(rgb[2] * 255)}`);
    };

    document.querySelector('#on-primary > input').oninput = (event) => {
        const value = event.target.value;
        container.style.setProperty('--on-primary', `${value}, ${value}, ${value}`);
    };

    document.querySelector('#secondary > input').oninput = (event) => {
        const rgb = hsl2rgb(event.target.value, 0.897, 0.541);
        container.style.setProperty('--secondary', `${Math.round(rgb[0] * 255)}, ${Math.round(rgb[1] * 255)}, ${Math.round(rgb[2] * 255)}`);
    };

    document.querySelector('#secondary-variant > input').oninput = (event) => {
        const rgb = hsl2rgb(event.target.value, 0.897, 0.541);
        container.style.setProperty('--secondary-variant', `${Math.round(rgb[0] * 255)}, ${Math.round(rgb[1] * 255)}, ${Math.round(rgb[2] * 255)}`);
    };

    document.querySelector('#on-secondary > input').oninput = (event) => {
        const value = event.target.value;
        container.style.setProperty('--on-secondary', `${value}, ${value}, ${value}`);
    };

    document.querySelector('#background > input').oninput = (event) => {
        const value = event.target.value;
        container.style.setProperty('--background', `${value}, ${value}, ${value}`);
    };

    document.querySelector('#on-background > input').oninput = (event) => {
        const value = event.target.value;
        container.style.setProperty('--on-background', `${value}, ${value}, ${value}`);
    };

    document.querySelector('#surface > input').oninput = (event) => {
        const value = event.target.value;
        container.style.setProperty('--surface', `${value}, ${value}, ${value}`);
    };

    document.querySelector('#on-surface > input').oninput = (event) => {
        const value = event.target.value;
        container.style.setProperty('--on-surface', `${value}, ${value}, ${value}`);
    };

    const theming = document.querySelector('.theming');

    document.querySelector('#toggle > input').onchange = (event) => {
        if (event.target.checked) {
            theming.classList.remove('hidden');
        } else {
            theming.classList.add('hidden');
        }
    };
}
if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;