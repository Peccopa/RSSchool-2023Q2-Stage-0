const audioIntro = new Audio(`assets/sounds/intro.mp3`);
const audioOpenCurtain = new Audio(`assets/sounds/open-curtain.mp3`);
const audioClick = new Audio(`assets/sounds/click.mp3`);
const audioStart = new Audio(`assets/sounds/start-2.mp3`);
const audioAmbient = new Audio(`assets/sounds/ambient-2.mp3`);
const menuClick = new Audio(`assets/sounds/menu-click.mp3`);
const audioMissSound = new Audio(`assets/sounds/miss-3.mp3`);
const userName = document.querySelector('.user-name');
const loadBody = document.querySelector('.body');
const loginBtn = document.querySelector('.login-btn');
const menuInput = document.querySelector('.menu-input');
const curtain = document.querySelector('.curtain');
const gameCard = document.querySelector('.game-card');
const gameMenu = document.querySelector('.game-menu');
const resultsMenu = document.querySelector('.results-menu');
const menuItems = document.querySelectorAll('.gm-item');
const menuLaunchBtn = document.querySelector('.game-menu-launch');
const menuResultsBtn = document.querySelector('.game-menu-results');
const menuLeaveBtn = document.querySelector('.game-menu-exit');
const resultsExitBtn = document.querySelector('.results-exit');
const hitsCounterTop = document.querySelector('.hits-counter-num');
const missCounterTop = document.querySelector('.miss-counter-num');
const currentUser = {};
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const asteroidsFloor = document.querySelector('.asteroids-floor');
const ship = document.querySelector('.ship');
const space = document.querySelector('.space');
const deadPlanet = document.querySelector('.dead-planet');
const planet = document.querySelector('.planet');
const tagUl = document.querySelector('.results-ul');
let tagLi = '';
let results = [];
let rocksCount = 0;
let speedFall = 20;
let rockInterval = 3500;
let interval;
let gameScore = 0;
let missScore = 0;
let checkFunc = 0;

// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(() => {
//         loadBody.style.opacity = 1;
//     }, 1000);
// });

window.addEventListener('load', (event) => {
    loadBody.style.opacity = 1;
});

//login

const menuLoginBtn = () => {
    setInterval(() => {
    menuInput.value ? loginBtn.style.opacity = .8 : loginBtn.style.opacity = .5;
    }, 100);
    loginBtn.addEventListener('click', () => {
        menuLoginInput();
    });
};

menuLoginBtn();

const menuLoginEnter = (e) => {
    if(e.key === 'Enter' && e.target.value !== '') {
        menuInput.style.background = '#999999';
        loginBtn.style.color = '#999999';
        menuInput.readOnly = true;
        menuLoginInput();
    };
};

menuLoginEnter(menuInput);

menuInput.addEventListener('keyup', menuLoginEnter);

//GAME MENU

const gameMenuOpened = () => {
    menuItems.forEach(element => {
        element.addEventListener('mouseover', () => {
            let menuClick = new Audio(`assets/sounds/menu-click.mp3`);
            menuClick.volume = 0.5;
            menuClick.play();
        });
    });
    menuLeaveBtn.addEventListener('click', () => {
        audioAmbient.loop = false;
        audioAmbient.pause();
        audioAmbient.currentTime = 0;
        audioIntro.play();
        audioOpenCurtain.play();
        menuInput.style.background = '#ccc';
        loginBtn.style.color = '#333';
        menuInput.readOnly = false;
        tagUl.textContent = '';
        gameScore = 0;
        setTimeout(() => {
            curtain.classList.remove('curtain-opened');
        }, 300);
    });
};

gameMenuOpened();

const menuLoginInput = () => {
    if(menuInput.value) {
        userName.textContent = menuInput.value;
        menuClick.volume = 0.3;
        menuClick.play();
        audioIntro.play();
        createResultsList();
        setTimeout(() => {
            audioOpenCurtain.volume = 0.3;
            audioOpenCurtain.play();
            curtain.classList.add('curtain-opened');
            setTimeout(() => {
                audioAmbient.volume = .5;
                audioAmbient.loop = true;
                audioAmbient.play();
            }, 15000);
        }, 550);
    } else {
        audioClick.volume = 0.5;
        audioClick.play();
    };
};

const openGameMenu = () => {
    setTimeout(() => {
        gameMenu.classList.add('game-menu-opened');
        audioAmbient.volume = .5;
        audioAmbient.loop = true;
        audioAmbient.play();
    }, 3000);
};

