import { XMLParser } from 'fast-xml-parser';
import Toast from 'react-native-toast-message';
import { IBoardGame } from 'src/common/types';
import log from 'src/utils/logger';

import { client } from 'src/api/client';

const endpoint = '/search?search=';

const options = {
  allowBooleanAttributes: true,
  ignoreAttributes: true,
};
const parser = new XMLParser(options);

export const search: (searchTerm: string) => Promise<IBoardGame[]> = async (
  // eslint-disable-next-line prettier/prettier
  searchTerm: string,
) => {
  let obj: IBoardGame[] = [];
  client
    .get(endpoint + searchTerm)
    .then((response) => {
      obj = parser.parse(response.data.boardgames);
      log(obj);
      return obj;
    })
    .catch((error) => {
      // Set global error state here.
      Toast.show({
        text1: error,
        text2: 'An error has occured.',
        type: 'error',
      });
    });
  return obj;
};
