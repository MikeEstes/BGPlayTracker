import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import Toast from 'react-native-toast-message';
import { IBoardGame, IBoardGameSearchResponse } from 'src/common/types';
import log from 'src/utils/logger';

import { client } from 'src/api/client';

const endpoint = '/search?search=';

const options = {
  allowBooleanAttributes: true,
  ignoreAttributes: true,
};
const parser = new XMLParser(options);

/* export const search: (searchTerm: string) => Promise<IBoardGame[]> = async (
  // eslint-disable-next-line prettier/prettier
  searchTerm: string,
) => {
  let obj: IBoardGame[] = [];
  client
    .get(endpoint + searchTerm)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log('response: ' + JSON.stringify(response, null, 2));

      obj = parser.parse(response.data);
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
}; */

export async function search(
  searchTerm: string
): Promise<IBoardGameSearchResponse | string> {
  try {
    const { data } = await client.get<IBoardGameSearchResponse>(
      endpoint + searchTerm,
    );

    log(JSON.stringify(data, null, 4));

    return parser.parse(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      Toast.show({
        text1: error.message,
        text2: 'An error has occured.',
        type: 'error',
      });
      return error.message;
    } else {
      Toast.show({
        text1: 'An unexpected error has occured.',
        type: 'error',
      });
      return 'An unexpected error occured';
    }
  }
}
