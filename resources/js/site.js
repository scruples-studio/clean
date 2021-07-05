/* Cards: Make the entire card clickable, but the text can still be selected. */
const cards = document.querySelectorAll('.articleList li');  
Array.prototype.forEach.call(cards, card => {  
    let down, up, link = card.querySelector('a');
    card.onmousedown = () => down = +new Date();
    card.onmouseup = () => {
        up = +new Date();
        if ((up - down) < 200) {
            link.click();
        }
    }
    card.style.cursor = 'pointer';  
});