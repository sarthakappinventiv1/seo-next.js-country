import Link from "next/link";
import Image from "next/image";


interface DestinationInterface {
    // Name: string,
    // Iso: string,
    // Region: string,
    // Image: string,
    // SmallImage: string,
    // Illustration: string,
    // Flag: string,
    // Style: string,
    // Location: string,
    // Viewport: string,
    // Kml: string,
    // BundleHighlight: BundleHighlightInterface
    name: string,
    iso: string,
    image: string,
    flagUrl: string
}


export default function regionCard({ region }: { region: DestinationInterface }) {

  return (
    <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={{pathname:`/countries/${region.name}`}}>
        <Image 
          src={region.image? region.image:''} 
          alt={region?.name} 
          width={300} 
          height={180} 
          className="w-full h-44 object-cover"
        />
        <div className="p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Image src={region.flagUrl? region.flagUrl:''} alt={region.name} width={24} height={16} />
            <h2 className="text-lg font-bold">{region.name}</h2>
          </div>
          {/* <p className="text-gray-600 text-sm mt-2">From {region.price}</p> */}
        </div>
      </Link>
    </div>
  );
}
