import VueSelector from 'testcafe-vue-selectors';
import { baseUrl } from '../config';
import registerVue from '../hooks/registerVue';

// Test configuration
const fixtureTitle = 'Title component functional test';
const pageUrl = `${baseUrl}/`;

// Fixture definition
fixture(fixtureTitle)
  .page(pageUrl)
  .beforeEach(registerVue);

// Test: Grab Example component and test it
test('Grab Title component', async (t) => {
  const Example = VueSelector('example');

  await t
    // Expect Example component to be found
    .expect(Example)
    .ok()
    // Expect Example component to have property 'bold' set to true
    .expect(Example.getVue(({ props }) => props.bold))
    .eql(true)
    // Expect Example component to have innerText 'This is example component!'
    .expect(Example.child('span').innerText)
    .eql('This is example component!')
    // Click button to hide text
    .click(Example.child('button'))
    // Expect Example component to hide innerText
    .expect(Example.child('span').innerText)
    .eql('')
    // Click button to show again text
    .click(Example.child('button'))
    // Expect Example component to show innerText
    .expect(Example.child('span').innerText)
    .eql('This is example component!');

  await t.wait(60000);
});
