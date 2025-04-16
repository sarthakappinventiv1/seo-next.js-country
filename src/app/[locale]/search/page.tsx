// import SearchBox from '@/components/SearchBox';
import SearchBox from '@/components/Search';
import { redirect } from 'next/navigation';

type TabType = 'Countries' | 'Regions' | 'Global';

const validTabs: TabType[] = ['Countries', 'Regions', 'Global'];

// async function fetchData(): Promise<Record<TabType, any[]>> {
//   const res = await fetch('https://api.virginconnect.com/product-catalog-service/destination/destinationGroups', { cache: 'no-store' });
//   const json = await res.json();

//   const groups = json.destination_group;

//   const trending = groups.find((g: { name: string; }) => g.name === 'Trending places')?.destinations || [];
//   const regions = groups.find((g: { name: string; }) => g.name === 'Explore by region')?.destinations || [];

//   return {
//     Countries: trending,
//     Regions: regions.filter((d: { Iso: string; }) => d.Iso !== 'Global'),
//     Global: regions.filter((d: { Iso: string; }) => d.Iso === 'Global'),
//   };
// }

export default async function Search({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const tab = (resolvedSearchParams.tab || 'Countries') as TabType;
  if (!validTabs.includes(tab)) redirect('/search?tab=Countries');

  // const data = await fetchData();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <SearchBox />
    </div>
  );
}
