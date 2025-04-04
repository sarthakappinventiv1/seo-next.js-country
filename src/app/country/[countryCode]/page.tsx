/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import ExpandablePlanList from "@/components/ExpandablePlanList"; // Client component
// import { getCountryByISO } from "@/data/countries";
import Script from "next/script";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  // title: "Roam a Country | Best International eSIM Deals",
  title: "",
  description:
    "Get the best international eSIM deals and stay connected wherever you go.",
  keywords:
    "eSIM, international roaming, travel SIM, best eSIM deals, global connectivity",
};

const jsonLd = {
  "@context": "https://schema.org/",
  name: "France Travel eSIM",
  description:
    "Stay connected in France with a Virgin Connect Roam Travel eSIM.",
  image:
    "https://images-destination.s3.eu-central-1.amazonaws.com/2023-12-21/France.jpg",
  brand: {
    "@type": "Brand",
    name: "Virgin Connect",
  },
  sku: "FRA-ESIM",
  category: "Travel eSIM",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "4",
    availability: "https://schema.org/InStock",
    url: "https://roam.virginconnect.com/esim-france",
  },
};
interface DataPlan {
  price: { amount: string; currency: string };
  data: string;
  duration: string;
  details: string;
  network: string[];
  eSIM: string;
}

async function fetchCountryData(countryCode: string) {
  const response = await fetch(
    `https://api-dev.virginconnect.com/product-catalog-service/databundle/destination/${countryCode}`
  );
  const data: any = await response.json();

  // const country = getCountryByISO(countryCode);
  metadata.title = `virgin-eSim | ${countryCode}`;
  jsonLd.name = `${countryCode} Travel eSim`;

  return {
    country: data?.data_bundles[0].base_countries[0].Name,
    flagUrl: data?.data_bundles[0].base_countries[0].Flag,
    imageUrl: data?.data_bundles[0].base_countries[0].Image,
    plans:
      data?.data_bundles?.map(
        (plan: any): DataPlan => ({
          price: plan?.price || { amount: "4.0", currency: "USD" },
          data: plan?.data_amount || "5",
          duration: plan?.duration || "30",
          details:
            plan?.description ||
            "The validity period starts when the eSIM connects to any supported networks.",
          network: plan?.network_operators?.map((net: any) => net.Name) || [
            "Free Mobile",
            "Orange",
            "SFR",
            "Bouygues",
          ],
          eSIM: "Once you purchase this data plan, you will get a free new Virgin Connect Roam eSIM.",
        })
      ) || [],
  };
}

export default async function CountryDetail({ params }: any) {
  const { countryCode } = params;
  const { country, flagUrl, imageUrl, plans } = await fetchCountryData(
    countryCode
  );
  return (
    <>
      <Script
        id="json-ld-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      <link rel="canonical" href="https://roam.virginconnect.com/esim-frace" />
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <Image src={flagUrl} alt={country} width={32} height={20} />
          <h1 className="text-2xl font-bold">{country}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={country}
              width={600}
              height={350}
              className="w-full h-auto"
            />
          </div>

          {/* Client Component for interactivity */}
          <ExpandablePlanList plans={plans} />
        </div>
      </div>
    </>
  );
}
