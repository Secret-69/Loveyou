const love_btns= document.querySelectorAll('.love');

love_btns.forEach(love_btn => {
    love_btn.addEventListener('mousedown', (e) => {
        love_btn.style.color = '#e7273f';
        
        createHearts(love_btn.querySelector('.icon-container'));
    });

    love_btn.addEventListener('mouseup', (e) => {
        love_btn.style.background = '#e7273f';
        love_btn.style.color = '#fff';
        love_btn.querySelector('.text').innerHTML = 'Thank You!'; 
    });

})
  function createHearts(container) {
    for(let i=0; i<15; i++) {
        setTimeout(() => {
            const heart4= document.createElement('span');
            heart4.classList.add('heart4');
            heart4.innerHTML= '<i class="fa fa-heart1"></i>';
            heart4.style.left = Math.random() * 100 + '%';
            heart4.style.top = Math.random() * 100 + '%';
            heart4.style.fontsize = Math.random() * 20 + 5 + 'px';
            heart4.style.animationDuration = Math.random() * 2 + 3 + 's';
            container.appendChild(heart4);
            setTimeout(() => {
                heart4.remove();
            }, 3000);
        }, i * 100)
    }
  }