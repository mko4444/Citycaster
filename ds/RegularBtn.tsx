import cn from "classnames";
import { Avatar } from "ds/Avatar";
import { forwardRef } from "react";
import Link from "next/link";

const RegularBtn = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      description = "",
      icon = null,
      onClick = () => {},
      isActive = () => false,
      style = {},
      isDark = false,
      href = "",
      isDisabled = false,
    }: ButtonProps,
    ref
  ): JSX.Element => {
    // Change padding if there's more than just an icon
    const bool = children || description;

    return (
      <Wrapper href={href}>
        <button
          className={cn([
            `ds-RegularBtn bouncy-bg row-${bool ? "fs" : "c"}-c`,
            { active: isActive(), isDark, isDisabled },
            className,
          ])}
          onClick={onClick}
          style={{
            ...buttonStyle,
            padding: bool ? "0 12px" : 0,
            ...style,
          }}
          ref={ref}
        >
          {icon &&
            (icon && (typeof icon !== "string" || icon?.length === 1) ? (
              <div
                className="ds-RegularBtn-icon row-c-c"
                style={{
                  height: 13,
                  width: 13,
                  fontSize: 13,
                  marginRight: bool ? 8 : 0,
                  marginLeft: bool ? -2 : 0,
                }}
              >
                {icon}
              </div>
            ) : (
              <Avatar size={16} style={{ marginLeft: bool ? -4 : 0, marginRight: bool ? 8 : 0 }} profileImage={icon} />
            ))}
          {children && <div className="flex row-fs-c">{children}</div>}
          {description && <span style={spanStyle}>{description}</span>}
        </button>
      </Wrapper>
    );
  }
);

RegularBtn.displayName = "RegularBtn";

export { RegularBtn };

const Wrapper = ({ href = "", children = null }: { href: string; children: any }) =>
  href ? <Link href={href}>{children}</Link> : <>{children}</>;

const buttonStyle = {
  height: 30,
  minWidth: 30,
  padding: "0 12px",
  borderRadius: 100,
  overflow: "hidden",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1,
  cursor: "pointer",
  userSelect: "none",
};

const spanStyle: any = {
  fontSize: "inherit",
  fontWeight: "inherit",
  opacity: 0.5,
};

type ButtonProps = {
  children?: React.ReactNode;
  description?: string;
  className?: any;
  onClick?: () => void;
  isActive?: () => boolean;
  icon?: any;
  style?: any;
  href?: string;
  isDark?: boolean;
  isDisabled?: boolean;
};
