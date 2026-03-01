import { Product } from './types';
import imgPictureOfProduct from "figma:asset/79a05628e1389a8e8412b849dcac6a09a6c2cd20.png";
import imgPictureOfProduct1 from "figma:asset/f0fbf0ce127eb3879396d3826b6f32860f681229.png";
import imgPictureOfProduct2 from "figma:asset/9085cab35538f5473cb29d21206caf1b4c21491e.png";
import imgPictureOfProduct3 from "figma:asset/efb88368793699f2df6f8cfddc241adc45f582ad.png";
import imgPictureOfProduct4 from "figma:asset/e977b70596a7cf44f43ec91d0a1ae6d08b3ab4ef.png";
import imgPictureOfProduct5 from "figma:asset/d169f38bb0466a5229b1313ede73693846cf8041.png";
import imgPictureOfProduct6 from "figma:asset/2f7466c5c41c923cfc0ec378507404e4595b037e.png";
import imgPictureOfProduct7 from "figma:asset/23977bc40818ff40b798ce1c4a890df0013e2d37.png";
import imgPictureOfProduct8 from "figma:asset/dccecee73a1bdfeba7538390fe5dec7fbf2e0102.png";
import imgPictureOfProduct9 from "figma:asset/e4755eb04eb25e2554ed4dd13115277313617f97.png";

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Wing',
    price: 495,
    image: imgPictureOfProduct,
    description: 'Classic wing tip shoe with premium leather construction',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 4
  },
  {
    id: '2',
    name: 'Amber Executive Derby',
    price: 699,
    image: imgPictureOfProduct1,
    description: 'Executive derby shoe in rich amber leather',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 5
  },
  {
    id: '3',
    name: 'Desert Tan',
    price: 329,
    image: imgPictureOfProduct2,
    description: 'Comfortable desert tan casual shoe',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 4
  },
  {
    id: '4',
    name: 'Elegant Digel',
    price: 430,
    image: imgPictureOfProduct3,
    description: 'Discover the latest shoe from DIGEL that perfectly combines elegance and sophistication. The shoe with decorative perforated decoration on the heel will add a touch of individuality and class to your look.',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 3
  },
  {
    id: '5',
    name: 'Soft Walk',
    price: 289,
    image: imgPictureOfProduct4,
    description: 'Soft walk comfort shoe for everyday wear',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 4
  },
  {
    id: '6',
    name: 'Royal Step',
    price: 599,
    image: imgPictureOfProduct5,
    description: 'Royal step premium formal shoe',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 5
  },
  {
    id: '7',
    name: 'Midnight Oxford',
    price: 499,
    image: imgPictureOfProduct6,
    description: 'Midnight Oxford classic formal shoe',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 4
  },
  {
    id: '8',
    name: 'Brown Crest',
    price: 369,
    image: imgPictureOfProduct7,
    description: 'Brown crest casual leather shoe',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 4
  },
  {
    id: '9',
    name: 'Heritage Brown Brogue',
    price: 349,
    image: imgPictureOfProduct8,
    description: 'Heritage brown brogue with classic detailing',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 3
  },
  {
    id: '10',
    name: 'Smooth Loafer',
    price: 299,
    image: imgPictureOfProduct9,
    description: 'Smooth loafer for casual elegance',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 4
  },
  {
    id: '11',
    name: 'Premium Leather Derby',
    price: 749,
    image: 'https://images.unsplash.com/photo-1770198408387-7f45e5d6c056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGVhdGhlciUyMGRyZXNzJTIwc2hvZXN8ZW58MXx8fHwxNzcyMzkxNTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Handcrafted premium leather derby shoes for the modern gentleman',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 5
  },
  {
    id: '12',
    name: 'Luxury Oxford Collection',
    price: 899,
    image: 'https://images.unsplash.com/photo-1770198408387-7f45e5d6c056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBveGZvcmQlMjBzaG9lc3xlbnwxfHx8fDE3NzIzOTE1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Timeless luxury Oxford shoes with impeccable craftsmanship',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 5
  },
  {
    id: '13',
    name: 'Designer Sport Sneaker',
    price: 549,
    image: 'https://images.unsplash.com/photo-1543652711-77eeb35ae548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbmVha2VycyUyMGRlc2lnbmVyfGVufDF8fHx8MTc3MjM5MTU0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern designer sneaker with premium materials and style',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 4
  },
  {
    id: '14',
    name: 'Elite Leather Loafers',
    price: 649,
    image: 'https://images.unsplash.com/photo-1760616172899-0681b97a2de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbG9hZmVycyUyMG1lbnxlbnwxfHx8fDE3NzIzOTE1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Elegant slip-on loafers for effortless sophistication',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 5
  },
  {
    id: '15',
    name: 'Suede Comfort Classic',
    price: 479,
    image: 'https://images.unsplash.com/photo-1765099271862-29aa1629f2a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMHN1ZWRlJTIwc2hvZXN8ZW58MXx8fHwxNzcyMzkxNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Soft brown suede shoes combining comfort with refined style',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 4
  },
  {
    id: '16',
    name: 'Executive Black Oxford',
    price: 799,
    image: 'https://images.unsplash.com/photo-1668069226492-508742b03147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZvcm1hbCUyMHNob2VzfGVufDF8fHx8MTc3MjM5MTU0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Polished black Oxford perfect for executive occasions',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 5
  },
  {
    id: '17',
    name: 'Urban Slip-On',
    price: 389,
    image: 'https://images.unsplash.com/photo-1771506305587-fd3a53248351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzbGlwLW9uJTIwc2hvZXN8ZW58MXx8fHwxNzcyMzkxNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Casual slip-on shoes for urban lifestyle and easy wear',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 4
  },
  {
    id: '18',
    name: 'Chelsea Boot Premium',
    price: 849,
    image: 'https://images.unsplash.com/photo-1763661300203-aa3e2702f510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJvb3RzJTIwbGVhdGhlcnxlbnwxfHx8fDE3NzIzNTIyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Designer leather Chelsea boots with timeless appeal',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    rating: 5
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};