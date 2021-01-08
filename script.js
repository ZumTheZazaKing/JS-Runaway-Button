function run(){

    let button = document.getElementById('run');

    let width = window.outerWidth;

    let height = window.outerHeight;

    let widthPicker = Math.floor(Math.random()*Math.floor(width));

    let heightPicker = Math.floor(Math.random()*Math.floor(height));

    button.style.top = heightPicker + 'px';

    button.style.left = widthPicker + 'px';

}