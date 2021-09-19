/* eslint-disable no-undef */
import { getNewTeam } from './components/utls/getNewTeam';
import { sanFranciscoGiants } from './unitTestData';

test('the data is peanut butter', () => getNewTeam('san_francisco_giants').then((data) => {
  expect(data).toStrictEqual(sanFranciscoGiants);
}));
