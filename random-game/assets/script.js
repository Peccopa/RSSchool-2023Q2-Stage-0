const audioIntro = new Audio(`assets/sounds/intro.mp3`);
const audioOpenCurtain = new Audio(`assets/sounds/open-curtain.mp3`);
const audioClick = new Audio(`assets/sounds/click.mp3`);
const menuClick = new Audio(`assets/sounds/menu-click.mp3`);
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
const currentUser = {};
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const asteroidsFloor = document.querySelector('.asteroids-floor');
const ship = document.querySelector('.ship');
const space = document.querySelector('.space');
const planet = document.querySelector('.planet');
const tagUl = document.querySelector('.results-ul');
let tagLi = '';
let results = [];
let rocksCount = 0;
let speedFall = 20; //20

document.addEventListener("DOMContentLoaded", function() {
    ship.src = 'assets/images/ship-menu.png';
    setTimeout(() => {
        loadBody.style.opacity = 1;
    }, 1000);
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
        // audioOpenCurtain.volume = 0.5;
        audioIntro.play();
        audioOpenCurtain.play();
        menuInput.style.background = '#ccc';
        loginBtn.style.color = '#333';
        menuInput.readOnly = false;
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
        setLocalStorage();
        setTimeout(() => {
            audioOpenCurtain.volume = 0.3;
            audioOpenCurtain.play();
            curtain.classList.add('curtain-opened');
        }, 550);
    } else {
        audioClick.volume = 0.5;
        audioClick.play();
    };
};

const setLocalStorage = () => {
    localStorage.getItem('results') ? results = JSON.parse(localStorage.getItem('results')) : false;
    currentUser['userName'] = String(menuInput.value);
    currentUser['userScore'] = 0;
    results.push(currentUser);
    localStorage.setItem('results', JSON.stringify(results));
    // console.log(results);
    openGameMenu();
};

const openGameMenu = () => {
    setTimeout(() => {
        gameMenu.classList.add('game-menu-opened');
    }, 3000);

};

const createResultsList = () => {
    results = JSON.parse(localStorage.getItem('results'));
    results.sort((a, b) => parseInt(a.userScore) - parseInt(b.userScore));
    results.forEach(element => {
        tagLi = `
        <li>
            <p class="pilot-name">${element.userName}</p>
            <p class="pilot-score">${element.userScore}</p>
        </li>`;
        tagUl.insertAdjacentHTML('beforeend', tagLi);
    });


    console.log(tagUl);
};

createResultsList();

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
    });
};

openMenuResults();

const launchGame = () => {
    menuLaunchBtn.addEventListener('click', () => {
        gameCard.classList.add('game-card-hide');
        ship.classList.add('ship-launch');
        ship.src = 'assets/images/ship.gif';
        asteroidsFloor.classList.add('asteroids-floor-launch');
        planet.classList.add('planet-launch');
        setTimeout(() => {
            ship.classList.remove('ship-launch');
            ship.classList.remove('ship-menu');
            ship.classList.add('ship');
        }, 2000);
        setTimeout(() => {
            generateRocks();
            moveRocks();
            moveShip();
            rocketLaunch();
            rocketHit();
            moveEarth();


        }, 4000);

    });
};

launchGame();

















const rockInterval = 3500;

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
        // rockInterval > 500 ? rockInterval -= 1000 : rockInterval = 500;
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
        speedFall = speedFall + 0.1;
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
                        blast.style.top = Number(rocks[i].style.top.substring(0, rocks[i].style.top.length - 2)) - speedFall + 'px';
                        blast.style.bottom = rocks[i].style.bottom;
                        // console.log(Number(rocks[i].style.top.substring(0, rocks[i].style.top.length - 2)) + speedFall + 'px');
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

const moveEarth = () => {
    setInterval(() => {
        document.querySelector('.planet').style.width = (200 - rocksCount) + '%';
    }, 1000);
};

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