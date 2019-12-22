import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | library/index/list/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:library/index/list/new');
    assert.ok(route);
  });
});