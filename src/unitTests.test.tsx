import {getNewTeam} from './components/utls/getNewTeam.d';
import {san_francisco_giants} from './unitTestData'

test('the data is peanut butter', () => {
  return getNewTeam('san_francisco_giants').then(data => {
    expect(data).toStrictEqual(san_francisco_giants);
  });
});