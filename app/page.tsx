"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
 

  const router = useRouter();
  const RouteToCountry = (CountryName: string) => {
    router.push(`/${CountryName.toLowerCase()}`);
  };

  const FetchCountries = async () => {
    await fetch("http://ip-api.com/json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        RouteToCountry(data.countryCode);
      });
  };

  useEffect(() => {
    FetchCountries();
  }, []);

  return <div>Loading .......</div>;
}

export default Page;
