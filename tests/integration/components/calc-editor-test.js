import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const template = hbs`<CalcEditor
  @first={{first}}
  @second={{second}}
  @ops={{ops}}
/>`

module('Integration | Component | calc-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with initial values', async function(assert) {
    this.setProperties({
      first: 6,
      second: 3,
      ops: '-',
    });

    await render(template);
    assert.dom('.dum-first').hasValue('6');
    assert.dom('.dum-second').hasValue('3');
    assert.dom('.dum-ops').hasValue('-');
  });

  test('it performs calc', async function (assert) {
    await render(template);

    await fillIn('.dum-first', '10');
    await fillIn('.dum-second', '4');
    await fillIn('.dum-ops', '*');
    await click('.dum-calc-btn');
    
    assert.dom('.dum-ans').hasValue('40');
  });
});
