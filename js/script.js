
// ============   parallax-hover-card  ==============
const cards = Array.from(document.querySelectorAll('.hover-card'));
const props = {
  perspective: '500px',
  delta: 15, // adjust this to see different effects whilst hovering
  cardWidth: cards[0].clientWidth,
  cardHeight: cards[0].clientHeight,
}

const midWidth = props.cardWidth / 2;
const midHeight = props.cardHeight / 2;

for (const card of cards) {
  card.addEventListener('mousemove', mouseOverCard);
  card.addEventListener('mouseleave', mouseLeftCard);
}

function mouseOverCard(e) {
  // cursor relative to card
  const cursorX = e.pageX - this.offsetLeft; 
  const cursorY = e.pageY - this.offsetTop;
  const cursCenterX = midWidth - cursorX;
  const cursCenterY = midHeight - cursorY;

  // Fallback for <=IE11
  // this.style.cssText += `transform: perspective(${props.perspective}) rotateX(${cursCenterY / props.delta}deg) rotateY(${-cursCenterX / props.delta}deg)`;

  Object.assign(this.style, {
    transform: `perspective(${props.perspective}) rotateX(${cursCenterY / props.delta}deg) rotateY(${-cursCenterX / props.delta}deg)`
  });
  this.classList.remove('mouse-out');
}
function mouseLeftCard() {
  this.classList.add('mouse-out');
}