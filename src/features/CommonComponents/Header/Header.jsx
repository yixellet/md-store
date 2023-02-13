import styles from './Header.module.css';

function Header(props) {
  /**
  *  Заголовок для модального окна.
  *
  *  @param {String} name Название
  */

  return (
    <h1 className={styles.header}>{props.name}</h1>
  )
};

Header.defaultProps = { name: '<header_name>' };

export default Header;
