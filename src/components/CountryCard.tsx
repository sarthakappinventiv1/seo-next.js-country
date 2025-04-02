import Link from "next/link";
import Image from "next/image";

interface Country {
  name: string;
  image: string;
  flagUrl: string;
  price: string;
  iso: string;
}

export default function CountryCard({ country }: { country: Country }) {
  return (
    <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/country/${country.iso}`}>
        <Image 
          src={country.image? country.image:''} 
          alt={country?.name} 
          width={300} 
          height={180} 
          className="w-full h-44 object-cover"
        />
        <div className="p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Image src={country.flagUrl? country.flagUrl:''} alt={country.name} width={24} height={16} />
            <h2 className="text-lg font-bold">{country.name}</h2>
          </div>
          <p className="text-gray-600 text-sm mt-2">From {country.price}</p>
        </div>
      </Link>
    </div>
  );
}
