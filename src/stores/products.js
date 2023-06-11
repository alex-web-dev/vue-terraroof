import { reactive } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useProducts = defineStore('products', () => {
  const products = reactive([
    {
      id: 1,
      category_id: 2,
      img: 'products/1.jpg',
      name: 'Галлеан',
      text: 'Модель Галлеан поставляется не с немецкого производства, а с французского завода компаний BRAAS. Основным отличием является ее высокий средиземноморский профиль, античное покрытие.',
      priceOld: 17500,
      price: 15200,
      recommendPercent: 95,
      ordersCount: 10,
      tags: [{ type: 'sale', text: 'акция' }],
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    },
    {
      id: 2,
      category_id: 3,
      img: 'products/2.jpg',
      name: 'Коллекция Bari',
      text: 'Черепица Ребен Бари, обладающая уникальными природными характеристиками, соединила в себе все четыре стихии – воду, землю, воздух и огонь',
      priceOld: 18400,
      price: 16700,
      recommendPercent: 92,
      ordersCount: 12,
      tags: [{ type: 'sale', text: 'акция' }],
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    },
    {
      id: 3,
      category_id: 5,
      img: 'products/3.jpg',
      name: 'Metrotile',
      text: 'Композитная черепица Metrotile – кровельный материал, ставший настоящей классикой среди архитекторов и владельцев домов в Новой  Зеландии. Metrotile позволяет реализовать самые смелые проекты устройства кровли.',
      price: 11200,
      recommendPercent: 96,
      ordersCount: 22,
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    },
    {
      id: 4,
      category_id: 6,
      img: 'products/4.jpg',
      name: 'Queentile Shake',
      text: 'Вы создадите особую элегантность и уникальную привлекательность дома, а имитация структуры дерева и выдержанные тона подчеркнут образ многовековой истории.',
      price: 14500,
      recommendPercent: 97,
      ordersCount: 27,
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    },
    {
      id: 5,
      category_id: 8,
      img: 'products/5.jpg',
      name: 'Belmont',
      text: 'Линия гибкой черепицы Belmont от компании CertainTeed это многослойная конструкция из смешанных цветов – ярких пятен и контрастных теней.',
      priceOld: 18600,
      price: 15900,
      recommendPercent: 94,
      ordersCount: 18,
      tags: [{ type: 'sale', text: 'акция' }],
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    },
    {
      id: 6,
      category_id: 9,
      img: 'products/6.jpg',
      name: 'Коллекция Camelot II',
      text: 'Кровля данной серии придаст любому дому аристократичности и изысканности. Структура гонтов серии Camelot II великолепно повторяет вид натурального сланца, а угловая подрезка лепестков и линии тени создают максимальный эффект объема кровли.',
      price: 12800,
      recommendPercent: 93,
      ordersCount: 32,
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    },
    {
      id: 7,
      category_id: 11,
      img: 'products/7.jpg',
      name: 'Металлическая модульная черепица Гётеборг',
      text: 'Модульная черепица AQUASYSTEM с профилем Гётеборг имеет симметричный профиль. Прогиб волны — горизонтальный, на гребне выполнены декоративные продольные канавки. Высота ступеньки увеличена до 30 мм, что повышает жесткость кровельного покрытия, делает его более рельефным, объемным.',
      priceOld: 18900,
      price: 16900,
      recommendPercent: 98,
      ordersCount: 37,
      tags: [{ type: 'sale', text: 'акция' }],
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    },
    {
      id: 8,
      category_id: 13,
      img: 'products/8.jpg',
      name: 'Haussman Biber',
      text: 'Ассортимент медной черепицы Haussman насчитывает пять видов различных форм. Пальма первенства безоговорочно отдана старейшему виду классической черепице «Biber» — бобровый хвост.',
      priceOld: 16000,
      price: 14500,
      recommendPercent: 90,
      ordersCount: 16,
      tags: [{ type: 'sale', text: 'акция' }],
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    },
    {
      id: 9,
      category_id: 14,
      img: 'products/9.jpg',
      name: 'Лежачий двойной или одинарный',
      text: 'Фальцевая кровля имеет ребра – горизонтальные закрепляют лежачим методом, а продольные стоячим. Специалисты рекомендуют использовать самоклеящуюся ленту, для более надежной герметизации.',
      price: 13400,
      recommendPercent: 91,
      ordersCount: 15,
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    },
    {
      id: 10,
      category_id: 16,
      img: 'products/10.jpg',
      name: 'Cupa Восьмиугольники',
      text: 'Под понятием декоративных кладок объединяют различные варианты техники кладки, особенная привлекательность и богатство которых достигается, в частности, при облицовке фасадов.',
      priceOld: 13700,
      price: 12500,
      recommendPercent: 93,
      ordersCount: 18,
      tags: [{ type: 'sale', text: 'акция' }],
      details: [
        {
          name: 'Описание',
          content: `
            <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый псевдо-латинский набор
              слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни
              45 года н.э</p>
            <p>Metrotile — это прочный, эстетически привлекательный кровельный материал
              бельгийского производителя. Основой профиля является стальной лист,
              антикоррозийные качества которого обеспечены алюцинковым покрытием.</p>`
        },
        {
          name: 'Характеристики',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla corporis
              necessitatibus sed natus debitis dolore sapiente officiis dolorum, quia
              repellat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aspernatur velit
              minus porro aliquid laboriosam unde placeat molestiae suscipit rem ratione
              adipisci quaerat voluptatum, nisi maxime hic vitae consectetur. Neque!</p>`
        },
        {
          name: 'Документация',
          content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe maxime
              expedita! Ipsam quam voluptates at vitae porro voluptatibus, aliquam aspernatur
              in unde aut aperiam ut quo, optio non magni! Recusandae mollitia quae ex beatae
              perferendis saepe minus, earum explicabo!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempore
              dignissimos exercitationem hic labore. Accusamus recusandae, repellendus fugiat
              eos ut earum incidunt tempore natus odit quisquam eveniet pariatur velit culpa
              quae voluptates, ea error veritatis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, illo!</p>`
        }
      ],
      colors: [
        {
          name: 'charcoal',
          value: 'charcoal',
          preview: 'products/colors/1.jpg',
          mainImg: 'product/1.jpg',
          otherImages: ['product/2.jpg', 'product/3.jpg']
        },
        {
          name: 'coffee',
          value: 'coffee',
          preview: 'products/colors/2.jpg',
          mainImg: 'product/3.jpg',
          otherImages: ['product/1.jpg', 'product/2.jpg']
        },
        {
          name: 'coal black',
          value: 'coal-black',
          preview: 'products/colors/3.jpg',
          mainImg: 'product/2.jpg',
          otherImages: ['product/3.jpg']
        }
      ]
    }
  ]);

  function getProducts(filter) {
    if (!filter) {
      return products;
    }

    if (filter.limit) {
      return products.slice(0, filter.limit);
    }
  }

  function getProduct(id) {
    return products.find((product) => product.id === id);
  }

  return { products, getProducts, getProduct };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot));
}
