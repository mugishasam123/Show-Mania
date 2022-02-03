/**
 * @jest-environment jsdom
*/
import Popup from '../popup.js';

// const commentCount = new Popup().commentCounter();

test('should have 3 comments', () => {
  const comenta = [{
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
  const commentCount = new Popup().commentCounter(comenta);

  expect(commentCount).toBe(3);
});

test('should have 0 comments', () => {
  const comenta = [];
  const commentCount = new Popup().commentCounter(comenta);
  expect(commentCount).toBe(0);
});