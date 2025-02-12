import { FC } from "react";

interface Props {
  direction: number;
}

const WindDirection: FC<Props> = (props) => {
  const { direction } = props;

  return (
    <div
      role="presentation"
      aria-label={`${direction}deg`}
      style={{ rotate: `${direction - 90}deg`, width: "fit-content" }}
    >
      <span style={{fontSize: "14px"}}>➤</span>
    </div>
  );
};

export { WindDirection };
