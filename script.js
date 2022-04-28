const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData);
function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="unsplash laptop"/>';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum magni fuga.';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/58.jpg" alt=""></img>';
     name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct, 08 2020';
}
animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));