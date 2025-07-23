let box = document.querySelector('.box');

// box.addEventListener('mouseover',()=>{
//     box.style.backgroundColor = 'red';
// });

// box.addEventListener('mouseout',()=>{
//     box.style.backgroundColor = 'yellow';
// })




window.addEventListener('mousemove',(dets)=>{
    box.style.top = dets.clientY + 'px';
    box.style.left = dets.clientX + 'px';
})