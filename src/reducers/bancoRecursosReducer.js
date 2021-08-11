/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  categoryData: [],
  subCategories: [],
  categories: [],
  loadedURLImage: '',
};

export const bancoRecursosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getFirestoreSubcategories':
      return {
        ...state,
        subCategories: action.payload,
      };
    case 'addFirestoreNewCategoryAcademicResource':
      return {
        ...state,
        categories: action.payload,
      };
    case 'getFirestoreCategoryData':
      return {
        ...state,
        categoryData: action.payload,
      };
    case 'deleteRecursoFirestore': {
      const newCategoryData = state.categoryData.filter((item) => item.id !== action.payload);
      return {
        ...state,
        categoryData: newCategoryData,
      };
    }

    case 'getCategoriesFirestore':
      return {
        ...state,
        categories: action.payload.categories,
        subCategories: action.payload.subCategories,
      };
    case 'uploadImgResource':
      return {
        ...state,
        loadedURLImage: action.payload,
      };
    default:
      return state;
  }
};

export const getCategoryData = (state) => state.bancoRecursos.categoryData;
export const getCategories = (state) => state.bancoRecursos.categories;
export const getSubCategories = (state) => state.bancoRecursos.subCategories;
export const getLoadedURL = (state) => state.bancoRecursos.loadedURLImage;
