import {StoreType} from "./types";
import vk_logo from '../assets/imgs/vk_logo.png'
import youtool_logo from '../assets/imgs/youtool_logo.png'
import author24_logo from '../assets/imgs/author24_logo.png'
import sletat_logo from '../assets/imgs/sletat_logo.png'
import ewa_logo from '../assets/imgs/ewa_logo.png'
import aeroclub_logo from '../assets/imgs/aeroclub_logo.png'




export const store: StoreType = {
    init: {
        contactLink: '#',
        personalDataLink: '#',
        privacyPolicyLink: '#',
        footerContactNumber: '+7(777)-777-77-77',
        footerContactEmail: 'lifetech@mail.ru',
        footerSubmitApplicationLink: '#'
    },
    partners: [
        {src: vk_logo, width:'162px', height: '28px'},
        {src: youtool_logo, width: '97px', height: '29px'},
        {src: author24_logo, width: '126px', height: '32px'},
        {src: sletat_logo, width: '110px', height: '32px'},
        {src: ewa_logo, width: '64px', height: '64px'},
        {src: aeroclub_logo, width: '80px', height: '32px'},
    ],
    advantages: [
        {title: 'Делаем как для себя', message: 'Наши сотрудники работают над продуктами нашей экосистемы и проверенными временем. Мы ценим наше имя и для внешних проектов выбираем лучших исполнителей.'},
        {title: 'Много что умеем и знаем', message: 'Широкий профиль услуг дает возможность закрывать разные области проекта, как на техническом, так или на бизнесовом уровнях.'},
        {title: 'Беремся за сложные кейсы', message: 'Мы имеем опыт работы со сложными проектами, в том числе международными: мы резиденты Skolkovo и входим в топ подрядчиков для VK.'},
        {title: 'Лучшие для лучших', message: 'Для решения сложных задач у нас есть парт-тайм специалисты из топ компаний: Яндекс, VK, Wildberries, Т-Банк и другие.'},
        {title: 'Идеальная цена', message: 'Наши маркетинговые и операционные расходы минимальны, поэтому для вас у нас всегда лучшие цены на рынке.'},
        {title: 'Наша главная фишка', message: 'Это продуктовая экспертиза внутри команды. Мы понимаем, что вы хотите получить и предлагаем вам лучшие решение не только технические, но и бизнесовые.'}
    ],
    technologies: [
        {
            name: 'Front—\nend',
            description: 'Мы создаем интерфейсы, которые привлекают пользователей, обеспечивают удобство взаимодействия и быстрый доступ к функциям. Используем современные технологии, такие как',
            tools: ['ReactJS', 'Next', 'Nuxt', 'Vue','Angular', 'TypeScript', 'Dart','Flutter']
        },
        {
            name: 'Back—\nend',
            description: 'Мы создаем надежные и масштабируемые серверные системы, обеспечивающие бесперебойную работу ваших сервисов и приложений. Работаем с технологиями',
            tools: ['Flask', 'Php', 'Django', 'Node.js', 'GO', 'C#', 'C++', 'Java']
        },
        {
            name: 'Продуктовый\nподход',
            description: 'В работе над проектами мы используем продуктовый подход, идем от проблем пользователей, опираемся на глубокое понимание продукта и его жизненного цикла. Также итеративно тестируем гипотезы и добиваемся лучшего результата.',
            tools: []
        }
    ],
    cases: [
        {
            title: 'KOLITKA',
            tools: ['C++', 'Python'],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'KOLITKA представляет собой онлайн-диагностическую платформу, предназначенную для мониторинга и контроля побочных эффектов, возникающих при применении лекарственных препаратов. Сервис позволяет пользователям отслеживать реакции на медикаменты и вносить изменения в терапию в зависимости от полученных данных о побочных эффектах.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Пользователи могут вводить информацию о своих симптомах и получаемых препаратах, после чего система анализирует данные и предоставляет рекомендации по изменению терапии. Это позволяет врачам и пациентам более эффективно реагировать на нежелательные эффекты, обеспечивая безопасность и эффективность лечения.',
                    year: 2024,
                    img: ''
                }
            ]
        },
        {
            title: 'AFINA',
            tools: ['Flutter', 'Dart IOS', 'DartSDK'],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'Мобильное приложение AFINA представляет собой тренажер для развития памяти, специально разработанный для подготовки студентов-медиков к экзаменам. Оно предлагает пользователям интерактивные уроки и упражнения, которые помогают улучшить запоминание и усвоение учебного материала.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'На изображении показан экран приветствия, где пользователи могут начать обучение с короткого видеоурока, что делает процесс обучения более увлекательным и доступным.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Приложение разработано с использованием Flutter и Dart, что обеспечивает высокую производительность на платформах iOS. Период разработки составил 5 месяцев, что позволило создать качественный продукт для студентов.\n',
                    year: 2024,
                    img: ''
                }
            ]
        },
        {
            title: 'WELLpp',
            tools: ['Flutter', 'Dart IOS', "Dart SDK", "Amazon", "Firebase", "C++"],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'WELLapp — это мобильное приложение, предназначенное для онлайн экспертизы и консультаций с врачами-урологами и урологами-экспертами. Платформа предоставляет пользователям возможность получать профессиональные медицинские советы и рекомендации, не выходя из дома.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'На изображении представлен экран, где пользователи могут выбрать врача-уролога для консультации, что делает процесс поиска специалиста удобным и быстрым.',
                    year: 2024,
                    img: ''
                }
            ]
        },
        {
            title: 'MOZG',
            tools: ['Flutter', 'Dart IOS', 'DartSDK'],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'MOZG — это мобильное приложение, разработанное для подготовки школьников к экзаменам, таким как ЕГЭ. Приложение предлагает пользователям доступ к урокам по мнемотехнике, что помогает улучшить способности запоминания и усвоения учебного материала.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Приложение разработано с использованием Flutter и Dart для кроссплатформенной совместимости на iOS и Android. Период разработки составил 2 месяца, что позволило быстро создать функциональный прототип.',
                    year: 2024,
                    img: ''
                }
            ]
        },
        {
            title: 'БАД-helper',
            tools: [],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'БАД-helper — это мобильное приложение, предназначенное для автоматизированного подбора биологически активных добавок (БАДов). Приложение помогает пользователям легко находить и выбирать добавки, основываясь на их потребностях и предпочтениях.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'На изображении представлен экран, где пользователи могут просмотреть историю своих выборов, включая информацию о добавках, таких как калий и натрий.\n' +
                        '\n' +
                        'Период разработки составил всего 1 неделю, что позволило быстро реализовать основные функции приложения в рамках участия в всероссийском хакатоне "Цифровой прорыв".\n',
                    year: 2024,
                    img: ''
                }
            ]
        },
        {
            title: 'EWA Zakupki ',
            tools: [],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'Редизайн CRM-системы EWA Zakupki направлен на улучшение пользовательского интерфейса и функционала для более эффективного управления тендерами и закупками. Система предоставляет пользователям удобные инструменты для анализа данных и мониторинга торгов, что значительно упрощает процесс работы с тендерами.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'На изображении представлен новый дизайн главной страницы, где пользователи могут быстро получить доступ к основным функциональным возможностям системы, таким как поиск и управление тендерами.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Изображение демонстрирует раздел с аналитическими данными о динамике торгов, что позволяет пользователям отслеживать сезонные изменения и делать обоснованные решения.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Редизайн системы выполнен с использованием технологий FastAPI и React.js, что обеспечивает высокую производительность и отзывчивость интерфейса. Период разработки составил 2 месяца, что позволило быстро реализовать обновления и улучшения.',
                    year: 2024,
                    img: ''
                },
            ]
        },
        {
            title: 'СдатьФарму',
            tools: ['Flutter', 'Dart IOS', 'DartSDK'],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'Мобильное приложение "Сдать Фарму" предназначено для подготовки студентов и специалистов в области фармакологии к экзаменам. Оно включает в себя интерактивные карточки, которые помогают пользователям изучать вещества медиаторного действия, а также другие категории препаратов. Приложение предлагает удобный интерфейс и доступ к обширной базе знаний.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'На изображении показан экран с карточками, где пользователи могут видеть информацию о 9 веществах медиаторного действия, что позволяет им эффективно изучать материал.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Изображение демонстрирует функционал тренажера, который позволяет пользователям проверять свои знания и готовиться к экзаменам с помощью интерактивных заданий.',
                    year: 2024,
                    img: ''
                }
            ]
        },
        {
            title: 'ScanECG',
            tools: [],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'Mini App ScanECG — это Mini App, разработанный для быстрого анализа плёнок ЭКГ с использованием искусственного интеллекта. Приложение позволяет пользователям получать мгновенные результаты анализа, включая распознавание различных сердечных ритмов и аномалий, таких как синусовый ритм с желудочковой экстрасистолией.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'На изображении показан экран, где пользователи могут видеть результаты анализа ЭКГ, включая описание частой желудочковой экстрасистолии и характеристику измененного комплекса QRS.\n',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'ScanECG включает в себя функции автоматического распознавания ритма, анализ аномалий на ЭКГ и предоставление рекомендаций по дальнейшим действиям. Это делает приложение полезным инструментом для врачей и пациентов, стремящихся к более точной и быстрой диагностике сердечно-сосудистых заболеваний.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Приложение разработано с использованием Python для обработки данных, React.js для создания интерфейса, а также библиотек Pandas и Computer Vision для анализа изображений. Период разработки составил 6 месяцев, что позволило создать высококачественный продукт на уровне TRL7 (Technology Readiness Level).',
                    year: 2024,
                    img: ''
                }
            ]
        },
        {
            title: 'LifeCare',
            tools: [],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'Mini App LifeCare — это приложение, интегрированное в экосистему VK, предназначенное для контроля приема лекарственных препаратов и мониторинга показателей здоровья всех членов семьи. Приложение помогает пользователям отслеживать медикаменты, их дозировки и время приема, что способствует улучшению управления здоровьем.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'На изображении показан экран, где пользователи могут видеть график приема лекарств, включая информацию о парацетамоле и инсулине, что делает процесс управления медикаментами более удобным.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Изображение демонстрирует уведомления о пропущенных дозах, что помогает пользователям не забывать о важности регулярного приема медикаментов.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'LifeCare включает в себя возможность добавления лекарств, настройки напоминаний и отслеживания состояния здоровья, что делает его полезным инструментом для семейного контроля здоровья.\n' +
                        '\n' +
                        'Приложение разработано с использованием React.js для создания пользовательского интерфейса, Python и TypeScript для обработки данных, а также FastAPI для взаимодействия с сервером. Период разработки составил 6 месяцев, что позволило создать высокоэффективный продукт.\n',
                    year: 2024,
                    img: ''
                }
            ]
        },
        // {
        //     title: 'Чат-бот для\tПМ',
        //     tools: ['Flutter', 'Dart IOS', 'DartSDK'],
        //     aboutProjectLink: '#',
        //     infoBlocks: [
        //         {
        //             title: '',
        //             description: 'Чат-бот позволяет генерировать кейсы, максимально похожие на реальные с использованием реальных данных для разного уровня специалиста.',
        //             year: 2024,
        //             img: ''
        //         },
        //         {
        //             title: '',
        //             description: 'В интерфейсе бота можно выбрать сложность кейса, а также ввести ответ и получить понятный и полное описание правильности решения.',
        //             year: 2024,
        //             img: ''
        //         },
        //         {
        //             title: '',
        //             description: 'Бот был реализован при помощи технологий GPTs и Python, что ускорило разработку и позволило добавить персонализации.\n' +
        //                 '\n' +
        //                 'Период разработки составил 4 дня, что позволило создать хорошо работающий MVP.\n',
        //             year: 2024,
        //             img: ''
        //         }
        //     ]
        // },
        {
            title: 'Опрыскиватель для\tПЛА',
            tools: [],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'Опрыскиватель для ПЛА (пилотируемый летательный аппарат) представляет собой уникальное решение, разработанное для эффективного применения в сельском хозяйстве и других отраслях. Это устройство предназначено для автоматизированного опрыскивания, что позволяет значительно повысить продуктивность и снизить затраты на обработку полей.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'На изображении представлена 3D-модель устройства, созданная с использованием CAD-технологий, что позволяет детально проработать все элементы конструкции.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Изображение демонстрирует этапы сборки устройства, подчеркивая важность точности и качества на каждом этапе производства.\n' +
                        '\n' +
                        'Проект использует технологии CAD, CAM и CNC для разработки и производства опрыскивателя. Период разработки составил 8 месяцев, что позволило создать высококачественное и функциональное решение.\n',
                    year: 2024,
                    img: ''
                },

            ]
        },
        {
            title: 'YouTool Fleet\tManagement',
            tools: [],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'YouTool Fleet Management — это система охраны и защиты инструмента, разработанная для автоматизации управления в различных отраслях. Система обеспечивает высокий уровень безопасности и контроля, что позволяет минимизировать риски потери или повреждения.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'На изображении представлен экран управления, где пользователи могут отслеживать статус и местоположение своих инструментов в реальном времени.\n',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: '',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: '',
                    year: 2024,
                    img: ''
                }
            ]
        },
        {
            title: 'Сервис распознавания\tблюд',
            tools: [],
            aboutProjectLink: '#',
            infoBlocks: [
                {
                    title: '',
                    description: 'Сервис позволяет загружать изображения и определять блюда и продукты питания на нем.',
                    year: 2024,
                    img: ''
                },
                {
                    title: '',
                    description: 'Также был интегрирован функционал определения калорий и веса, основываясь на контексте изображения.\n' +
                        '\n' +
                        'Период разработки составил  дня, что позволило создать хорошо работающий MVP.\n',
                    year: 2024,
                    img: ''
                }
            ]
        },
        // {
        //     title: '',
        //     tools: [],
        //     aboutProjectLink: '#',
        //     infoBlocks: [
        //         {
        //             title: '',
        //             description: '',
        //             year: 2024,
        //             img: ''
        //         }
        //     ]
        // }
    ],
    reviews: [
        {
            name: 'Иванов И.И.',
            message: 'Команда LifeTech — это классные профессионалы, очень рад, что обратился к ним. Разработали мобильное приложение, получилось красиво и в сроки.',
            date: '2023',
            srcImg: ''
        },
        {
            name: 'Иванов И.И.',
            message: 'Здорово поработали с командой LifeTech над чат-ассистентом для кафе! Регулярная поддержка в чате, отчеты в Loom и доброжелательная обстановка, то что мне очень понравилось. Спасибо!\n' +
                'Буду обращаться еще!\n',
            date: '2023'
        },
        {
            name: 'Иванов И.И.',
            message: 'Работали с LifeTech на протяжении месяца над веб-сервисом по подбору медперсонала, очень крутой продукт получился по итогу. Ребята идеально поняли что хочется получить по итогу и реализовали это. Дизайн, технологии и бизнесовые советы прям то, что надо.',
            date: '2023'
        }
    ],

    competencies: [
        {
            title: 'Вэб-разработка',
            description: 'Делаем из <span>“Hello, world”</span> полезные сайты и приложения',
            aboutServiceDescription: 'Мы разрабатываем вэб-сервисы и все, что с ними связано: сайты, приложения, внутренние системы, чат-боты и mini-apps.',
            aboutUsImgUrl: '',
            experience: 'Готовы реализовать проекты любой сложности с помощью следующего технологического стэка: <br / > ' +
                '<span>Frontend — React JS, TS, Dart, Flutter</span><br/>' +
                '<span>Backend — Flask, Php, Django, Node JS, GO</span><br/>',
            advantages: 'Предоставляем широкий набор цифровых инструментов для реализации вашего бизнес-проекта в короткие сроки. Наша команда разработает индивидуальное решение, которое обеспечит эффективность и рентабельность вашего проекта. Благодаря гибкому подходу гарантируем высокое качество и быстрое внедрение разработки.',
            stages: [
                {
                    title: "Первый звонок",
                    description: "Определяем цели, объем работы, сроки и стоимость разработки"
                },
                {
                    title: "Milestones",
                    description: "Устанавливаем контрольные точки, чтобы минимизировать риски и завершить проект вовремя"
                },
                {
                    title: "Персональный чат",
                    description: "Здесь мы с командой будем делиться отчетами в Loom и Google Docs"
                },
                {
                    title: "Каждый четверг",
                    description: "А возможно, и пятницу, и любой удобный день недели будем созваниваться, чтобы учесть пожелания и правки"
                },
                {
                    title: "Финиш",
                    description: "У нас есть готовый проект, а у Вашего бизнеса — удобный и полезный для пользователей инструмент"
                }
            ],
            pathLink: 'frontend'
        },//
        {
            title: 'AI Разработка',
            description: 'Пусть о Вашем бизнесе подумает <span>искусственный интеллект</span>',
            aboutServiceDescription: 'Мы предоставляем услуги по внедрению AI-технологий для чат-ботов и бизнес-аналитики — например, метрики сайтов, анализа рабочего времени сотрудников и прогнозирования рисков.',
            aboutUsImgUrl: '',
            experience: 'Наша команда имеет опыт работы с мессенджерами в <span>WhatsApp</span>, <span>Telegram</span>, <span>Discord</span> и использует языки программирования <span>Python</span> и <span>No-code</span>.',
            advantages: 'Богатый багаж с кейсами, которые готовы продемонстрировать во время вводного созвона — уверены,среди них найдем актуальные решения и доработаем под Ваши запросы.',
            stages: [
                {
                    title: "Первое знакомство",
                    description: "Определяем цели, объем работы, сроки и стоимости разработки."
                },
                {
                    title: "Milestones",
                    description: "Устанавливаем контрольные точки, чтобы минимизировать риски и завершить проект вовремя"
                },
                {
                    title: "Коммуникация",
                    description: "Используем персональный чат, Loom и Google Docs для отчетов"
                },
                {
                    title: "У аппарата",
                    description: "Будем созваниваться в удобное время каждую неделю, чтобы показать свои достижения и учесть пожелания"
                },
                {
                    title: "Завершение",
                    description: "Получаем готовый продукт и предоставляем Вашему бизнесу автоматизированное решение, в том числе удобное для пользователей"
                },
            ],
            pathLink: 'ai'
        },//
        {
            title: 'UI-UX',
            description: '<span>Красиво</span> и <span>удобно</span> — потому что можем',
            aboutServiceDescription: 'Создаем функциональные и удобные интерфейсы, которыми легко пользоваться. Наши дизайны не только внешне привлекательны, но и оптимизированы, потому что толку от красивой обертки, если внутри не конфетка, а тяжелый камень',
            aboutUsImgUrl: '',
            experience: 'Мы учитываем результаты метрик и анализируем пользовательский опыт при создании UI-UX решений. Работаем в <span>Adobe Illustrator</span> и <span>Figma</span>.',
            advantages: 'Наши опытные дизайнеры и разработчики в срок создадут оптимальный вариант для Вашего бизнеса. Часть кейсов можно увидеть ниже, еще больше — при знакомстве ',
            stages: [
                {
                    title: 'Устанавливаем контакты',
                    description: 'Определяем цели, объем работы, сроки и стоимость разработки.'
                },
                {
                    title: 'Маркеры',
                    description: 'Устанавливаем контрольные точки, чтобы минимизировать риски и завершить проект вовремя'
                },
                {
                    title: 'Нечего скрывать',
                    description: 'Используем персональный чат, Loom и Google Docs для отчетов'
                },
                {
                    title: 'На проводе',
                    description: 'Давайте созваниваться каждую среду? А мы покажем Вам свои достижения и оперативно примем правки'
                },
                {
                    title: 'Финишная черта',
                    description: 'Получаем готовый продукт и представляем Вашему бизнесу комфортное, удобное для пользователей'
                }
            ],
            pathLink: 'uiux'
        },//
        {
            title: 'Мобильная разработка',
            description: 'Полезное <span>всегда</span> под рукой',
            aboutServiceDescription: 'Разрабатываем как нативные приложения для гибкого пользовательского опыта, так и кроссплатформенные, причем быстро и доступно.',
            aboutUsImgUrl: '',
            experience: 'Помогаем с публикацией в <span>AppStore</span> и <span>Google Play</span>, в том числе оптимизируем для лучшей видимости среди конкурентов во время поиска. С <span>ASO</span> работаем аналогично: оптимизация, выдача, отзывы.',
            advantages: 'Имеет опыт создания корпоративных приложений с как для внутреннего использования, так и для вывода на рынок. Сроки и объем задач определяем индивидуально при первой видеовстрече.',
            stages: [
                {
                    title: 'Устанавливаем контакты',
                    description: 'Сразу определяем цели, объем работы, сроки и стоимость разработки'
                },
                {
                    title: 'Устанавливаем дедлайны',
                    description: 'Контролируем выполнение задач, чтобы минимизировать риски и завершить проект вовремя'
                },
                {
                    title: 'Не прячемся',
                    description: 'Используем персональный чат, Loom и Google Docs для оперативной связи'
                },
                {
                    title: 'Всегда на связи',
                    description: 'Задавайте вопросы и пишите о правках в любое время'
                },
                {
                    title: 'Win!',
                    description: 'Получаем готовое приложение, приятное как для плоских экранчиков, так и для тонких пальчиков'
                }
            ],
            pathLink: 'mobile'
        },//
        {
            title: 'QA',
            description: '<span>Баг</span> не пройдет',
            aboutServiceDescription: 'Мы помогаем следить за качеством в проектах: проверяем работоспособность ПО вручную и автоматически, чтобы протестировать приложение и побыстрее, и побольше.',
            aboutUsImgUrl: '',
            experience: 'Анализируем техническую документацию, оцениваем производительность, проводим функциональные, нагрузочные и интеграционные тесты — чтобы <span>точно</span>.',
            advantages: 'Проверим работоспособность программного обеспечения быстро и со всех сторон, инструментов у нас – море. Укажем на ошибки на разных этапах разработки и улучшим производительность.',
            stages: [
                {
                    title: 'Первая (видео)встреча',
                    description: 'Быстро определим цели, объем работы, сроки и стоимость'
                },
                {
                    title: 'Многоточие (много контрольных точек)',
                    description: 'Устанавливаем сроки, минимизируем сроки'
                },
                {
                    title: 'Современные инструменты',
                    description: 'Используем персональный чат, Loom и Google Docs для отчетов'
                },
                {
                    title: 'Созваниваемся раз в неделю',
                    description: 'Демонстрируем результаты и обсуждаем успехи'
                },
                {
                    title: 'Финишная черта',
                    description: 'Код проверили, процесс работы тоже — можно использовать'
                }
            ],
            pathLink: 'qa'
        },//
        {
            title: 'Чат-боты',
            description: '<span>Выслушает</span>, <span>подскажет</span> и <span>напомнит</span>',
            aboutServiceDescription: 'Предоставляем услуги по разработке чат-ботов, которые выслушают, подскажут и напомнят вам о важных делах.',
            aboutUsImgUrl: '',
            experience: 'Наши виртуальные ассистенты работают на платформах <span>Telegram</span>, <span>Discord</span> и <span>WhatsApp</span>, создаем их с помощью <span>Python</span> и <span>No-code</span>. Наша команда поможет создать эффективные инструменты для общения с клиентами и сотрудниками хоть сутки напролет. Только не говорите боту, что ему не положен отпуск — сам он не спросит, но боимся расстроить:)',
            advantages: 'Пишем боты, которые помогают в решении различных задач — записаться к зубному, получить каталог услуг и напомнить о смене шин. Можем интегрировать с другими сервисами и программами.',
            stages: [
                {
                    title: 'Первый звонок',
                    description: 'Обещаем, ответит не бот:) определяем насколько разговорчив будет бот и сколько времени на него понадобится.'
                },
                {
                    title: 'Контрольные точки',
                    description: 'Устанавливаем контрольные точки, чтобы минимизировать риски и дописать чат-бот воврем'
                },
                {
                    title: 'Работаем открыто',
                    description: 'Используем персональный чат, Loom и Google Docs для отчетов'
                },
                {
                    title: 'Будем на связи',
                    description: 'Учтем пожелания, и бот заговорит'
                },
                {
                    title: 'Финиш',
                    description: 'В чате само подбирается окошко на ноготочки, заказываются цветы и напоминается о следующей записи. Красота да и только!'
                }
            ],
            pathLink: 'bots'
        },//
        {
            title: 'Продуктовый консалтинг',
            description: '<span>Процесс</span>. <span>Консалтинг</span>. <span>Аудит</span>. ',
            aboutServiceDescription: 'Предоставляем продуктовый консалтинг, который поможет выстроить процессы в компании. Проводим аудиты и разрабатываем стратегию продукта.',
            aboutUsImgUrl: '',
            experience: 'В работе анализируем метрики, исследуем рынок, в том числе работаем с  <span>Delivery</span> и <span>Discovery</span>. Строим онлайн-продажи, формируем продуктовую команду и культуру. Также наша команда проводит митапы и стратегические сессии, если нужно комплексное решение для развития Вашего бизнеса — это к нам.',
            advantages: 'Обширный опыт работы в различных отраслях, понимаем специфику даже узких ниш. Также используем современные IT-решения для анализа данных и формирования прогнозов.',
            stages: [
                {
                    title: 'Вводная встреча',
                    description: 'Предлагаем идеи, ставим цели, обсуждаем бюджет'
                },
                {
                    title: 'Планируем',
                    description: 'Устанавливаем контрольные точки, распределяем ресурсы и оцениваем риски'
                },
                {
                    title: 'Открытость',
                    description: 'Используем персональный чат, Loom и Google Docs для отчетов'
                },
                {
                    title: 'На расстоянии касания',
                    description: 'Всегда на связи, чтобы учесть Ваши пожелания'
                },
                {
                    title: 'Финиш',
                    description: 'Приводим результаты, строим прогнозы. Бизнес развивается'
                }
            ],
            pathLink: 'consulting'
        },//
        {
            title: 'IoT',
            description: 'Как на <span>рынке</span>, только в <span>интернете</span>',
            aboutServiceDescription: 'Мы предоставляем полный спектр услуг по разработке и внедрению IoT-решений.',
            aboutUsImgUrl: '',
            experience: 'Наша команда использует передовые технологии, такие как <span>CAD</span>, <span>CAM</span>, <span>CAE</span>, <span>CASE</span>, <span>FEA</span>, <span>MPM</span>, <span>PDM</span> и виртуальное прототипирование, чтобы обеспечить эффективное и надежное функционирование <span>IoT-устройств</span>.',
            advantages: 'Используем передовые технологии для создания и оптимизации IoT-устройств.',
            stages: [
                {
                    title: 'Устанавливаем контакты',
                    description: 'Определяем цели, объем работы и сроки'
                },
                {
                    title: 'Milestones',
                    description: 'Ставим дедлайны, чтобы минимизировать риски и завершить проект вовремя'
                },
                {
                    title: 'Открыто',
                    description: 'Используем персональный чат, Loom и Google Docs для отчетов'
                },
                {
                    title: 'В любое время',
                    description: 'Учитываем ваши предложения и оперативно отвечаем на любые вопросы'
                },
                {
                    title: 'Результаты',
                    description: 'Получаем готовое передовое решение'
                }
            ],
            pathLink: 'iot'
        },//
        {
            title: 'Разработка мини-приложений',
            description: 'Расширяем горизонты <span>VK</span> и <span>TG</span>',
            aboutServiceDescription: 'Создаем mini-apps в VK и Telegram, представляя пользователям полезный сервис, а Вашему бизнесу — еще один инструмент узнаваемости и продвижения.',
            aboutUsImgUrl: '',
            experience: 'Удобно, потому что не нужно скачивать дополнительное <span>ПО</span> — сервис в кармане, и им можно воспользоваться в любом месте.',
            advantages: 'Победили в VK Fresh Code 2022 и готовы идти дальше. Можете посмотреть кейсы своими глазами: (скрины мини-приложений)\n',
            stages: [
                {
                    title: 'Вводный созвон',
                    description: 'Определяем цели, объем работы и сроки, чтобы мини-апп был готов вовремя'
                },
                {
                    title: 'Milestones',
                    description: 'Устанавливаем контрольные точки, чтобы сократить риски и завершить проект в срок'
                },
                {
                    title: 'Расскажем и покажем',
                    description: 'В процессе работы используем персональный чат, Loom и Google Docs для отчетов'
                },
                {
                    title: 'Всегда',
                    description: 'Пишите нам в любое время — будем рады учесть ваши предложения и ответить на вопросы'
                },
                {
                    title: 'Готово',
                    description: 'Ваш клиент уже использует сервис, не выходя из VK — удобно'
                }
            ],
            pathLink: 'miniapps'
        }//
    ],

    services: [
        {title: "AI - Решения"},
        {title: "UX/UI"},
        {title: "Моб. разработка"},
        {title: "Mini-app разработка"},
        {title: "Чат-боты"},
    ],
    products: [
        {title: "Продуктовый консалтинг"},
        {title: "IoT - решения"},
        {title: "QA"},
    ],

    footer: [
        {
            title: 'Навигация',
            links: [
                {title: 'Отзывы', link: 'link.local+#review'},
                {title: 'Преимущества', link: 'link.local+#advantages'},
                {title: 'Компетенции', link: 'link.local+#competencies'},
                {title: 'Кейсы', link: 'link.local+#cases'}
            ]
        },
    ],
}
