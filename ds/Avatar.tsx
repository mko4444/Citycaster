export function Avatar({
  profileImage,
  size = 18,
  style,
}: {
  profileImage: string;
  size?: number;
  style?: any;
}) {
  return (
    <div
      className="col-c-c"
      style={{
        backgroundColor: "rgba(0,0,0,.1)",
        backgroundImage: `url(${profileImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: size,
        width: size,
        borderRadius: 100,
        flex: "none",
        ...style,
      }}
    />
  );
}
