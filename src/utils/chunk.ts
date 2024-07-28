/* eslint-disable no-param-reassign */

/**
 * Returns array divided n groups.
 * @param array
 * @param chunkSize
 */
const chunk = (array: any[], chunkSize: number) => (
  array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []));

export {
  chunk,
};
