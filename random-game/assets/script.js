const ship = document.querySelector('.ship');
const space = document.querySelector('.space');

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

const generateRocks = setInterval(() => {
    let rock = document.createElement('div');
    rock.classList.add('rock');
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    rock.style.left = Math.floor(Math.random() * 446) + 'px';
    space.appendChild(rock);
}, 1500);



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