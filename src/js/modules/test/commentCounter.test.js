/**
 * @jest-environment jsdom
*/

import commentCounter from '../mock/commentCounter.js';

test('should have 3 comments', () => {
  const commentArr = [{
    item_id: '94595',
    username: 'samuel mugisha',
    comment: 'great show',
  }, {
    item_id: '94595',
    username: 'yves',
    comment: 'new',
  }, {
    item_id: '94595',
    username: 'divin',
    comment: 'i wish to act in it',
  }];
  expect(commentCounter(commentArr)).toBe('Comments (3) by previous visitors');
});

test('should have 0 comments', () => {
  const commentArr = null;
  expect(commentCounter(commentArr)).toBe('Comments (0) by previous visitors');
});