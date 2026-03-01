import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useTheme } from '../context/ThemeContext';
import { getProductById, products } from '../data/products';
import { Heart } from 'lucide-react';
import svgPaths from "../../imports/svg-xf30tpy1tb";

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[2px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pt-px relative" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery />
    </div>
  );
}

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, isFavorite } = useStore();
  const { isDarkMode } = useTheme();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  
  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} relative size-full flex items-center justify-center`}>
        <div className="text-center">
          <p className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Product not found</p>
          <button 
            onClick={() => navigate('/')}
            className={`${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} px-6 py-2 rounded-lg`}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const favorite = isFavorite(product.id);
  const sizes = product.sizes || [38, 39, 40, 41, 42, 43, 44, 45];
  
  // Get similar products (exclude current product)
  const similarProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 6);

  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize || undefined);
    navigate('/cart');
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-[#fffefe]'} relative size-full overflow-y-auto`} data-name="Product page">
      <div className={`-translate-x-1/2 fixed content-stretch flex h-[66px] items-start left-1/2 top-0 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white'} z-10 backdrop-blur-sm`} data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time />
          <Levels />
        </div>
      </div>
      
      <button className="absolute left-[22px] size-[29px] top-[53px] z-10 cursor-pointer" data-name="Back" onClick={() => navigate(-1)}>
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
          </svg>
        </div>
      </button>
      
      <div className="absolute h-[317px] left-0 top-[90px] w-[402px]">
        <img alt={product.name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={product.image} />
      </div>
      
      <p className={`absolute font-['Cairo:Medium',sans-serif] font-medium h-[26px] leading-[normal] left-[calc(66.67%+51px)] not-italic text-[16px] ${isDarkMode ? 'text-white' : 'text-black'} top-[417px] w-[58px] whitespace-pre-wrap`}>{product.price}SR</p>
      <p className={`absolute font-['Cairo:Medium',sans-serif] font-medium h-[40px] leading-[normal] left-[16px] not-italic text-[16px] ${isDarkMode ? 'text-white' : 'text-black'} top-[418px] w-[232px] whitespace-pre-wrap`}>{product.name}</p>
      <p className={`absolute font-['Cairo:Light',sans-serif] font-light h-[87px] leading-[normal] left-[18px] not-italic text-[12px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[450px] w-[328px] whitespace-pre-wrap`}>{product.description}</p>
      
      <p className={`absolute font-['Cairo:Regular',sans-serif] font-normal h-[26px] leading-[normal] left-[18px] not-italic text-[14px] ${isDarkMode ? 'text-white' : 'text-black'} top-[561px] w-[48px] whitespace-pre-wrap`}>Size</p>
      
      <div className="absolute h-[36px] left-[17px] top-[587px] w-[354px] flex gap-3" data-name="Sizes">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-[29px] h-[29px] rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
              selectedSize === size 
                ? isDarkMode ? 'bg-white text-black border-white' : 'bg-black text-white' 
                : isDarkMode ? 'border-gray-500 text-gray-300 hover:border-white' : 'border-gray-400 text-gray-700 hover:border-black'
            }`}
          >
            <span className="text-xs">{size}</span>
          </button>
        ))}
      </div>
      
      <p className={`absolute font-['Cairo:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-[18px] not-italic text-[14px] ${isDarkMode ? 'text-white' : 'text-black'} top-[651px] w-[80px] whitespace-pre-wrap`}>Ratings</p>
      
      <div className="absolute flex gap-1 left-[18px] top-[674px]">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-6 h-6" fill={(product.rating || 0) >= star ? "#FFD700" : isDarkMode ? "#4B5563" : "#D3D3D3"} viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      
      <p className={`absolute font-['Cairo:Bold',sans-serif] font-bold h-[23px] leading-[normal] left-[18px] not-italic text-[16px] ${isDarkMode ? 'text-white' : 'text-black'} top-[711px] w-[150px] whitespace-pre-wrap`}>Similar Products</p>
      
      {/* Similar Products Horizontal Scroll */}
      <div className="absolute left-0 top-[744px] w-[402px] h-[160px]">
        <div className="overflow-x-auto whitespace-nowrap px-4 h-full scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="inline-flex gap-3 h-full">
            {similarProducts.map((similarProduct) => (
              <div
                key={similarProduct.id}
                className={`inline-block w-[130px] h-[150px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200`}
                onClick={() => navigate(`/product/${similarProduct.id}`)}
              >
                <div className="relative h-[90px] bg-gray-100">
                  <img
                    src={similarProduct.image}
                    alt={similarProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <p className={`font-['Cairo:Medium',sans-serif] text-[11px] ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} line-clamp-1 mb-1`}>
                    {similarProduct.name}
                  </p>
                  <p className="font-['Cairo:Bold',sans-serif] text-[13px] text-purple-600">
                    {similarProduct.price} SR
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <button 
        className={`absolute h-[55px] left-[14px] top-[934px] w-[277px] ${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-black hover:bg-gray-800'} rounded-[14px] text-white font-['Cairo:Bold',sans-serif] font-bold text-[24px] cursor-pointer transition-colors`}
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
      
      <button 
        className="absolute left-[calc(83.33%+9px)] size-[55px] top-[934px] cursor-pointer border-2 border-black rounded-[14px] flex items-center justify-center hover:bg-gray-50 transition-colors"
        onClick={() => toggleFavorite(product)}
      >
        <Heart 
          size={28} 
          className={`transition-all ${favorite ? 'fill-red-500 text-red-500' : 'text-black'}`}
        />
      </button>

      <div className="h-[100px]" />
    </div>
  );
}