console.log(`*** Требования к вёрстке ***\n
** Вёрстка валидная +10: **\n - для проверки валидности вёрстки используйте сервис https://validator.w3.org/ Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований.\n
** Вёрстка семантическая +16: **
- в коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше):
<header>, <main>, <footer> +2.
шесть элементов <section> (по количеству секций) +2.
только один заголовок <h1> +2. Если элементов <h1> на странице больше одного, считаем это ошибкой.
пять заголовков <h2> (легко отличимы на верхних границах секций, имеют единый стиль) +2.
один элемент <nav> (панель навигации в хедере) +2.
два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.
семь кнопок <button> +2.
два инпута <input> +2.\n
** Вёрстка соответствует макету +54: **
- Под оценкой за блок или секцию вы найдете более подробное описание задания, если возникнут вопросы по совпадению с макетом. За нарушения в пунктах, которые можно проверить, снимаем по 2 балла помимо других явных ошибок, но не больше общего количества баллов за блок:\n
* блок <header> +8: *
Стараемся, чтобы текст совпадал с макетом. Если есть небольшие отклонения, то главное для нас, чтобы расстояние между элементами меню было одинаковое, 30px.
- Элементы меню работают как якоря. При нажатии на один из них нас перебросит наверх соответствующего раздела.
- Сами элементы меню при наведении (эффект hover) должны быть интерактивными (решайте сами, должны ли они стновиться жирными или подчеркнутыми. Но обязательно курсор должен поменяться на cursor: pointer)
- Расстояние от самого меню до иконки пользователя - 40px. Иконка является отдльным элементом, и не входит в <nav>.
- Текст "Brooklyn Public Library" находится в <h1>.\n
* секция Welcome +4. *\n
* секция About +6: *
- Добавьте все картинки, которые будут использованы в папку с картинками. Даже если отображается всего 3, в папке должны быть все 5.
- Расстояния между кнопками пагинации 10px.
- Обратите внимание, что кнопки хоть и имеют вид круга, но интерактивная область (область нажатия, выделяемая cursor:pointer) должна быть размером +5px в каждую сторону (круглая, квадратная или со скошенными углами - на ваш выбор). Т.е. это будут прозрачные элементы размерами 26x26, внутри которых будут располагаться непосредственно кнопки 16x16.\n
* секция Favorites +8: *
- Интерактивные кнопки дожны иметь структуру input type="radio" + label.
- Добавьбте небольшую область вокруг кнопки и надписи (например, 5px как в примере секции about) для того, чтобы была возможность легче наводить мышку.
- Картинок и описаний - много, для 4х секций. Их стоит добавить в проект. А лучше сразу на страницу, и скрыть с помощью CSS свойств, например display: none;.
- Кнопки "buy" должны быть интерактивными, плавно менять свой цвет при наведении на них, как указано в макете styleguides.
- Кнопка "own" не должна быть интерактивной, не должна нажиматься. И на ней должен присутствовать атрибут disabled.\n
* секция CoffeShop +6. *\n
* секция Contacts +6: *
- Карту можно вставить просто картинкой. Добавлять ее отдельным сервисом не обязательно.
- Везде, где в тексте встречаются цифры в виде телефонного номера, это должны быть ссылки с типом "tel" и номером.
- Там, где в тексте встречается текст с именем контактного лица, это должна быть ссылка с типом "mailto" и адресом почты (например, AmandaHirst@gmail.com).\n
*секция LibraryCard +8: *
- "Find your Library card" - это должа быть форма с полями input.
- Желательно сделать ограничения в полях input на использование только букв и цифр, а также дефиса. Но это правило проверять не нужно.
- Все 3 кнопки должны быть интерактивными, плавно менять свой цвет при наведении на них, как указано в макете styleguides.
- Хоть иконки из модального окна (Visits, Bonuses, Books) сейчас не нужны будут, можно их добавить в соответствующую папку проекта.\n
* блок <footer> +8: *
- Адрес библиотеки должен быть ссылкой (место на карте, например).
- Иконки соцсетей также должны быть ссылками (можете вставить свои соцсети или любые другие аккаунты этих сервисов).
- Вместо Username должно быть ваше имя, как оно пишется на английском языке и ссылка на GitHub.\n
** Общие требования к верстке +20 **
- для построения сетки используются флексы или гриды (display: flex... или display: grid...) +2.
- при уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2. Для этого должна быть обертка вокруг всей страницы, которая выравнивается по центру. Фон за рамками страницы может быть черным, белым или любого оттенка серого. - Изображение библиотеки в секции Welcome - тянется на всю ширину экрана.
- иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2.
- изображения добавлены в формате .jpg (.jpeg) или .png +2.
- есть favicon +2. В макете иконки нет, поэтому можно сгенерировать самому с помощью сервиса favicon-generator. Иконка должна содержать 3 буквы "BPL" (Brooklyn Public Library)
- плавная прокрутка по якорям +2.
- в футере название ссылки Username заменено и ведет на GitHub студента +2.
- в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2.
- интерактивность элементов согласно макету. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2.
- обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2.
\n
*** Оценка за задание - 100 баллов. ***
___
`);

