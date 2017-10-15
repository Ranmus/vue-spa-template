import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';

fixture `Example tests`
  .page `http://localhost:8080`;

test('Grab Vue component', async t => {
  const Test = await VueSelector('Test');
  console.log(Test);
});
