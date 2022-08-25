import cn from "classnames";

export function Divider({
  className = "",
  marginWidth = 0,
  style = {},
}: {
  className?: any;
  marginWidth?: number;
  style?: any;
}): JSX.Element {
  return (
    <div
      className={cn([className])}
      style={{
        width: `calc(100% - ${marginWidth * 2}px)`,
        margin: `8px ${marginWidth}px`,
        height: 1,
        background: "rgba(0,0,0,0.1)",
        ...style,
      }}
    />
  );
}
