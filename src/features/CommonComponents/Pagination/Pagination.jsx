import styles from './Pagination.module.css';

function Pagination(props) {
  /**
  *  Виджет для листания страниц многостраничных данных.
  *
  *  @param {Number} totalPages Общее количество страниц
  *  @param {Number} currentPage Номер текущей страницы
  *  @callback onClickFunction функция, срабатывающая
  *                                на событие onClick
  */

  /** @type {onClickFunction} */

  const { totalPages, currentPage, onClickFunction } = props;

  let i = 1;
  const array = [];
  for (i = 1; i <= totalPages; i ++) {
    array.push(i);
  };

  const handleClick = (item) => {
    if (item !== currentPage) {
      onClickFunction(item);
    };
  };

  return (
    <ul className={styles.wrapper}>
      {
        array.map((item) => {
          return <li key={item} 
                     className={ item === currentPage ? styles.current_page : styles.page }
                     onClick={() => handleClick(item)}>
            <p className={styles.page_number}>{ item }</p>
          </li>
        })
      }
    </ul>
  )
};

Pagination.defaultProps = {
  totalPages: 10,
  currentPage: 1,
  onClickFunction: () => {}
};

export default Pagination;
