const ship = document.querySelector('.ship');
const space = document.querySelector('.space');

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

window.addEventListener('keydown', (e) => {
    let left = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    if(e.key == 'ArrowLeft' && left >= 0) {
        // ship.style.left = left - 50 + 'px';
        ship.style.left = 36 + 'px';
    } else if(e.key == 'ArrowRight' && left <= 450) {
        // ship.style.left = left + 50 + 'px';
        ship.style.left = 446 + 'px';
    }
})

let i = 0;

const generateRocks = setInterval(() => {
    i++;
    let rock = document.createElement('div');
    rock.classList.add('rock');
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    rock.style.left = Math.floor(Math.random() * 446) + 'px';
    space.appendChild(rock);

    rock.classList.add(`roll${i}`);

    let roll = document.querySelector(`.roll${i}`);
    roll.style.height = randomInt(10, 40) + 'px';
    roll.style.width = randomInt(10, 40) + 'px';
    roll.style.animation = `rock ${randomInt(1, 10)}s linear infinite`;
    console.log(roll);
}, 3500);

const moveRocks = setInterval(() => {
    let rocks = document.getElementsByClassName('rock');
    // console.log(rocks);
    if(rocks) {
        for (let i = 0; i < rocks.length; i++) {
            let rock = rocks[i];
            let rockFall = parseInt(window.getComputedStyle(rock).getPropertyValue('top'));
            rock.style.top = rockFall + 20 + 'px';
        }
    }
}, 500);

console.log(`
**Требования:**

- реализован интерфейс игры **+5**
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс **+5**
- Логика игры. Ходы, перемещения фигур, другие действия игрока подчиняются определённым свойственным игре правилам **+10**
- Реализовано завершение игры при достижении игровой цели **+10**
- По окончанию игры выводится её результат, например, количество ходов, время игры, набранные баллы, выигрыш или поражение и т.д **+10**
- Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр **+10**
- Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов **+10**
- Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +**10**

**Оценка за задание - 70 баллов**
`);