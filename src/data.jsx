// import assets
import {
  House1,
  House2,
  House3,
  House4,
  House5,
  House6,
  House7,
  House8,
  House9,
  House10,
  House11,
  House12,
  House1Lg,
  House2Lg,
  House3Lg,
  House4Lg,
  House5Lg,
  House6Lg,
  House7Lg,
  House8Lg,
  House9Lg,
  House10Lg,
  House11Lg,
  House12Lg,
  Apartment1,
  Apartment2,
  Apartment3,
  Apartment4,
  Apartment5,
  Apartment6,
  Apartment1Lg,
  Apartment2Lg,
  Apartment3Lg,
  Apartment4Lg,
  Apartment5Lg,
  Apartment6Lg,
  Agent1,
  Agent2,
  Agent3,
  Agent4,
  Agent5,
  Agent6,
  Agent7,
  Agent8,
  Agent9,
  Agent10,
  Agent11,
  Agent12,
} from "./assets";
const desc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.";
export const housesData = [
  {
    id: 1,
    type: "House",
    name: "House 1",
    description: desc,
    image: House1,
    imageLg: House1Lg,
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "110000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "House",
    name: "House 2",
    description: desc,
    image: House2,
    imageLg: House2Lg,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "140000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "House",
    name: "House 3",
    description: desc,
    image: House3,
    imageLg: House3Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "170000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "House",
    name: "House 4",
    description: desc,
    image: House4,
    imageLg: House4Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "200000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "House",
    name: "House 5",
    description: desc,
    image: House5,
    imageLg: House5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2015",
    price: "210000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "House",
    name: "House 6",
    description: desc,
    image: House6,
    imageLg: House6Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    year: "2014",
    price: "220000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "Apartament",
    name: "Apartament 1",
    description: desc,
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2012",
    price: "20000",
    agent: {
      image: Agent7,
      name: "Jawhar Shamil Naser",
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartament",
    name: "Apartament 2",
    description: desc,
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2011",
    price: "30000",
    agent: {
      image: Agent8,
      name: "Juana Douglass",
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartament",
    name: "Apartament 3",
    description: desc,
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "United States",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2011",
    price: "40000",
    agent: {
      image: Agent9,
      name: "Jerry Schenck",
      phone: "0123 456 78910",
    },
  },
  {
    id: 10,
    type: "House",
    name: "House 7",
    description: desc,
    image: House7,
    imageLg: House7Lg,
    country: "Canada",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3200 sq ft",
    year: "2015",
    price: "117000",
    agent: {
      image: Agent10,
      name: "Vera Levesque",
      phone: "0123 456 78910",
    },
  },
  {
    id: 11,
    type: "House",
    name: "House 8",
    description: desc,
    image: House8,
    imageLg: House8Lg,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "7",
    bathrooms: "2",
    surface: "2200 sq ft",
    year: "2019",
    price: "145000",
    agent: {
      image: Agent11,
      name: "Sofia Gomes",
      phone: "0123 456 78910",
    },
  },
  {
    id: 12,
    type: "House",
    name: "House 9",
    description: desc,
    image: House9,
    imageLg: House9Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600 sq ft",
    year: "2015",
    price: "139000",
    agent: {
      image: Agent12,
      name: "Raymond Hood",
      phone: "0123 456 78910",
    },
  },
  {
    id: 13,
    type: "House",
    name: "House 10",
    description: desc,
    image: House10,
    imageLg: House10Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 sq ft",
    year: "2014",
    price: "180000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 14,
    type: "House",
    name: "House 11",
    description: desc,
    image: House11,
    imageLg: House11Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 sq ft",
    year: "2011",
    price: "213000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 15,
    type: "House",
    name: "House 12",
    description: desc,
    image: House12,
    imageLg: House12Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 sq ft",
    year: "2013",
    price: "221000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 16,
    type: "Apartament",
    name: "Apartament 16",
    description: desc,
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 sq ft",
    year: "2011",
    price: "21000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 17,
    type: "Apartament",
    name: "Apartament 17",
    description: desc,
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2012",
    price: "32000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 18,
    type: "Apartament",
    name: "Apartament 18",
    description: desc,
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2010",
    price: "38000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
];
