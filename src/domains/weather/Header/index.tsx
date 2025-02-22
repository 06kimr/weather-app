import dayjs from "dayjs";
import { FC } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import styles from "./index.module.css";

interface Props {
  update_time: string;
}
dayjs.extend(relativeTime);

const Header: FC<Props> = (props) => {
  const { update_time } = props;

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>현재 날씨</h1>
      <span className={styles.update}>업데이트 {dayjs(update_time).fromNow()}</span>
    </header>
  );
};

export { Header };
