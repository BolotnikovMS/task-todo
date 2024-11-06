import { ITab } from '../../interfaces/tab.interface'

export const dataTabs: ITab[] = [
  { id: 1, name: 'Текущие дела', filter: 'pending' },
  { id: 2, name: 'Все дела', filter: 'all' },
  { id: 3, name: 'Выполненные дела', filter: 'completed' },
  { id: 4, name: 'Корзина', filter: 'deleted' },
]