import { INIT_APP } from '../types';
import { bookmarkType } from '../../bookmarks/actions';

type dataAppType = {
  bookmarks: {
    [key: string]: bookmarkType,
  },
  ids: string[],
};

export type initAppActionType = {
  type: typeof INIT_APP,
};

export const initApp = (): initAppActionType => ({
  type: INIT_APP,
});
