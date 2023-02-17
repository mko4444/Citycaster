import { Divider, RegularBtn, search } from "ds";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import cities from "cities";

export default function Home() {
  return (
    <div style={{ padding: 0, margin: "0 auto", maxWidth: 640 }}>
      <Header />
      <Divider />
      {cities.map((city: CityType) => (
        <div key={city.name}>
          <City {...city} />
          <Divider />
        </div>
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

const City = ({ name, telegram, directory, events, searchTerms }: CityType): JSX.Element => (
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
      {searchTerms && (
        <Link
          href={`https://searchcaster.xyz/search?text=${searchTerms[0]
            .toLowerCase()
            .replace("-", " ")
            .replace(" ", "%20")}`}
        >
          <RegularBtn isDisabled={!searchTerms[0]} icon={search} />
        </Link>
      )}
    </div>
  </div>
);

const Attribution = () => (
  <Link href="https://fcast.me/matthew">
    <RegularBtn style={{ marginLeft: 8, marginBottom: 8 }}>
      <span style={{ marginRight: 4, opacity: 0.5 }}>Built by </span>
      <span style={{ opacity: 0.8 }}>@matthew</span>
    </RegularBtn>
  </Link>
);

type CityType = {
  name: string;
  telegram?: string;
  directory?: string;
  events?: string;
  searchTerms?: string[];
};
