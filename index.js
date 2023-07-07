const yesBtm = document.querySelector("#yesBtm");

yesBtm.addEventListener("click",function () {
alert("la vida es muchas veces complicada y fea pero contigo a mi lado siento que puedo con todo y que lo tengo todo...te amo sara💕")
});

const noBtm = document.querySelector('#noBtm');

noBtm.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random()+100);
    const randomY = parseInt(Math.random()*100);
    noBtm.style.setProperty('top',randomY+'%');
    noBtm.style.setProperty('left'.randomX+'%');
    noBtm.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
    	