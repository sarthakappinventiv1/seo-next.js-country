export interface Country {
  name: string;
  price: string;
  iso: string;
  image: string;
  flag: string;
  flagUrl: string;
}

export const countries: Country[] = [
  {
    name: "India",
    iso: "IN",
    price: "$10.00",
    image:
      "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    flag: "🇮🇳",
    flagUrl: "https://flagcdn.com/w320/in.png",
  },
  {
    name: "France",
    price: "$4.00",
    iso: "FR",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    flag: "🇫🇷",
    flagUrl: "https://flagcdn.com/w320/fr.png",
  },
  {
    name: "Uganda",
    iso: "UG",
    price: "$4.00",
    image:
      "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    flag: "🇺🇬",
    flagUrl: "https://flagcdn.com/w320/ug.png",
  },
  {
    name: "Turkey",
    price: "$4.00",
    iso: "TR",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    flag: "🇹🇷",
    flagUrl: "https://flagcdn.com/w320/tr.png",
  },
  {
    name: "United States of America",
    iso: "US",
    price: "$4.00",
    image:
      "https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    flag: "🇺🇸",
    flagUrl: "https://flagcdn.com/w320/us.png",
  },
  {
    name: "Saudi Arabia",
    iso: "SA",
    price: "$10.00",
    image:
      "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    flag: "🇸🇦",
    flagUrl: "https://flagcdn.com/w320/sa.png",
  },
  {
    name: "Brazil",
    iso: "BR",
    price: "$4.00",
    image:
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    flag: "🇧🇷",
    flagUrl: "https://flagcdn.com/w320/br.png",
  },
];




export function getCountryByISO(iso: string): Country | undefined {
  return countries.find((country) => country.iso === iso);
}




// export interface Country {
//   name: string;
//   price: string;
//   iso: string;
//   image: string;
//   flag: string;
//   flagUrl: string;
// }

// export const countries: Country[] = [
//   {
//     name: "France",
//     price: "$4.00",
//     iso: "FR",
//     // image: "https://www.dummyimage.co.uk/?utm_source=chatgpt.com",
//     image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
//     flag: "🇫🇷",
//     flagUrl: "https://flagcdn.com/w320/fr.png",
//   },
//   {
//     name: "Uganda",
//     iso: "UG",
//     price: "$4.00",
//     // image: "https://www.dummyimage.co.uk/?utm_source=chatgpt.com",
//     image: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     flag: "🇩🇪",
//     flagUrl: "https://flagcdn.com/w320/de.png",
//   },
//   {
//     name: "Turkey",
//     price: "$4.00",
//     iso: "TR",
//     // image: "https://www.dummyimage.co.uk/?utm_source=chatgpt.com",
//     image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     flag: "🇹🇷",
//     flagUrl: "https://flagcdn.com/w320/tr.png",
//   },
//   {
//     name: "United States of America",
//     iso: "US",
//     price: "$4.00",
//     // image: "https://www.dummyimage.co.uk/?utm_source=chatgpt.com",
//     image: "https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     flag: "🇸🇬",
//     flagUrl: "https://flagcdn.com/w320/sg.png",
//   },
//   {
//     name: "Saudi Arabia",
//     iso: "SA",
//     price: "$10.00",
//     // image: "https://www.dummyimage.co.uk/?utm_source=chatgpt.com",
//     image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     flag: "🇸🇦",
//     flagUrl: "https://flagcdn.com/w320/sa.png",
//   },
//   {
//     name: "India",
//     iso: "IN",
//     price: "$10.00",
//     // image: "https://www.dummyimage.co.uk/?utm_source=chatgpt.com",
//     image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     flag: "🇸🇦",
//     flagUrl: "https://flagcdn.com/w320/in.png",
//   },
//   {
//     name: "Brazil",
//     iso: "BR",
//     price: "$4.00",
//     // image: "https://www.dummyimage.co.uk/?utm_source=chatgpt.com",
//     image: "https://plus.unsplash.com/premium_photo-1661962726504-fa8f464a1bb8?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     flag: "🇬🇧",
//     flagUrl: "https://flagcdn.com/w320/gb.png",
//   },
// ];