const createResultsList = () => {
    if(localStorage.getItem('results')) {
        results = JSON.parse(localStorage.getItem('results'));
        results.sort((a, b) => parseInt(a.userScore) - parseInt(b.userScore));
        results.reverse();
        results.forEach(element => {
            tagLi = `
            <li>
                <p class="pilot-name">${element.userName}</p>
                <p class="pilot-score">${element.userScore}</p>
            </li>`;
            tagUl.insertAdjacentHTML('beforeend', tagLi);
        });
    };
};

const openMenuResults = () => {
    let stoneSlide = new Audio(`assets/sounds/stone-sliding.mp3`);
    stoneSlide.volume = 0.5;
    menuResultsBtn.addEventListener('click', () => {
        stoneSlide.play();
        gameMenu.style.transform = 'perspective(60rem) rotateY(-180deg)';
        resultsMenu.style.transform = 'perspective(60rem) rotateY(0deg)';
    });
    resultsExitBtn.addEventListener('mouseover', () => {
        let menuClick = new Audio(`assets/sounds/menu-click.mp3`);
        menuClick.volume = 0.5;
        menuClick.play();
    });
    resultsExitBtn.addEventListener('click', () => {
        stoneSlide.play();
        gameMenu.style.transform = 'perspective(60rem) rotateY(0deg)';
        resultsMenu.style.transform = 'perspective(60rem) rotateY(180deg)';
        let rocks = document.querySelectorAll('.rock');
        if(rocks) {
            rocks.forEach(element => {
                element.parentElement.removeChild(element);
            });
        };
    });
};

openMenuResults();

const launchGame = () => {
    menuLaunchBtn.addEventListener('click', () => {
        asteroidsFloor.style.transition = '1s ease-in';
        missCounterTop.textContent = '0%';
        hitsCounterTop.textContent = '0%';
        localStorage.getItem('results') ? results = JSON.parse(localStorage.getItem('results')) : false;
        currentUser['userId'] = results.length + 1;
        currentUser['userName'] = String(menuInput.value);
        currentUser['userScore'] = 0;
        results.push(currentUser);
        localStorage.setItem('results', JSON.stringify(results));
        createResultsList();
        audioStart.play();
        menuLaunchBtn.classList.add('launch-active-btn');
        setTimeout(() => {
        gameCard.classList.add('game-card-hide');
        ship.classList.add('ship-launch');
        ship.src = 'assets/images/ship.gif';
        asteroidsFloor.classList.add('asteroids-floor-launch');
        planet.classList.add('planet-launch');
        if(missScore > 0) {
            checkFunc++;
            gameScore = 0;
            missScore = 0;
            rockInterval = 3500;
            };
        }, 900);
        setTimeout(() => {
            ship.style.transition = 'all 5s ease-out';
            ship.classList.remove('ship-launch');
            ship.classList.remove('ship-menu');
            ship.classList.add('ship');
            document.querySelector('.hits-counter').classList.add('opacity');
            document.querySelector('.miss-counter').classList.add('opacity');
        }, 2000);
        setTimeout(() => {
            interval = setInterval(generateRocks, rockInterval);
            if(checkFunc == 0) {
            moveRocks();
            moveShip();
            rocketLaunch();
            rocketHit();
            moveEarth();
            };
            ship.style.transition = 'all 2s ease-out';
            gameMenu.style.transform = 'perspective(60rem) rotateY(-180deg)';
            resultsMenu.style.transform = 'perspective(60rem) rotateY(0deg)';
            menuLaunchBtn.classList.remove('launch-active-btn');
        }, 4000);
    });
};

launchGame();

const generateRocks = () => {
    if(missScore >= 10) {
        return;
    };
    clearInterval(interval);
    let rock = document.createElement('div');
    space.appendChild(rock);
    rock.classList.add('rock');
    rock.classList.add(`rock-${rocksCount}`);
    rock.style.left = randomInt(30, 450) + 'px';
    rock.style.height = randomInt(20, 60) + 'px';
    rock.style.width = randomInt(20, 60) + 'px';
    rock.style.animation = `rock ${randomInt(1, 10)}s linear infinite`;
    rock.style.backgroundImage = `url(assets/images/rock-${randomInt(1,5)}.png)`;
    rockInterval > 500 ? rockInterval -= 25 : rockInterval = 500;
    rocksCount++;
    interval = setInterval(generateRocks, rockInterval);
};

// generateRocks();

