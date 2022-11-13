const API_BASE = '//api.punkapi.com/v2/';
const RESULTS_PER_PAGE = 10;

export const searchBeer = async (beerName: string, page: number) => {
  const requestURL =
    API_BASE +
    `beers?beer_name=${encodeURI(
      beerName
    )}&page=${page}&per_page=${RESULTS_PER_PAGE}`;

  try {
    const res = await fetch(requestURL);
    return res.json();
  } catch (error: unknown) {
    if (typeof error == 'string') {
      throw new Error(error);
    } else if (error instanceof Error) {
      throw error;
    }
  }
};
