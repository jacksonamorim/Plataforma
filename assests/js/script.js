const s = (el) => document.querySelector(el);
const sa = (el) => document.querySelectorAll(el);
const curso = document.querySelectorAll('.section-course--cursos');

s('.aside-buttom').addEventListener('click', ()=>{
    let menu = s('.menu');
    if(menu.style.width == '200px'){
        menu.style.width = '70px';
    }else{
        menu.style.width = '200px';
    }
});

s('.option-light').addEventListener('click', () => {
    s('aside').classList.add('aside-color');
    s('.menu').classList.add('menu-color');
    s('.conteudo').classList.add('conteudo-color');
    s('.section-categories').classList.add('section-categories-color');
    s('footer').classList.add('footer-color');
    curso.forEach((curso) => {
        curso.classList.add('section-course--color');
    });
});

s('.option-dark').addEventListener('click', () => {
    s('aside').classList.remove('aside-color');
    s('.menu').classList.remove('menu-color');
    s('.conteudo').classList.remove('conteudo-color');
    s('.section-categories').classList.remove('section-categories-color');
    s('footer').classList.remove('footer-color');
    curso.forEach((curso) => {
        curso.classList.remove('section-course--color');
    })
});

s('.option-light').addEventListener('click', ()=>{
    s('.section-signin').classList.add('signin-color');
    s('.section-login').classList.add('login-color');
})
s('.option-dark').addEventListener('click', ()=>{
    s('.section-signin').classList.remove('signin-color');
    s('.section-login').classList.remove('login-color');
})