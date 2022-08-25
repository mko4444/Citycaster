import { Divider, RegularBtn } from "ds";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 0, margin: "0 auto", maxWidth: 640 }}>
      <div className="row-fs-c" style={{ padding: "20px 20px 12px 20px" }}>
        <Image
          alt="Logo"
          height={64}
          width={64}
          src="/logo.png"
          style={{ borderRadius: 8 }}
        />
        <div style={{ width: 16 }} />
        <div>
          <h1 style={{ margin: 0, fontSize: 32, marginTop: -5 }}>Citycaster</h1>
          <div style={{ height: 2 }} />
          <label
            style={{
              marginLeft: 1,
              fontWeight: 500,
              opacity: 0.8,
              fontSize: 16,
            }}
          >
            Farcast in your city
          </label>
        </div>
      </div>
      <Divider />
      <City name="San Francisco" telegram="https://t.me/+93pjwpNQjqMzYTkx" />
      <Divider />
      <City name="New York City" telegram="https://t.me/+q1B0AMoQDHAzNzQx" />
      <Divider />
      <Link href="farcaster://profiles/0x98D3535e89DC822f10F2E0Fa945791323648b4eb">
        <RegularBtn style={{ marginLeft: 8 }}>
          <span style={{ marginRight: 4, opacity: 0.5 }}>Built by </span>
          <span style={{ opacity: 0.8 }}>@matthew</span>
        </RegularBtn>
      </Link>
    </div>
  );
}

const City = ({ name, telegram, directory, events }: City): JSX.Element => (
  <div
    className="city row-sb-c max-w"
    style={{ padding: "0 8px 0 20px", userSelect: "none" }}
  >
    <h2 style={{ fontSize: 18, margin: 0 }}>{name}</h2>
    <div className="row btns">
      <Link href={telegram || "/"}>
        <RegularBtn isDisabled={!telegram}>Telegram</RegularBtn>
      </Link>
      <Link href={directory || "/"}>
        <RegularBtn isDisabled={!directory}>Directory</RegularBtn>
      </Link>
      <Link href={events || "/"}>
        <RegularBtn isDisabled={!events}>Events</RegularBtn>
      </Link>
    </div>
  </div>
);

type City = {
  name: string;
  telegram?: string;
  directory?: string;
  events?: string;
};