const moveRocks = () => {
    if(missScore >= 10) {
        return;
    };
    setInterval(() => {
        let rocks = document.getElementsByClassName('rock');
        if(rocks) {
            for (let i = 0; i < rocks.length; i++) {
                let rockFall = parseInt(window.getComputedStyle(rocks[i]).getPropertyValue('top'));
                rocks[i].style.top = rockFall + speedFall + 'px'; //20
                if(rockFall > 900 && missScore < 10) {
                    rocks[i].parentElement.removeChild(rocks[i]);
                    missScore++;
                    missCounterTop.textContent = missScore * 10 + '%';
                    missCounterTop.classList.add('miss-dawn');
                    audioMissSound.play();
                    if(missScore == 10) {
                        stopGame();
                    };
                    setTimeout(() => {
                        missCounterTop.classList.add('dusk');
                        missCounterTop.classList.remove('miss-dawn');
                        setTimeout(() => {
                            missCounterTop.classList.remove('dusk');
                        }, 1000);
                    }, 500);
                };
            };
        };
        speedFall = speedFall + 0.05;
    }, 300);
};

// moveRocks();

const moveShip = () => {
    if(missScore >= 10) {
        return;
    };
    window.addEventListener('keydown', (e) => {
        let shipPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
        if(missScore >= 10) {
            return;
        };
        if(e.key == 'ArrowLeft' && shipPosition >= 0) {
            ship.style.left = 36 + 'px';
        } else if(e.key == 'ArrowRight' && shipPosition <= 450) {
            ship.style.left = 446 + 'px';
        };
    });
};

// moveShip();

const rocketLaunch = () => {
    if(missScore >= 10) {
        return;
    };
    window.addEventListener('keydown', (e) => {
        if(missScore >= 10) {
            return;
        };
        let rocket = document.querySelector('.rocket');
        if(e.key == ' ' && !rocket) {
            let rocket = document.createElement('div');
            space.appendChild(rocket);
            const audioShot = new Audio(`assets/sounds/shot-${randomInt(1,3)}.mp3`);
            audioShot.play();
            setInterval(() => {
                if(missScore >= 10) {
                    return;
                };
                let shipPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
                rocket.style.left = shipPosition + 'px';
                let rocketPosition = parseInt(window.getComputedStyle(rocket).getPropertyValue('bottom'));
                rocket.style.bottom = rocketPosition + 1 + 'rem';
                rocket.classList.add('rocket');
            }, 50);
            setTimeout(() => {
                rocket ? rocket.parentElement.removeChild(rocket): true;
            }, 2500);
        };
    });
};

// rocketLaunch();

const rocketHit = () => {
    if(missScore >= 10) {
        return;
    };
    setInterval(() => {
        if(missScore >= 10) {
            return;
        };
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
                        blast.style.top = Number(rocks[i].style.top.substring(0, rocks[i].style.top.length - 2)) - speedFall + 'px';
                        blast.style.bottom = rocks[i].style.bottom;
                        blast.classList.add('blast');
                        const audioBlast = new Audio(`assets/sounds/exp-${randomInt(1,3)}.mp3`);
                        audioBlast.play();
                        rocks[i].parentElement.removeChild(rocks[i]);
                        setTimeout(() => {
                            blast.parentElement.removeChild(blast);
                        }, 1000);
                        gameScore++;
                        let baseScore = JSON.parse(localStorage.getItem('results'));
                        baseScore[results.length - 1].userScore = gameScore;
                        localStorage.setItem('results', JSON.stringify(baseScore));
                        hitsCounterTop.textContent = gameScore + '%';
                        hitsCounterTop.classList.add('hits-dawn');
                        setTimeout(() => {
                            hitsCounterTop.classList.add('dusk');
                            hitsCounterTop.classList.remove('hits-dawn');
                            setTimeout(() => {
                                hitsCounterTop.classList.remove('dusk');
                            }, 1500);
                        }, 500);
                    };
                };
            };
    }, 0);
}

// rocketHit();

const moveEarth = () => {
    setInterval(() => {
        if(missScore >= 10) {
            rocksCount = 0;
            return;
        };
        document.querySelector('.planet').style.width = (200 - (rocksCount / 2)) + '%';
    }, 1000);
};

// moveEarth();

const stopGame = () => {
    clearInterval(interval);
    tagUl.textContent = '';
    createResultsList();
    let stoneSlide = new Audio(`assets/sounds/stone-sliding.mp3`);
    gameCard.classList.remove('game-card-hide');
    asteroidsFloor.classList.remove('asteroids-floor-launch');
    stoneSlide.play();
    setTimeout(() => {
        audioIntro.play();
        document.querySelector('.hits-counter').classList.remove('opacity');
        document.querySelector('.miss-counter').classList.remove('opacity');
        planet.classList.remove('planet-launch');
        ship.classList.add('ship-menu');
        ship.style.left = '50%';
        speedFall = 20;
    }, 100);
};

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