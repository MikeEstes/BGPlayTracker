export interface IBoardGame {
  id: number;
  name: string;
  playTime: number;
  rating: string;
  yearPublished: number;
}

export interface IBoardGameSearchResponse {
  data: IBoardGame[];
}
