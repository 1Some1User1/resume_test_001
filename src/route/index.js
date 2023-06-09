// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
// var title = {}

var header = {
  name: {
    firstname: 'Dmitro',
    lastname: 'Batkovich',
  },
  position: 'Junior Fullstack JS Developer',

  salary: '600$ в місяць',

  adress: 'Україна, м. Київ',
}

var footer = {
  social: {
    email: {
      text: 'db@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
//===================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: { title: 'Resume |Summary' },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
		experience in development. Whenever I start to
		work on a new project I learn the domain and try
		to understand the idea of the project. Good team
		player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
		different platforms ( odds ) and sport statistics
		( tournament position, goals etc), analyzing by
		simple mathematics models and preparing
		probability for such events like: money line -
		first win / draw / second win, totals etc.`,
      },
    },

    footer,

    // ↙ сюди вводимо JSON дані
  })
})

router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: { title: 'Resume | Education' },

    header,

    main: {
      education: [
        {
          name: 'Київський національний університет культури і мистецтв',
          id: 1234,
          isEnd: true,
        },
        {
          name: 'Факультет соціології і права КПІ ім. Ігоря Сікорського',
          id: 1531,
          isEnd: true,
        },
        {
          name: 'Київський університет культури',
          id: 3211,
          isEnd: false,
        },
        {
          name: 'Університет економіки та права "КРОК"',
          id: 7890,
          isEnd: false,
        },
        {
          name: 'Міжрегіональна академія управління персоналом',
          id: 1111,
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'Сертифікат 1',
          id: 10001,
        },
        {
          name: 'Сертифікат 2',
          id: 10002,
        },
        {
          name: 'Сертифікат 3',
          id: 10003,
        },
      ],
    },

    footer,

    // ↙ сюди вводимо JSON дані
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: { title: 'Resume | Skills' },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: true,
        },
        {
          name: 'VSCode',
          point: 8,
          isTop: false,
        },
        {
          name: 'GIT',
          point: 10,
          isTop: true,
        },
        {
          name: 'Terminal',
          point: 10,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'ReactJS',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Плавання',
          isMain: true,
        },
        {
          name: 'Велоспорт',
          isMain: true,
        },
        {
          name: 'Рибалка',
          isMain: false,
        },
      ],
    },

    footer,

    // ↙ сюди вводимо JSON дані
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: { title: 'Resume | Work' },

    header,

    main: {
      works: [
        {
          position: 'Junior',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',
              about: 'Some text',
              stack: [
                {
                  name: 'ReactJS',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              award: [
                {
                  name: 'Some text for awards 1',
                },
                {
                  name: 'Some text for awards 2',
                },
              ],
              stackAmount: 1,
              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,

    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
