const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const ship = document.querySelector('.ship');
const space = document.querySelector('.space');
let rocksCount = 0;
let speedFall = 20;
let rockInterval = 3500;

document.addEventListener("DOMContentLoaded", function() {
    // alert("Menu");
  });

const generateRocks = () => {
    setInterval(() => {
        let rock = document.createElement('div');
        space.appendChild(rock);
        rock.classList.add('rock');
        rock.classList.add(`rock-${rocksCount}`);
        rock.style.left = randomInt(30, 450) + 'px';
        rock.style.height = randomInt(20, 60) + 'px';
        rock.style.width = randomInt(20, 60) + 'px';
        rock.style.animation = `rock ${randomInt(1, 10)}s linear infinite`;
        rock.style.backgroundImage = `url(assets/images/rock-${randomInt(1,5)}.png)`;
        rockInterval > 500 ? rockInterval -= 100 : false;
        rocksCount++;
    }, rockInterval);
};

// generateRocks();

const moveRocks = () => {
    setInterval(() => {
        let rocks = document.getElementsByClassName('rock');
        if(rocks) {
            for (let i = 0; i < rocks.length; i++) {
                let rockFall = parseInt(window.getComputedStyle(rocks[i]).getPropertyValue('top'));
                rocks[i].style.top = rockFall + speedFall + 'px'; //20
            };
        };
        // speedFall++;
    }, 300);
};

// moveRocks();

const moveShip = () => {
    window.addEventListener('keydown', (e) => {
        let shipPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
        if(e.key == 'ArrowLeft' && shipPosition >= 0) {
            ship.style.left = 36 + 'px';
        } else if(e.key == 'ArrowRight' && shipPosition <= 450) {
            ship.style.left = 446 + 'px';
        };
    });
};

// moveShip();

const menuShip = () => {
    ship.src = 'assets/images/ship-menu.png';
};

menuShip();

const rocketLaunch = () => {
    window.addEventListener('keydown', (e) => {
        let rocket = document.querySelector('.rocket');
        if(e.key == ' ' && !rocket) {
            let rocket = document.createElement('div');
            space.appendChild(rocket);
            rocket.classList.add('rocket');
            const audioShot = new Audio(`assets/sounds/shot-${randomInt(1,3)}.mp3`);
            audioShot.play();
            setInterval(() => {
                let shipPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
                rocket.style.left = shipPosition + 'px';
                let rocketPosition = parseInt(window.getComputedStyle(rocket).getPropertyValue('bottom'));
                rocket.style.bottom = rocketPosition + 1 + 'rem';
            }, 50);
            setTimeout(() => {
                rocket ? rocket.parentElement.removeChild(rocket): true;
            }, 2500);
        };
    });
};

// rocketLaunch();

const rocketHit = () => {
    setInterval(() => {
        let rocket = document.querySelector('.rocket');
        if(rocket) {
            let rocks = document.getElementsByClassName('rock');
            for(let i = 0; i < rocks.length; i++) {
                let rockBound = rocks[i].getBoundingClientRect();
                let rocketBound = rocket.getBoundingClientRect();
                if (rocketBound.left + 9 >= rockBound.left &&
                    rocketBound.right - 9 <= rockBound.right &&
                    rocketBound.top + 29 >= rockBound.top &&
                    rocketBound.bottom - 29<= rockBound.bottom) {
                        let blast = document.createElement('div');
                        space.appendChild(blast);
                        blast.style.left = rocks[i].style.left;
                        blast.style.right = rocks[i].style.right;
                        blast.style.top = rocks[i].style.top;
                        // blast.style.top = Number(rocks[i].style.top.substring(0, rocks[i].style.top.length - 2)) - speedFall + 'px';
                        blast.style.bottom = rocks[i].style.bottom;
                        console.log(Number(rocks[i].style.top.substring(0, rocks[i].style.top.length - 2)) + speedFall + 'px');
                        blast.classList.add('blast');
                        const audioBlast = new Audio(`assets/sounds/exp-${randomInt(1,3)}.mp3`);
                        audioBlast.play();
                        rocks[i].parentElement.removeChild(rocks[i]);
                        setTimeout(() => {
                            blast.parentElement.removeChild(blast);
                        }, 1000);
                        // rocket ? rocket.parentElement.removeChild(rocket): true;
                    };
                };
            };
    }, 0);
}

// rocketHit();

// const moveEarth = () => {
//     setInterval(() => {
//         document.querySelector('.planet').style.width = (200 - rocksCount) + '%';
//     }, 1000);
// };

// // moveEarth();






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