const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const ship = document.querySelector('.ship');
const space = document.querySelector('.space');
const audioShot = new Audio('./assets/sounds/shot.mp3');
let rocksCount = 0;

const generateRocks = () => {
    setInterval(() => {
        let rock = document.createElement('div');
        rock.classList.add('rock');
        rock.classList.add(`rock-${rocksCount}`);
        rock.style.left = randomInt(30, 450) + 'px';
        rock.style.height = randomInt(20, 60) + 'px';
        rock.style.width = randomInt(20, 60) + 'px';
        rock.style.animation = `rock ${randomInt(1, 10)}s linear infinite`;
        rock.style.backgroundImage = `url(assets/images/rock-${randomInt(1,3)}.png)`;
        space.appendChild(rock);
        rocksCount++;
    }, 3500);
}

generateRocks();

const moveRocks = () => {
    setInterval(() => {
        let rocks = document.getElementsByClassName('rock');
        if(rocks) {
            for (let i = 0; i < rocks.length; i++) {
                let rock = rocks[i];
                let rockFall = parseInt(window.getComputedStyle(rock).getPropertyValue('top'));
                rock.style.top = rockFall + 20 + 'px';
            }
        }
    }, 500);
}
// window.addEventListener('keydown', (e) => {
//     let left = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
//     if(e.key == 'ArrowLeft' && left >= 0) {
//         ship.style.left = 36 + 'px';
//     } else if(e.key == 'ArrowRight' && left <= 450) {
//         ship.style.left = 446 + 'px';
//     } else if(e.key == ' ') {
//         let rocket = document.createElement('div');
//         rocket.classList.add('rocket');
//         space.appendChild(rocket);
//         audioShot.play();
//         let launchRocket = setInterval(() => {
//             let rocks = document.getElementsByClassName('rock');
//             for(let i = 0; i < rocks.length; i++) {
//                 let rock = rocks[i];
//                 let rockBound = rock.getBoundingClientRect();
//                 let rocketBound = rocket.getBoundingClientRect();
//                 if (rocketBound.left >= rockBound.left &&
//                     rocketBound.right <= rockBound.right &&
//                     rocketBound.top <= rockBound.top &&
//                     rocketBound.bottom <= rockBound.bottom
//                     ) {
//                         rock.parentElement.removeChild(rock);
//                     }
//             }
//             let rocketStart = parseInt(window.getComputedStyle(rocket).getPropertyValue('bottom'));
//             rocket.style.left = left + 'px';
//             rocket.style.bottom = rocketStart + 1 + 'rem';
//         }, 50);
//     }
// })

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