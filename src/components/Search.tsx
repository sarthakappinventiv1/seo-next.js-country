import React from 'react';
import Link from "next/link";
import Image from "next/image";



type TabType = 'Countries' | 'Regions' | 'Global';
const tabs: TabType[] = ['Countries', 'Regions', 'Global'];

type Destination = {
  Name: string;
  Iso: string;
  Region: string;
  Flag: string;
};

type DestinationGroup = {
  name: string;
  destinations: Destination[];
};

type Props = {
  searchParams?: {
    tab?: string;
    show?: string;
  };
};

async function fetchTabData(): Promise<Record<TabType, Destination[]>> {
  const res = await fetch(
    'https://api.virginconnect.com/product-catalog-service/destination/destinationGroups',
    { cache: 'no-store' }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error('Error fetching destinations:', text);
    throw new Error(`Fetch failed: ${res.status}`);
  }

  const json = await res.json();
  const groups: DestinationGroup[] = json.destination_group;

  const trending = groups.find((g) => g.name === 'Trending places')?.destinations || [];
  const regions = groups.find((g) => g.name === 'Explore by region')?.destinations || [];

  return {
    Countries: trending,
    Regions: regions.filter((d) => d.Iso !== 'Global'),
    Global: regions.filter((d) => d.Iso === 'Global'),
  };
}

export default async function SearchSSR({ searchParams }: Props) {
  const activeTab = tabs.includes(searchParams?.tab as TabType)
    ? (searchParams?.tab as TabType)
    : 'Countries';

  const showDropdown = searchParams?.show === '1';

  const data = await fetchTabData();
  
  return (
    <div className="relative max-w-xl w-full mx-auto mt-10">
      {/* Fake Input (initial state) */}
      {!showDropdown && (
        <Link
          href={`?tab=${activeTab}&show=1`}
          className="flex items-center border px-4 py-2 rounded-full bg-white shadow-md"
        >
          <span className="text-gray-400 flex-grow">Where are you going?</span>
          <svg
            className="w-5 h-5 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
          </svg>
        </Link>
      )}

      {/* Show real input + tab dropdown */}
      {showDropdown && (
        <div className="bg-white rounded-xl shadow-lg w-full">

      
          {/* Input */}
          <form method="GET" className="flex items-center border rounded-t-xl px-4 py-2">
            <input
              name="q"
              autoFocus
              placeholder="Where are you going?"
              className="flex-grow outline-none text-sm"
              
            />
            <input type="hidden" name="tab" value={activeTab} />
            <input type="hidden" name="show" value="1" />
            <button type="submit">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
              </svg>
            </button>
          </form>

          {/* Tabs */}
          <div className="flex items-center justify-between border-b text-sm font-medium text-gray-600 px-2">
            <div className="flex">
              {tabs.map((tab) => (
                <Link 
                  key={tab}
                  href={`?tab=${tab}&show=1`}
                  className={`px-4 py-2 ${
                    tab === activeTab ? 'text-red-600 border-b-2 border-red-600' : ''
                  }`}>
                  {tab} ({data[tab].length})
                </Link>
              ))}
            </div>

            {/* Close Button */}
            <Link
              href="/"
              className="text-gray-400 hover:text-red-500 text-sm px-2"
              title="Close"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </Link>
          </div>

          {/* Dropdown List */}
          <div className="max-h-64 overflow-y-auto divide-y">
            {data[activeTab].map((item, index) => (
              <Link key={index} href={`/country/${item.Iso}`}>
                <div key={index} className="flex items-center gap-3 px-4 py-2">
                  <Image src={item.Flag} alt={item.Name}  className="w-5 h-3 rounded" />
                  <span>{item.Name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
