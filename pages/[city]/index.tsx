import { NextPageContext } from "next";
import Link from "next/link";

import cities from "cities";

export default function CityTelegram() {
  return (
    <div className="max-vh max-vw col-c-c">
      <h4>
        City not found— msg <Link href="https://fcast.me/matthew">@matthew</Link> to add it! :)
      </h4>
    </div>
  );
}

export async function getServerSideProps({ query }: NextPageContext) {
  const city = cities.find(({ searchTerms }: any) => searchTerms.includes(query?.city));

  if (city) {
    return {
      redirect: {
        destination: city.telegram,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
