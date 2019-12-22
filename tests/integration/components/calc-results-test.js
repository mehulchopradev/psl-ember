import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const template = hbs`<CalcResults
  @first={{ first }}
  @second={{ second }}
  @ans={{ ans }}
/>`;

module('Integration | Component | calc-results', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with passed values', async function(assert) {
    this.setProperties({
      first: '8',
      second: '4',
      ans: '12',
    })
    await render(template);

    assert.dom('.dum-first-container').exists();
    assert.dom('.dum-second-container').exists();
    assert.dom('.dum-ans-container').exists();
    assert.dom('.dum-first').hasText('8');
    assert.dom('.dum-second').hasText('4');
    assert.dom('.dum-ans').hasText('12');
  });

  test('it hides/shows elements based on values', async function (assert) {
    await render(template);

    assert.dom('.dum-first-container').doesNotExist();
    assert.dom('.dum-second-container').doesNotExist();
    assert.dom('.dum-ans-container').doesNotExist();

    this.setProperties({
      first: '8',
      second: '4',
    });

    assert.dom('.dum-first-container').exists()
    assert.dom('.dum-second-container').exists()
    assert.dom('.dum-ans-container').doesNotExist();

    this.setProperties({
      ans: '12',
    });

    assert.dom('.dum-first-container').exists()
    assert.dom('.dum-second-container').exists()
    assert.dom('.dum-ans-container').exists();
  })
});
