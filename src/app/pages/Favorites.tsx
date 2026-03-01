import { useNavigate } from 'react-router';
import { useStore } from '../context/StoreContext';
import { useTheme } from '../context/ThemeContext';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import svgPaths from "../../imports/svg-ency4p4zwb";

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

function FavoriteCard({ product, onRemove, onAddToCart }: { product: any; onRemove: () => void; onAddToCart: () => void }) {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-4 relative group`}>
      <div className="flex gap-4 p-4">
        {/* Product Image */}
        <div 
          className="w-[120px] h-[120px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer bg-gray-100 relative"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 
              className={`font-['Cairo:Bold',sans-serif] text-[16px] ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-1 cursor-pointer hover:text-purple-600 transition-colors line-clamp-2`}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {product.name}
            </h3>
            <p className="font-['Cairo:Bold',sans-serif] text-[18px] text-purple-600 mb-2">
              {product.price} SR
            </p>
            
            {/* Rating stars */}
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-3.5 h-3.5 ${i < product.rating ? 'text-yellow-400' : isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onAddToCart}
              className="flex-1 bg-black text-white rounded-xl py-2.5 px-4 font-['Cairo:Bold',sans-serif] text-[13px] hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
            <button
              onClick={onRemove}
              className="bg-red-50 text-red-500 rounded-xl p-2.5 hover:bg-red-100 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Favorite Badge */}
      <div className="absolute top-4 right-4">
        <div className="bg-red-500 rounded-full p-2 shadow-lg">
          <Heart size={16} className="text-white fill-white" />
        </div>
      </div>
    </div>
  );
}

export default function Favorites() {
  const navigate = useNavigate();
  const { favorites, toggleFavorite, addToCart, getCartCount } = useStore();
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'} relative size-full overflow-y-auto`} data-name="Favorite list">
      {/* Status Bar */}
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
              My Favorites
            </h1>
            {favorites.length > 0 && (
              <div className="bg-purple-100 text-purple-600 rounded-full px-4 py-1 font-['Cairo:Bold',sans-serif] text-[14px]">
                {favorites.length} {favorites.length === 1 ? 'item' : 'items'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[402px] mx-auto px-4 pt-[140px] pb-[100px]">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full p-8 mb-6`}>
              <Heart size={64} className={isDarkMode ? 'text-gray-600' : 'text-gray-400'} />
            </div>
            <h2 className={`font-['Cairo:Bold',sans-serif] text-[24px] ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2`}>
              No Favorites Yet
            </h2>
            <p className={`font-['Cairo:Regular',sans-serif] text-[16px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-6 max-w-[280px]`}>
              Start adding your favorite shoes to keep track of what you love!
            </p>
            <button 
              onClick={() => navigate('/home')}
              className={`${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-black hover:bg-gray-800'} text-white px-8 py-3 rounded-xl font-['Cairo:Bold',sans-serif] text-[16px] transition-colors shadow-lg`}
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div>
            {favorites.map((product) => (
              <FavoriteCard
                key={product.id}
                product={product}
                onRemove={() => toggleFavorite(product)}
                onAddToCart={() => {
                  addToCart(product);
                  navigate('/cart');
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <div className="-translate-x-1/2 fixed bottom-0 h-[65px] left-1/2 w-[402px] z-10 shadow-2xl" data-name="navigation bar">
        <div className={`absolute ${isDarkMode ? 'bg-gray-800' : 'bg-white'} inset-0 rounded-t-3xl`} />
        <button className="absolute aspect-[24/24] left-[8.96%] right-[81.09%] top-[13px]" data-name="home button" onClick={() => navigate('/home')}>
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 30">
              <path d={svgPaths.pa04bf00} fill="var(--fill-0, #6B7280)" id="Vector" />
            </svg>
          </div>
        </button>
        <button className="absolute aspect-[24/24] left-[33.33%] right-[56.72%] top-[13px]" data-name="Favorite button" onClick={() => navigate('/favorites')}>
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 30.5833">
              <path d={svgPaths.p211c4300} fill="var(--fill-0, #9100FF)" id="Vector" />
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