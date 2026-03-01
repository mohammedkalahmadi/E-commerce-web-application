import { useNavigate } from 'react-router';
import { useStore } from '../context/StoreContext';
import { useTheme } from '../context/ThemeContext';
import { products } from '../data/products';
import { Heart, Moon, Sun } from 'lucide-react';
import svgPaths from "../../imports/svg-j2bawf9n9p";

function Group({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <div className="absolute inset-[-5.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 21.3333">
          <g id="Group">
            <path d={svgPaths.p2b538300} id="Vector" stroke={isDarkMode ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p35bfcbc0} id="Vector_2" stroke={isDarkMode ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Time({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[2px] relative" data-name="Time">
      <p className={`font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] ${isDarkMode ? 'text-white' : 'text-black'} text-center`} style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke={isDarkMode ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Cap" opacity="0.4" />
          <rect fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pt-px relative" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery isDarkMode={isDarkMode} />
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useStore();
  const { isDarkMode } = useTheme();
  const favorite = isFavorite(product.id);

  return (
    <div 
      className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative group`}
      data-name="Product card"
    >
      <div 
        className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-gray-100"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          src={product.image} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 
          className={`font-['Cairo:Bold',sans-serif] text-[15px] ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-1 cursor-pointer hover:text-purple-600 transition-colors line-clamp-1`}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <p className="font-['Cairo:Bold',sans-serif] text-[16px] text-purple-600">
            {product.price} SR
          </p>
          
          <button 
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
            onClick={() => toggleFavorite(product)}
          >
            <Heart 
              size={20} 
              className={`transition-all duration-200 ${favorite ? 'fill-red-500 text-red-500' : isDarkMode ? 'text-gray-400 hover:text-red-500' : 'text-gray-400 hover:text-red-500'}`}
            />
          </button>
        </div>
        
        {/* Rating stars */}
        <div className="flex gap-0.5 mt-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-3 h-3 ${i < product.rating ? 'text-yellow-400' : isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { getCartCount } = useStore();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'} relative size-full overflow-y-auto`} data-name="Main page">
      {/* Fixed Status Bar */}
      <div className={`-translate-x-1/2 fixed content-stretch flex items-start left-1/2 top-0 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm z-20 shadow-sm`} data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time isDarkMode={isDarkMode} />
          <Levels isDarkMode={isDarkMode} />
        </div>
      </div>
      
      {/* Header */}
      <div className={`fixed top-[63px] left-0 right-0 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm z-10 shadow-sm`}>
        <div className="max-w-[402px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className={`font-['Cairo:Bold',sans-serif] text-[26px] ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Discover Shoes
            </h1>
            
            <div className="flex gap-3">
              {/* Dark Mode Toggle */}
              <button 
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-purple-100'} transition-colors duration-200`}
                onClick={toggleTheme}
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-600" />
                )}
              </button>
              
              <button 
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-purple-100'} transition-colors duration-200`}
                onClick={() => navigate('/search')}
              >
                <div className="w-5 h-5">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.75 21.75">
                    <path d={svgPaths.p3819b080} fill={isDarkMode ? "var(--fill-0, #9CA3AF)" : "var(--fill-0, #6B7280)"} />
                  </svg>
                </div>
              </button>
              
              <button 
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-purple-100'} transition-colors duration-200`}
                onClick={() => navigate('/filter')}
              >
                <div className="w-5 h-5">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.336 21.753">
                    <path d={svgPaths.p13aa9b00} fill={isDarkMode ? "var(--fill-0, #9CA3AF)" : "var(--fill-0, #6B7280)"} />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-[402px] mx-auto px-4 pt-[140px] pb-[100px]">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`-translate-x-1/2 fixed bottom-0 h-[65px] left-1/2 w-[402px] z-10 shadow-2xl`} data-name="navigation bar">
        <div className={`absolute ${isDarkMode ? 'bg-gray-800' : 'bg-white'} inset-0 rounded-t-3xl`} />
        <button className="absolute aspect-[24/24] left-[8.96%] right-[81.09%] top-[13px]" data-name="home button" onClick={() => navigate('/home')}>
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 30">
              <path d={svgPaths.pa04bf00} fill="var(--fill-0, #9100FF)" id="Vector" />
            </svg>
          </div>
        </button>
        <button className="absolute aspect-[24/24] left-[33.33%] right-[56.72%] top-[13px]" data-name="Favorite button" onClick={() => navigate('/favorites')}>
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 30.5833">
              <path d={svgPaths.p211c4300} fill="var(--fill-0, #6B7280)" id="Vector" />
            </svg>
          </div>
        </button>
        <button className="absolute aspect-[24/24] left-[57.71%] right-[32.34%] top-[13px]" data-name="Cart" onClick={() => navigate('/cart')}>
          <div className="absolute inset-[8.33%_12.5%_8.33%_4.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
              <path d={svgPaths.p2c2d2bc0} fill="var(--fill-0, #6B7280)" id="Vector" />
            </svg>
          </div>
          {getCartCount() > 0 && (
            <div className="absolute -top-1 -right-1 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-lg">
              {getCartCount()}
            </div>
          )}
        </button>
        <button className="absolute aspect-[24/24] left-[82.09%] right-[7.96%] top-[13px]" data-name="Profile" onClick={() => navigate('/profile')}>
          <Group isDarkMode={isDarkMode} />
        </button>
      </div>
    </div>
  );
}