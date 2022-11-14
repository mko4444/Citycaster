import { Divider, RegularBtn, search } from "ds";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div style={{ padding: 0, margin: "0 auto", maxWidth: 640 }}>
      <Header />
      <Divider />
      {[
        {
          searchTerm: "sf",
          name: "San Francisco",
          telegram: "https://t.me/+93pjwpNQjqMzYTkx",
        },
        {
          searchTerm: "nyc",
          name: "New York City",
          telegram: "https://t.me/+q1B0AMoQDHAzNzQx",
        },
        {
          searchTerm: "la",
          name: "Los Angeles",
          telegram: "https://t.me/+LDc4k0mqTZI1NzRh",
        },
        {
          searchTerm: "miami",
          name: "Miami",
          telegram: "https://t.me/+2auKIaRNTiMwYTIx",
        },
        {
          searchTerm: "toronto",
          name: "Toronto",
          telegram: "https://t.me/+CflD_nqrkdZjYjEx",
        },
        {
          searchTerm: "london",
          name: "London",
          telegram: "https://t.me/+JYMSOD6lqKUzOWU0",
        },
        {
          searchTerm: "bali",
          name: "Bali",
          telegram: "https://t.me/+HbT9g_vpE_UxMDYx",
        },
        {
          searchTerm: "paris",
          name: "Paris",
          telegram: "https://t.me/+2k4yKNmYXfhlMDQ0",
        },
        {
          searchTerm: "boston",
          name: "Boston",
          telegram: "https://t.me/+yVw2nQgqM0A4YWVh",
        },
        {
          searchTerm: "tel-aviv",
          name: "Tel Aviv",
          telegram: "https://t.me/telavivcasters",
        },
        {
          searchTerm: "berlin",
          name: "Berlin",
          telegram: "https://t.me/+yYtlbqJipuYwZDg0",
        },
      ].map((city: City) => (
        <>
          <City key={city.name} {...city} />
          <Divider key={city.name + "-divider"} />
        </>
      ))}
      <Attribution />
    </div>
  );
}

const Header = () => (
  <div className="row-fs-c" style={{ padding: "20px 20px 12px 20px" }}>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <NextSeo
      title="Citycaster"
      description="Farcast in your city"
      canonical="https://citycaster.xyz"
      openGraph={{
        url: "https://citycaster.xyz",
        title: "Farcast in your city",
        description: "Farcast in your city",
        images: [
          {
            url: "/logo.png",
            width: 800,
            height: 800,
            alt: "Og Image Alt",
            type: "image/png",
          },
          {
            url: "/logo.png",
            width: 800,
            height: 800,
            alt: "Og Image Alt Second",
            type: "image/png",
          },
          { url: "https://www.example.ie/og-image-03.jpg" },
          { url: "https://www.example.ie/og-image-04.jpg" },
        ],
        site_name: "Citycaster",
      }}
    />
    <Image alt="Logo" height={64} width={64} src="/logo.png" style={{ borderRadius: 8 }} />
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
);

const City = ({ name, telegram, directory, events, searchTerm }: City): JSX.Element => (
  <div className="city row-sb-c max-w" style={{ padding: "0 8px 0 20px", userSelect: "none" }}>
    <h2 style={{ fontSize: 18, margin: 0 }}>{name}</h2>
    <div className="row btns">
      {telegram && (
        <Link href={telegram || "/"}>
          <RegularBtn isDisabled={!telegram}>Telegram</RegularBtn>
        </Link>
      )}
      {directory && (
        <Link href={directory || "/"}>
          <RegularBtn isDisabled={!directory}>Directory</RegularBtn>
        </Link>
      )}
      {events && (
        <Link href={events || "/"}>
          <RegularBtn isDisabled={!events}>Events</RegularBtn>
        </Link>
      )}
      {searchTerm && (
        <Link href={`https://searchcaster.xyz/search?text=${searchTerm.toLowerCase().replace(" ", "%20")}`}>
          <RegularBtn isDisabled={!searchTerm} icon={search} />
        </Link>
      )}
    </div>
  </div>
);

const Attribution = () => (
  <Link href="farcaster://profiles/0x98D3535e89DC822f10F2E0Fa945791323648b4eb">
    <RegularBtn style={{ marginLeft: 8 }}>
      <span style={{ marginRight: 4, opacity: 0.5 }}>Built by </span>
      <span style={{ opacity: 0.8 }}>@matthew</span>
    </RegularBtn>
  </Link>
);

type City = {
  name: string;
  telegram?: string;
  directory?: string;
  events?: string;
  searchTerm?: string;
};
