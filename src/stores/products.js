import { reactive } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useProducts = defineStore('products', () => {
  const products = reactive([
    {
      img: 'products/1.jpg',
      name: 'Черепица Metrotile',
      text: 'Его корни уходят в один фрагмент классической латыни 45 года н.э',
      priceOld: 17500,
      price: 15200,
      tags: [{ type: 'sale', text: 'акция' }]
    },
    {
      img: 'products/2.jpg',
      name: 'Черепица Metrotile',
      text: 'Его корни уходят в один фрагмент классической латыни 45 года н.э',
      priceOld: 16000,
      price: 14500,
      tags: [{ type: 'sale', text: 'акция' }]
    },
    {
      img: 'products/3.jpg',
      name: 'Черепица Metrotile',
      text: 'Его корни уходят в один фрагмент классической латыни 45 года н.э',
      priceOld: 15300,
      price: 14000,
      tags: [{ type: 'sale', text: 'акция' }]
    },
    {
      img: 'products/4.jpg',
      name: 'Черепица Metrotile',
      text: 'Его корни уходят в один фрагмент классической латыни 45 года н.э',
      price: 12500
    },
    {
      img: 'products/5.jpg',
      name: 'Черепица Metrotile',
      text: 'Его корни уходят в один фрагмент классической латыни 45 года н.э',
      price: 13700
    },
    {
      img: 'products/6.jpg',
      name: 'Черепица Metrotile',
      text: 'Его корни уходят в один фрагмент классической латыни 45 года н.э',
      price: 14000
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

  return { products, getProducts };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot));
}
