import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | library/index/list/new', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:library/index/list/new');
    assert.ok(controller);
  });
});
