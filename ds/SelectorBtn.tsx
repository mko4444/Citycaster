import cn from "classnames";

export function SelectorBtn({
  children,
  onClick,
  style,
  isActive,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: any;
  isActive?: boolean;
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={cn(["outline selector", { isActive }])}
      style={{
        ...buttonStyle,
        ...style,
        ...(isActive
          ? {
              color: "white",
              background: "rgba(0,0,0,.8)",
              borderRadius: 5,
            }
          : {}),
      }}
    >
      {children}
    </button>
  );
}

const buttonStyle = {
  color: "rgba(0,0,0,.66)",
  background: "transparent",
  padding: "0 8px",
  lineHeight: 1,
  height: 24,
  fontSize: 14,
  fontWeight: 500,
};
