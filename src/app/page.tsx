import CountryCard from '@/components/CountryCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RegionCard from '@/components/RegionCard';
import SearchSSR from '@/components/Search';
import { Country } from '@/data/countries';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "virgin-eSim",
    description: "Get the best international eSIM deals and stay connected wherever you go.",
    keywords: "eSIM, international roaming, travel SIM, best eSIM deals, global connectivity",
};
interface DestinationInterface {
  name: string,
  iso: string,
  image: string,
  flagUrl: string
}

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}


async function fetchCountryList() {
  // const response = await fetch(
  //   'https://api.virginconnect.com/product-catalog-service/destination'
  // );
  const responseGrroupd = await fetch(
    'https://api.virginconnect.com/product-catalog-service/destination/destinationGroups'
  );
  const dataw = await responseGrroupd.json();
  const countries = dataw?.destination_group[0]?.destinations?.map((country: { Name: string; Iso: string; Image: string; Flag: string })=>{
    return {
      name: country.Name,
      iso: country.Iso,
      // price: country.BundleHighlight.Text,
      image: country.Image,
      flagUrl: country.Flag
    }
  })
  return countries;
}

async function fetchRegionList() {
  const response = await fetch(
    'https://api.virginconnect.com/product-catalog-service/destination/destinationGroups'
  );
  const data = await response.json();

  const regions = data?.destination_group[1]?.destinations?.map((region: { Name: string; Iso: string; Image: string; Flag: string; })=>{
    return {
      name: region.Name,
      iso: region.Iso,
      // price: region.BundleHighlight.Text,
      image: region.Image,
      flagUrl: region.Flag

      // name: region.name,
      // iso: region?.destinations[0]?.Iso,
      // // price: region?.destinations[0]?.BundleHighlight?.StartingPrice,
      // image: region?.destinations[0]?.Image,
      // flagUrl: region?.destinations[0]?.Flag
      // iso: region?.destinations[0]?.Iso,
      // price: region?.destinations[0]?.BundleHighlight?.StartingPrice,
      // image: region?.destinations[0]?.Image,
      // flagUrl: region?.destinations[0]?.Flag
    }
  })
  return regions;
}


export default async function Home({ searchParams }: PageProps)  {

  const  countries  = await fetchCountryList();
  const regions = await fetchRegionList();

  return (  
   <>
    <link rel="canonical" href="https://roam.virginconnect.com" />
    <Navbar />
      <div className="max-w-7xl mx-auto text-center py-10">
    

        <SearchSSR searchParams={searchParams}/>
        <h3 className="text-xl mb-8">Stay connected wherever you go.</h3>


        <h1 className="text-4xl font-bold mb-4">
          Roam a <span className="text-yellow-500">country</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {countries.map((country:Country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>

        <br/>
        <h1 className="text-4xl font-bold mb-4">
          Roam a <span className="text-yellow-500">region</span>
        </h1>

        {regions && regions.length && <div className="flex flex-wrap justify-center gap-6">
          {regions.map((region: DestinationInterface) => (
            <RegionCard key={region.name} region={region} />
          ))}
        </div>}

 
      </div>
      <Footer />
   </>
  );
}