console.log(`
####Library#2


**Вёрстка соответствует макету. Ширина экрана 768px +26**

*блок header +2*

*секция Welcome +2*

*секция About +4:*
- Обратите внимание на появление новых элементов в виде стрелок и переход на 5 точек вместо 3х.
- Не нужно менять расстояние от картинки до точек, нужно оставить 40px. Оценку не снижаем, если сделано по макету (25px).

*секция Favorites +2*

- Сделать кнопку own, вместо buy для последней книги. Здесь важно будет соблюсти условие, что, какие кнопки находились в состояние "own" на Desktop, те же кнопки в том же состоянии будут и на Tablet. Если условие соблюдено: +2

*секция CoffeShop +4*

- Оценка снижаться не будет, если при наложении текста, не будет совпадать расположение букв, расстояние между символами, начало и конец строки, а так же орфография. Будут оцениваться межстрочный интервал, шрифт и центрирование блока с текстом по общим правилам.

*секция Contacts +4*

*секция LibraryCard +4*

*блок footer + 2*

- Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12
- нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.
- элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.
- элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4. Например, меню в хедере должно преобразоваться в бургер-меню до того, как элементы начнут наезжать друг на друга.
- все что будет происходить на ширине свыше 1440px - не оценивается. Поэтому можно либо растягивать на весь экран, либо оставить центральной колонкой.
- На ширине экрана 768рх реализовано адаптивное меню +12 (Рекомендуется сделать появление бургер-меню на ширине 1024px): Eсли при ширине страницы в 768рх панель навигации не скрыта, а бургер-иконка не появилась (при этом учитывайте "Особенности проверки адаптивности в DevTools"), то ставим 0 за данный пункт, и дальше его не проверяем.

*Иначе:*

- Версия Tablet, отступ иконки юзера от правого края - 105px. Такое же расстояние надо сделать и у открытого меню (сейчас там 92px). Сам крест желательно отцентрировать по поцентральной позиции бургер-иконки. Чтобы при переходе из одного состояния в другое ничего не прыгало. Само меню нужно прижать к правому краю целиком. Если иконка юзера не прыгает (не меняет позиции при открытии меню), независимо от величины отступа: +2
- Цвет выпавшего меню должен совпадать с цветом полоски навигации. Оценка снижаться не будет, если сделано по первому макету (#000000).
- при нажатии на бургер-иконку плавно появляется адаптивное меню +4
- при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +2
- ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2
- размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2

#####Оценка за задание - 50 баллов.

___
`);

console.log(`

####Library #3

######Этап 1: Пользователь не зарегистрирован

***Ограниченная карусель в блоке About***
- Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15
- На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2
- Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2
- Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии. +2
- На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2
- Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2

***Слайдер в блоке Favorites***

- "Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15
- На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие. +2
- Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца. +2
- Во время анимаций высота блока Favorites не должна меняться. +2
- Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites. +2

***До регистрации***

- Нажатие на кнопку Check the card ни к чему не приведёт.

***До авторизации***

- Иконка юзера в хедере отображается в виде силуэта.
- В блоке Favorites все кнопки должны иметь имя Buy, а не Own. +2

######Этап 2: Пользователь на этапе регистрации

***Меню авторизации при нажатии на иконку пользователя***

- Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
- На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2
- То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации. +2
- Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2

***Модальное окно REGISTER***

- Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
- При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password. +2
- При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER. +2
- Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
- При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
- В данном случае, ограничения по полям - все поля должны быть не пустыми. +2
- Пароль должен быть не короче 8 символов. +2
- В поле E-mail должна быть валидация типа email. +2

***Окончание регистрации***

- Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя. +2
- Иконка пользователя меняется на заглавные буквы имени. +2
- Отображение страницы приходит в состояние после авторизации (этап 4). +2
- Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа. +2
- При наличии регистрации, но будучи не авторизованным
Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2
- Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2

######Этап 3: Пользователь на этапе входа в учётную запись после регистрации.

***Модальное окно LOGIN***

- Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
- При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password. +2
- При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN. +2
- Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
- При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
- Для авторизации все поля должны быть не пустыми. +2
- Пароль должен быть не короче 8 символов. +2

***Блок Favorites***

-Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN. +2

######Этап 4: Пользователь после входа в учётную запись

***Меню профиля при нажатии на иконку с инициалами пользователя***

- При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2
- Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
- На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2
- То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна. +2
- Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля. +2
- Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер, +2
- Нажатие на кнопку My Profile открывает модальное окно MY PROFILE. +2
- Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2

***Модальное окно MY PROFILE***

- Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
В случае если имя и фамилия слишком длинные и не влазят в блок то должен произойти перенос фамилии на следующую строку.
- Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2
- Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16. +2
- Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена. +2
- Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
- При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2

***Блок Favorites***

- При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD. +2
- При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле. +2
- Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен +2

***Модальное окно BUY A LIBRARY CARD***

- Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще. +2
- Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми. +2
- Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет. +2
Expiration code содержит 2 поля с ограничением в 2 цифры. +2
- CVC должен содержать 3 цифры. +2
- После удачного нажатия на кнопку Buy, окно закрывается, и больше мы к нему не возвращаемся.

***Блок Digital Library Cards***

- При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account. +2

####Оценка за задание - 200 баллов.

___

`);

