import { HeaderItemType, ThunkActionBase } from "../types";
import { setAppDataAC, setDataAC } from "./ActionsCreator";

const getCategories = () =>
  new Promise<HeaderItemType[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 10,
          name: "Компьютеры",
          type: "group",
          items: [
            {
              id: 12,
              name: "Системные блоки",
              type: "group",
              items: [
                { id: 50, name: "Игровые", type: "item" },
                { id: 51, name: "Офисные", type: "item" }
              ]
            },
            { id: 13, name: "Моноблоки", type: "item" },
            {
              id: 14,
              name: "Ноутбуки",
              type: "group",
              items: [
                { id: 60, name: "Игровые", type: "item" },
                { id: 61, name: "Офисные", type: "item" }
              ]
            }
          ]
        },
        {
          id: 20,
          name: "Комплектующие",
          type: "group",
          items: [
            { id: 21, name: "Процессоры", type: "item" },
            { id: 22, name: "Материнские платы", type: "item" },
            { id: 23, name: "Оперативная память", type: "item" }
          ]
        }
      ]);
    }, 1000);
  });

export const loadingData = (): ThunkActionBase => async (
  dispatch,
  getState
) => {
  try {
    dispatch(setAppDataAC("loading"));
    const responce = await getCategories();
    dispatch(setDataAC(responce));
    dispatch(setAppDataAC("ready"));
  } catch (error) {
    dispatch(setAppDataAC("error"));
  }
};
