const s = (el) => document.querySelector(el);
const sa = (el) => document.querySelectorAll(el);
const curso = sa('.section-course--cursos');
const indicator = sa('.indicator');

/*ABRIR SIDEBAR */
s('.aside-buttom').addEventListener('click', ()=>{
    let menu = s('.menu');
    if(menu.style.width == '200px'){
        menu.style.width = '70px';
    }else{
        menu.style.width = '200px';
    }
});
/* LIGHT MOODE */
s('.option-light').addEventListener('click', () => {
    s('aside').classList.add('aside-color');
    s('.menu').classList.add('menu-color');
    s('.conteudo').classList.add('conteudo-color');
    s('.option-dark').classList.remove('selected');
    s('.option-light').classList.add('selected');  
    s('.section-categories').classList.add('section-categories-color');
    s('footer').classList.add('footer-color');
    curso.forEach((curso) => {
        curso.classList.add('section-course--color');
    });
});
/*DARK MODE*/
s('.option-dark').addEventListener('click', () => {
    s('aside').classList.remove('aside-color');
    s('.menu').classList.remove('menu-color');
    s('.conteudo').classList.remove('conteudo-color');
    s('.option-light').classList.remove('selected');  
    s('.option-dark').classList.add('selected');
    s('.section-categories').classList.remove('section-categories-color');
    s('footer').classList.remove('footer-color');
    curso.forEach((curso) => {
        curso.classList.remove('section-course--color');
    })
});


/*FUNCIONALIDADES DA TELA DE LOGIN */

/* LIGHT MOODE */
s('.option-light').addEventListener('click', ()=>{
    s('.section-login').classList.add('login-color');   
    s('.section-signin').classList.add('signin-color');
    s('.section-slide').classList.add('slide-color');
    s('.option-dark').classList.remove('selected');
    s('.option-light').classList.add('selected');    
});
/*DARK MODE*/
s('.option-dark').addEventListener('click', ()=>{
    s('.section-login').classList.remove('login-color');
    s('.section-signin').classList.remove('signin-color');
    s('.section-slide').classList.remove('slide-color');
    s('.option-light').classList.remove('selected');  
    s('.option-dark').classList.add('selected');
    
});

/* SLIDE */
let slideItem = 0;

window.onload = function() {
	setInterval(()=>{
        if(slideItem >= 2){
            slideItem = 0;
        }else{
            slideItem++;
        }
        document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(300 * slideItem)+"px";
        indicator.forEach(function (el, i){
            if(i == slideItem){
                el.classList.add('ativo');
            }else{
                el.classList.remove('ativo');
            }
        })
    }, 2000);
}

function mudarSlide(pos) {
	slideItem = pos;
    indicator.forEach((indicator)=>{
        indicator.addEventListener('click', ()=>{
            s('.indicator.ativo').classList.remove('ativo');
            indicator.classList.add('ativo');
        });
    })
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(300 * slideItem)+"px";
}