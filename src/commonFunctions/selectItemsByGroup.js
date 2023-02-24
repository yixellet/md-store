function selectItemsByGroup(items, group) {
  /**
   * Фильтрует списки подтипов и способов хранения данных,
   * выбирая те, которые относятся к заданной группе.
   * 
   * @param {Object} items Список фильтруемых параметров 
   *                        (подтипы или способы хранения, запрошенные с сервера)
   * @param {Number} group ID группы
   */

  const result = {};

  Object.values(items).forEach((item) => {
    if (item.group.id === group) {
      result[item.id] = item;
    };
  });

  const firstItemId = Object.keys(result)[0]

  return {result, firstItemId};
};

export default selectItemsByGroup;
