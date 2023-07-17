/**
 * Sort the items in the given list.
 * 
 * @param {boolean} ascending Should the items be sorted in ascending or descending order?
 * @param {string} sortBy Can be "title", "description", or "status"
 * @param {TodoListItem[]} items to be sorted. Each element of the list contains a "title" (string), an optional "description" (string or undefined) and a numerical status.
 */
function sortItems(ascending, sortBy, items) {
  // TODO Implement a sorting function
  function getValueBySortKey(item, sortBy) {
    if (sortBy === 'title') {
      return item.title.toLowerCase();
    } else if (sortBy === 'description') {
      return item.description ? item.description.toLowerCase() : '';
    } else if (sortBy === 'status') {
      return item.status;
    }
  }

  items.sort((item1, item2) => {
    const value1 = getValueBySortKey(item1, sortBy);
    const value2 = getValueBySortKey(item2, sortBy);

    if (value1 < value2) {
      return ascending ? -1 : 1;
    } else if (value1 > value2) {
      return ascending ? 1 : -1;
    } else {
      // Handle cases where two items seem to be equal
      // For example, when sorting by status
      return 0;
    }
  });
}

export { sortItems };
