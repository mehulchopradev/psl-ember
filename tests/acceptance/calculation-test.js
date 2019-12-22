import { module, test } from 'qunit';
import { visit, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | calculation', function(hooks) {
  setupApplicationTest(hooks);

  test('verify calculation', async function(assert) {
    await visit('/calc');

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
