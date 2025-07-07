import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import Slider from 'react-slick';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(null);
  const { setCart } = useCart();
 const [error, setError] = useState(null);
 const [notification, setNotification] = useState('');
 const [meals, setMeals] = useState([]);
const [viewMode, setViewMode] = useState('products'); // or 'meals'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerPadding: '20px',
      },
    },
  ],
};



 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        setProducts(res.data.products);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

//   useEffect(() => {
//   if (viewMode === 'meals') {
//     const fetchMeals = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/meals');
//         setMeals(res.data.meals);
//       } catch (err) {
//         console.error('Error fetching meals:', err);
//       }
//     };
//     fetchMeals();
//   }
// }, [viewMode]);


  const filtered = products.filter(p => {
    return (
      (!filter || p.isVeg === (filter === 'veg')) &&
      p.p_name.toLowerCase().includes(search.toLowerCase())
    );
  });

    const handleMeals = async()=>{
         try {
        const res = await axios.get('http://localhost:3000/meals');
        console.log("ddd", res.data.meals)
        setMeals(res.data.meals);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      }
    };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        
        {/* <button onClick={handleMeals} className="bg-gray-500 text-white px-3 py-1 rounded">Meals</button> */}
      </div>
  {notification && (
    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded shadow text-sm font-medium">
      {notification}
    </div>
  )}
    
    
<Slider {...settings}>
  {products.map((p) => (
    <div key={p.id} className="px-2">
      <div className="relative rounded overflow-hidden shadow">
        <img
          src={p.imageUrl}
          alt={p.p_name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
          <h3 className="text-lg font-semibold">{p.p_name}</h3>
          <p className="text-sm">{p.description}</p>
          <p className="font-bold mt-1">₹{p.price}</p>
          <button
            onClick={() => {
              setCart((prev) => [...prev, p]);
              setNotification(`${p.p_name} added to cart`);
              setTimeout(() => setNotification(''), 2000);
            }}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</Slider>
<div className='absolute gap-5.5 mt-5'>
    <div className=''>
  <button onClick={() => setFilter('veg')} className="bg-green-900  text-white px-3 py-1 rounded "  >Veg</button>
        <button onClick={() => setFilter('nonveg')} className="bg-red-500 text-white px-3 py-1 rounded">Non-Veg</button>
        <button onClick={() => setFilter(null)} className="bg-gray-500 text-white px-3 py-1 rounded">All</button>
    </div>
  
 <div className='flex mt-5'>
            {filtered.map((p) => (
    <div key={p.id} className="px-2">
      <div className="relative rounded overflow-hidden shadow">
        <img
          src={p.imageUrl}
          alt={p.p_name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
          <h3 className="text-lg font-semibold">{p.p_name}</h3>
          <p className="text-sm">{p.description}</p>
          <p className="font-bold mt-1">₹{p.price}</p>
          <button
            onClick={() => {
              setCart((prev) => [...prev, p]);
              setNotification(`${p.p_name} added to cart`);
              setTimeout(() => setNotification(''), 2000);
            }}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
</div>

    </div>
  );
};

export default Home;
