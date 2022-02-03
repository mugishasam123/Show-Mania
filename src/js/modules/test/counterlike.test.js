/**
 * @jest-environment jsdom
 */

import allItemsCounter from '../mock/counterlike.js';

test('should have 9 items', () => {
  const itemsArr = [{
    item_id: '50625',
  }, {
    item_id: '14012',
  }, {
    item_id: '65494',
  }, {
    item_id: '46881',
  }, {
    item_id: '1',
  }, {
    item_id: '12',
  }, {
    item_id: '32',
  }, {
    item_id: '67',
  }, {
    item_id: '24734',
  },
  ];
  expect(allItemsCounter(itemsArr)).toBe(9);
});

test('should have 0 items', () => {
  const itemsArr = null;
  expect(allItemsCounter(itemsArr)).toBe(0);
});