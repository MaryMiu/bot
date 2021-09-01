import BotUI from 'botui';
import {
  Poetry
} from './const';

const botui = new BotUI('my-botui-app');
const choice = {
  car: null,
  alkohol: null,
  woman: null,
};

let congratulations = [{
  text: 'Мужчине',
  value: 'MAN'
}, {
  text: 'Коллеге',
  value: 'COLLEAGUE'
}, {
  text: 'Программисту',
  value: 'PROGRAMMER'
}, {
  text: 'Начальнику',
  value: 'CHIEF'
}];

botui.message.add({
  content: 'Дорогой Саша!'
}).then(function () {
  return botui.message.add({
    delay: 2000,
    content: 'В этот замечательный день хочу поздравить тебя с Днём Рождения! 🥳'
  });
}).then(function () {
  return botui.message.add({
    delay: 2000,
    content: 'Но так как сегодня мало времени, мне нужна твоя помощь'
  });
}).then(function () {
  return botui.message.add({
    delay: 2000,
    content: 'Оформим открытку твоей мечты?'
  });
}).then(function () {
  return botui.action.button({
    delay: 2000,
    action: [{
      text: 'Да, давай',
      value: 'yes'
    }, {
      text: 'Нет, сразу поздравляй',
      value: 'no'
    }]
  });
}).then(function (res) {
  if (res.value === 'yes') {
    card();
  }
  if (res.value === 'no') {
    poetry();
  }
});

const card = function () {
  botui.message.add({
    delay: 2000,
    content: 'Сначала выбери машину'
  }).then(function () {
    return botui.action.button({
      delay: 2000,
      action: [{
        text: 'mercedes',
        value: 'mercedes'
      }, {
        text: 'bmw',
        value: 'bmw'
      }, {
        text: 'audi',
        value: 'audi'
      }]
    });
  }).then(function (res) {
    choice.car = res.value;

    const container = document.querySelector('.board__car');
    const car = document.createElement('img');
    car.src = `img/${res.value}.png`;
    container.appendChild(car);

    return botui.message.add({
      delay: 2000,
      content: `Отлично. Теперь добавим девочку. Выбери:`
    });
  }).then(function () {
    return botui.action.button({
      delay: 2000,
      action: [{
        text: 'Блондинка',
        value: 'blonde'
      }, {
        text: 'Брюнетка',
        value: 'brunette'
      }]
    });
  }).then(function (res) {
    choice.woman = res.value;

    const container = document.querySelector('.board__woman');
    const image = document.createElement('img');
    image.src = `img/${res.value}.png`;
    container.appendChild(image);

    return botui.message.add({
      delay: 2000,
      content: `Ок. Осталось добавить бухлишко`
    });
  }).then(function () {
    return botui.action.button({
      delay: 2000,
      action: [{
        text: 'Пиво',
        value: 'beer'
      }, {
        text: 'Вино',
        value: 'wine'
      }, {
        text: 'Виски',
        value: 'whiskey'
      }]
    });
  }).then(function (res) {
    choice.alkohol = res.value;

    const container = document.querySelector('.board__alkohol');
    const image = document.createElement('img');
    image.src = `img/${res.value}.png`;
    container.appendChild(image);

    return botui.message.add({
      delay: 2000,
      content: `Прекрасно! Открытка мечты готова, можно читать поздравления.`
    });
  }).then(poetry);
};

const poetry = function () {
  botui.message.add({
      delay: 2000,
      content: 'Тут есть такие поздравления'
    })
    .then(function () {
      return botui.action.button({
        delay: 2000,
        action: congratulations
      });
    }).then(function (res) {
      let text = '';

      switch (res.value) {
        case 'MAN':
          text = Poetry.MAN;
          removeObjFromArray(congratulations, 'MAN');
          break;
        case 'COLLEAGUE':
          text = Poetry.COLLEAGUE;
          removeObjFromArray(congratulations, 'COLLEAGUE');
          break;
        case 'PROGRAMMER':
          text = Poetry.PROGRAMMER;
          setTimeout(() => {
            alert('Саша, с Днём Рождения!');
          }, 1000);
          removeObjFromArray(congratulations, 'PROGRAMMER');
          break;
        case 'CHIEF':
          text = Poetry.CHIEF;
          removeObjFromArray(congratulations, 'CHIEF');
          break;

        default:
          break;
      }

      const container = document.querySelector('.board__text');
      container.innerHTML = text;


    }).then(function () {
      if (congratulations.length > 0) {
        poetry();
      } else {
        end();
      }
    });
};

const end = function () {
  botui.message.add({
    delay: 2000,
    content: `Мои поздравления!`
  });
};


function removeObjFromArray(array, type) {
  const current = array.find((it) => it.value === type);
  const indx = array.indexOf(current);
  array.splice(indx, 1);
  return array;
}
