import axios from 'axios';
import { atom, selector } from 'recoil';

export const firstTestAtom = atom({
  default: 'value1',
  key: 'firstTestAtom',
});

const baseUrl = 'https://boardgamegeek.com/xmlapi/collection/sregge';

export const currentUserNameQuery = selector({
  get: async () => {
    const response = axios.get(baseUrl);
    return response;
  },
  key: 'currentUserName',
  // https://boardgamegeek.com/xmlapi/collection/sregge
});
