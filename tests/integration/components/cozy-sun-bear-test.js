import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cozy-sun-bear', 'Integration | Component | cozy sun bear', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cozy-sun-bear}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cozy-sun-bear}}
      template block text
    {{/cozy-sun-bear}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
