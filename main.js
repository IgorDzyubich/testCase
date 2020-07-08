const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');
const modal = document.querySelector('.modal');
const home = document.querySelector('.home-btn');
const market = document.querySelector('.market-btn');
const basket = document.querySelector('.basket-btn');

btn.addEventListener('click', () => {
    wrapper.style.display = 'block';
})

wrapper.addEventListener('click', (e) => {
    if (e.target === wrapper) {
        wrapper.style.display = 'none';
    }
})

home.addEventListener('click', () => {
    document.querySelector('.main').style.left = '0';
    market.classList.remove('active');
    basket.classList.remove('active');
    home.classList.add('active');
    
})
market.addEventListener('click', () => {
    document.querySelector('.main').style.left = '-350px';
    home.classList.remove('active');
    basket.classList.remove('active');
    market.classList.add('active');
})
basket.addEventListener('click', () => {
    document.querySelector('.main').style.left = '-700px';
    home.classList.remove('active');
    market.classList.remove('active');
    basket.classList.add('active');
})