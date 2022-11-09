import styles from "./Order.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Order() {
  return (
    <div className={cx("burger")}>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <div className={cx("sanwich")}></div>
          <div className={cx("salad")}>Salad</div>
          <div className={cx("bacon")}>Bacon</div>
          <div className={cx("cheese")}>Cheese</div>
          <div className={cx("meat")}>Meat</div>
          <div className={cx("sanwich")}></div>
        </div>
      </div>
      <div className={cx("")}></div>
    </div>
  );
}

export default Order;
