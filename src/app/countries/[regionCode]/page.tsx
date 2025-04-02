import CountryCard from '@/components/CountryCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import RegionCard from '@/components/RegionCard';
import SearchSSR from '@/components/Search';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roam a Country | Best International eSIM Deals",
  description: "Get the best international eSIM deals and stay connected wherever you go.",
  keywords: "eSIM, international roaming, travel SIM, best eSIM deals, global connectivity",
};
interface Country {
  name: string;
  image: string;
  flagUrl: string;
  price: string;
  iso: string;
}

interface SearchParamInterface {
  tab: string;
  show: string;
}

interface ParamsInterface {
  regionCode: string;
}

async function fetchRegionDetail(regionName: string) {
    const response = await fetch(
      'https://api.virginconnect.com/product-catalog-service/destination/groups'
    );
    const data = await response.json();

    const countires = data?.destination_group.filter((region: { name: string; })=>{
        return regionName === region.name;  // replace with the actual check for region match
    })
    const countryList = countires[0]?.destinations?.map((country: { Name: string; Iso: string; Image: string; Flag: string; })=>{
        return {
          name: country.Name,
          iso: country.Iso,
        //   price: country.BundleHighlight.StartingPrice,
          image: country.Image,
          flagUrl: country.Flag
        }
      })
    return countryList;
  }
export default async function Home({searchParams, params }: {searchParams: SearchParamInterface, params: ParamsInterface}) {
    // const {region}= searchParams?.region;
    const { regionCode } = params;

    const countryList = await fetchRegionDetail(regionCode);

    return (  
    <>
        <Navbar />
        <div className="max-w-7xl mx-auto text-center py-10">
        

            <SearchSSR searchParams={searchParams}/>
            <h3 className="text-xl mb-8">Stay connected wherever you go.</h3>


            <h1 className="text-4xl font-bold mb-4">
            Roam a <span className="text-yellow-500">country</span>
            </h1>
            {countryList && countryList.length && <div className="flex flex-wrap justify-center gap-6">
            {countryList.map((country:Country) => (
                <CountryCard key={country.name} country={country} />
            ))}
            </div>}

        </div>
        <Footer />
    </>
    );
}
