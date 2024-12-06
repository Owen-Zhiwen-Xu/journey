import { parseData } from './components/parseData';

//code just to test if parseData works properly
//runs parseData and prints out the results

describe('parseData', () => {
  it('should log the first 3 parsed CSV contents', () => {
    const result = parseData();
    console.log('First 3 parsed items:', result.slice(0,3)); //change to have more/less of the results appear

  })});