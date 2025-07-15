import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import Slider from 'react-slick';
import NavBarComponent from '../components/NavBarComponent';
import Footer from '../components/Footer';
import Filters from '../components/Filters';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(null);
  const { setCart } = useCart();
 const [error, setError] = useState(null);
 const [notification, setNotification] = useState('');
 const [meals, setMeals] = useState([]);
const [viewMode, setViewMode] = useState('products'); // or 'meals'
const [quantities, setQuantities] = useState({});
const [cartCount, setCartCount] = useState(0); // cart item count


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
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

useEffect(() => {
  const fetchMeals = async () => {
    try {
      const res = await axios.get('http://localhost:3000/meals');
      setMeals(res.data.meals);
    } catch (err) {
      console.error('Error fetching meals:', err);
      setError('Failed to load meals');
    }
  };

  if (filter === 'meals') {
    fetchMeals();
  }
}, [filter]);



const handleQuantityChange = (productId, value) => {
  const qty = Math.max(1, Number(value)); // minimum 1
  setQuantities(prev => ({ ...prev, [productId]: qty }));
};

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
    <>
         <NavBarComponent setSearch={setSearch} search={search} cartCount={cartCount}/>
             <div className="p-4">
<div className='m-4 mt-10'>
  <Slider {...settings}>
  {products.map((p) => (
    <div key={p.id} className="px-2 ">
      <div className="relative rounded overflow-hidden shadow">
        <img
          src={p.imageUrl}
          alt={p.p_name}
          className="w-full h-110 object-cover"
        />
        <div className="relative bottom-0 left-0 w-full bg-black/60 text-white p-9 top-90">
          <h3 className="text-xl font-semibold">{p.p_name}</h3>
          <p className="text-sm">{p.description}</p>
          <p className="font-bold mt-1">${p.price}</p>
     
        </div>
      </div>
    </div>
  ))}
</Slider>
<div className='relative gap-5.5 mt-24'>
<Filters filter={filter} setFilter={setFilter} />
  
<div className='relative flex flex-wrap gap-4 mt-5 justify-center'>
  { filter === 'meals' ? (
  meals.map((meal) => (
    <div key={meal.id} className="px-2 w-64">
      <div className="relative rounded overflow-hidden shadow">
        <img
          src={meal.imageUrl}
          alt={meal.m_name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
          <h3 className="text-lg font-semibold">{meal.m_name}</h3>
          <p className="text-sm">{meal.description}</p>
          <p className="font-bold mt-1">${meal.price}</p>
          <div className="mt-2">
            <button
              onClick={() => {
                setCart(prev => [...prev, ...meal.products]);
                setNotification(`${meal.m_name} added to cart`);
                setTimeout(() => setNotification(''), 2000);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded w-full"
            >
              Add Meal to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ))
) : (filtered.map((p) => (
    <div key={p.id} className="px-2 w-64">
      <div className="relative rounded overflow-hidden shadow">
        <img
          src={p.imageUrl}
          alt={p.p_name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
          <h3 className="text-lg font-semibold">{p.p_name}</h3>
          <p className="text-sm">{p.description}</p>
          <p className="font-bold mt-1">${p.price}</p>
        <div className="mt-2">
  <button
    onClick={() => {
      const qty = quantities[p.id] || 1;
      const items = Array(qty).fill(p);
      setCart(prev => [...prev, ...items]);
      setCartCount(prev => prev + qty);
      setNotification(`${p.p_name} added to cart (${qty})`);
      setTimeout(() => setNotification(''), 2000);
    }}
    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded w-full"
  >
    Add to Cart
  </button>

</div>

        </div>
      </div>
    </div>
)  ))}

  
</div>

</div>
</div>

    </div>
    <Footer/>
    </>

  );
};

export default Home;
