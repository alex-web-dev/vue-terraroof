import { reactive } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useCategories = defineStore('categories', () => {
  const categories = reactive([
    {
      id: 1,
      parentId: 0,
      name: 'Керамическая черепица'
    },
    {
      id: 2,
      parentId: 1,
      name: 'Braas'
    },
    {
      id: 3,
      parentId: 1,
      name: 'Roben'
    },
    {
      id: 4,
      parentId: 0,
      name: 'Композитная черепица'
    },
    {
      id: 5,
      parentId: 4,
      name: 'Metrotile'
    },
    {
      id: 6,
      parentId: 4,
      name: 'QueenTile'
    },
    {
      id: 7,
      parentId: 0,
      name: 'Гибкая (битумная) черепица'
    },
    {
      id: 8,
      parentId: 7,
      name: 'CertainTeed'
    },
    {
      id: 9,
      parentId: 7,
      name: 'Gaf'
    },
    {
      id: 10,
      parentId: 0,
      name: 'Металлочерепица'
    },
    {
      id: 11,
      parentId: 10,
      name: 'Aquasystem'
    },
    {
      id: 12,
      parentId: 0,
      name: 'Медная кровля'
    },
    {
      id: 13,
      parentId: 12,
      name: 'Haussman'
    },
    {
      id: 14,
      parentId: 0,
      name: 'Сланцевая кровля'
    },
    {
      id: 15,
      parentId: 14,
      name: 'CUPA'
    }
  ]);

  function getCategoriesTree() {
    const map = {};
    const roots = [];

    for (let i = 0; i < categories.length; i++) {
      map[categories[i].id] = i;
      categories[i].children = [];
    }

    let node;
    for (let i = 0; i < categories.length; i++) {
      node = categories[i];
      if (node.parentId !== 0) {
        categories[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }

    return roots;
  }

  function getCategory(id) {
    return categories.find((category) => category.id === id);
  }

  return { categories, getCategoriesTree, getCategory };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategories, import.meta.hot));
}
