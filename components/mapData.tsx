
interface ParsedCardData {
  cardTitle: string;
  url: string;
  custom_redirect: string;
  page: string;
  text: string;
  category: string;
  rank: string;
  hide: boolean;
  isFree: boolean;
  isTopRated: boolean;
  verified: boolean;
  premium: boolean;
  ImageUrl: string;
  logoUrl: string;
}

export const mapDataToCards = (parsedData: any[]): ParsedCardData[] => {
  return parsedData.slice(1).map(item => ({
    cardTitle: item[0],
    url: item[1],
    custom_redirect: item[2],
    page: item[3],
    text: item[4],
    category: item[5],
    rank: item[6],
    hide: item[7],
    isFree: item[8],
    isTopRated: item[9],
    verified: item[10],
    premium: item[11],
    ImageUrl: item[12],
    logoUrl: item[13]
  }));
};