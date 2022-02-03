const allItemsCounter = (itemsArr) => {
  if (itemsArr) {
    const res = itemsArr.length;
    return res;
  }
  return 0;
};

export default allItemsCounter;