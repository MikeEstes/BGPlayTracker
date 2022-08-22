export interface IBoardGame {
  name: string;
  yearpublished: string;
}

export interface IBoardGameSearchResponse {
  data: IBoardGame[];
}
