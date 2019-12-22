import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click, pauseTest } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const template = hbs`<CalcContainer/>`;

module('Integration | Component | calc-container', function(hooks) {
  setupRenderingTest(hooks);

  test('it performs end to end calculation', async function(assert) {

    await render(template);

    await pauseTest();

    await fillIn('.dum-first', '10');
    await fillIn('.dum-second', '4');
    await fillIn('.dum-ops', '*');
    await click('.dum-calc-btn');

    assert.dom('.dum-ans').hasValue('40');
    assert.dom('.dum-first-container').exists();
    assert.dom('.dum-second-container').exists();
    assert.dom('.dum-ans-container').exists();
    assert.dom('.dum-first-container > .dum-first').hasText('10');
    assert.dom('.dum-second-container > .dum-second').hasText('4');
    assert.dom('.dum-ans-container > .dum-ans').hasText('40');
  });
});
