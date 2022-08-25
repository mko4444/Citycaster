export function Input(props: {
  placeholder: string;
  value: string;
  onChange?: (arg0: any) => void;
  onKeyDown?: (arg0: any) => void;
  onKeyUp?: (arg0: any) => void;
  onKeyPress?: (arg0: any) => void;
  onFocus?: (arg0: any) => void;
  onBlur?: (arg0: any) => void;
}): JSX.Element {
  return (
    <div className="flex row-fs-c ds-Search">
      {search}
      <input {...props} />
    </div>
  );
}

export const search = (
  <svg width="14" height="14" viewBox="0 0 14 14">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.54138 9.26892C3.32483 9.26892 1.66241 7.63323 1.66241 5.45231C1.66241 3.27138 3.32483 1.63569 5.54138 1.63569C7.75793 1.63569 9.42035 3.27138 9.42035 5.45231C9.42035 7.63323 7.75793 9.26892 5.54138 9.26892ZM0 5.45231C0 2.44108 2.48096 0 5.54138 0C8.6018 0 11.0828 2.44108 11.0828 5.45231C11.0828 6.72057 10.6427 7.8877 9.90452 8.8139L13.6312 12.4807C14.0479 12.8907 14.1226 13.4821 13.798 13.8014C13.4734 14.1208 12.8724 14.0473 12.4557 13.6373L8.69447 9.93651C7.79945 10.5469 6.71287 10.9046 5.54138 10.9046C2.48096 10.9046 0 8.46353 0 5.45231Z"
    />
  </svg>
);
