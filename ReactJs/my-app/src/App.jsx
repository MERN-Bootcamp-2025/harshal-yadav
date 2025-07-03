// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Login from './week-one-assigment/Login'
// // import TodoItem from './TodoItem';
// // import './App.css';
// import Todo from './Day-05/Todo'
// import DashboardPreview from './week-one-assigment/DashboardPreview'
// import Effects from './Day-07/Effects'
// import HomePage from './Day-07/assigment/HomePage'


// // function App() {
// //   const [count, setCount] = useState(0)
// //   const handleClick=()=>{
// //       setCount(count+1);
// //     }
// //     console.log("count",count);
// //   return (
// //     <>
// //    <button onClick={handleClick}> Click me!</button>
// //    <div>{count}</div>
// //     </>
// //   )
// // }

// // function App(){
  
// //   const [count, setCount] = useState(0);
 


// //   return (
// //     <>
// //     <div className='container'>
// //    <DashboardPreview />
// //     <Login/>

// //     <Effects/>
// //     <HomePage/>
// //     </div>
// //     <Todo/>
// //       {/* <button > Click me!</button> */}
// //     </>
// //   )
// // }





// // import React, { useState } from 'react';
// import SearchForm from './Day-07/assigment/SearchForm';
// import PhotoGrid from './Day-07/assigment/PhotoGrid';
// import LoadingSpinner from './Day-07/assigment/LoadingSpinner';
// import ErrorMessage from './Day-07/assigment/ErrorMessage';

//     function App() {
//            const [photos, setPhotos] = useState([]);
//              const [loading, setLoading] = useState(false);
//            const [error, setError] = useState('');
//            const [query, setQuery] = useState('');
//            const [allPokemon,setAllPokemon]= useState([]);
//            useEffect(() => {
//   const fetchList = async () => {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
//     const data = await res.json();
//     setAllPokemon(data.results); // Store all 1000 names
//   };
//   fetchList();
// }, []);


// //   const handleSearch = async (searchTerm) => {
// //     setQuery(searchTerm);
// //     setLoading(true);
// //     setError('');
// //     setPhotos([]);

// //     try {
// //     // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
// //     //   if (!res.ok) throw new Error('Failed to fetch photos');

 
// //     // if (!res.ok) throw new Error('Pokémon not found');
// //     // const data = await res.json();


// //       // const data = await res.json();
// //       // const filtered = data.filter(photo =>
// //       //   photo.title.toLowerCase().includes(searchTerm.toLowerCase())
// //       // );
// //       // if (filtered.length === 0) {
// //       //   setError('No results found.');
// //       // }
// //       // setPhotos(filtered.slice(0, 20)); // Limit results

// //       // const fetchPhotos = async (query) => {
// // // 
// //     setLoading(true);
// //     setError('');
// //     setPhotos([]);
    

// //     // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
// //     // console.log("RES",res);
// //     // if (!res.ok) throw new Error('Pokémon not found');
// //     // const data = await res.json();
// // // const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
// // // const data = await res.json();
// // // console.log("data",data)
// // // const all = data.results; // [{ name, url }, ...]

// // // const filtered = data.filter(p =>
// // //   p.name.toLowerCase().includes(query.toLowerCase())
// // // );
// // //     const result = [{
// // //       id: data.id,
// // //       title: data.name,
// // //       thumbnailUrl: data.sprites.front_default
// // //     }];
// // // console.log("Filter",filtered);
// // //     setPhotos(filtered);
 
// // // };



// // } catch (err) {
// //     setError(err.message);
// //   } finally {
// //     setLoading(false);
// //   }
// //   };
 
// const handleSearch = async (searchTerm) => {
//   setQuery(searchTerm);
//   setLoading(true);
//   setError('');
//   setPhotos([]);

//   try {
//     const filtered = allPokemon.filter(p =>
//       p.name.toLowerCase().includes(searchTerm.toLowerCase())
//     ).slice(0, 10); // limit to 10 for performance

//     const promises = filtered.map(async (pokemon) => {
//       const res = await fetch(pokemon.url);
//       const data = await res.json();
//       return {
//         id: data.id,
//         title: data.name,
//         thumbnailUrl: data.sprites.front_default
//       };
//     });

//     const results = await Promise.all(promises);
//     setPhotos(results);
//   } catch (err) {
//     setError('Failed to fetch Pokémon data.');
//   } finally {
//     setLoading(false);
//   }
// };


// const handleRemove = (id) => {
//   setPhotos(prev => prev.filter(photo => photo.id !== id));
// };

//   return (
//     <div className="container">
//       <h1>Photo Search</h1>
//       <SearchForm onSearch={handleSearch}  />
//       {loading && <LoadingSpinner />}
//       {error && <ErrorMessage message={error} />}
//       {!loading && !error && photos.length > 0 && <PhotoGrid photos={photos} onRemove={handleRemove} />}
//     </div>
//   );
// }
// export default App;



//......................POKEMON API...................................................

// import { useState, useEffect } from 'react';
// import './App.css';

// import Login from './week-one-assigment/Login';
// import Todo from './Day-05/Todo';
// import DashboardPreview from './week-one-assigment/DashboardPreview';
// import Effects from './Day-07/Effects';
// import HomePage from './Day-07/assigment/HomePage';

// import SearchForm from './Day-07/assigment/SearchForm';
// import PhotoGrid from './Day-07/assigment/PhotoGrid';
// import LoadingSpinner from './Day-07/assigment/LoadingSpinner';
// import ErrorMessage from './Day-07/assigment/ErrorMessage';
// import Accordion from './Day-10/Accordion';
// import DropDown from './Day-11/DropDown';



// function App() {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [query, setQuery] = useState('');
//   const [allPokemon, setAllPokemon] = useState([]);
//   const [selection, setSelection]= useState(null);

//   const handleSelect=(option)=>{
//     setSelection(option);
//   }

//   const data = [
//     { title: "Section 1", content: "How can i get my refund" },
//     { title: "Section 2", content: "Payment Mode" },
//     { title: "Section 3", content: "Installment" },
//   ];

//   // Fetch list of all Pokémon (once)
//   useEffect(() => {
//     const fetchList = async () => {
//       try {
//         const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
//         const data = await res.json();
//         console.log("data1222",data);
//         setAllPokemon(data.results); 
//       } catch (err) {
//         setError('Failed to load Pokémon list');
//       }
//     };
//     fetchList();
//   }, []);

//   // Handle search input
//   const handleSearch = async (searchTerm) => {
//     setQuery(searchTerm);
//     setLoading(true);
//     setError('');
//     setPhotos([]);
//     try {
//       const filtered = allPokemon
//       .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
//       .slice(0, 10); // Limit for performance
      
//     console.log("filtered",filtered)

//       const promises = filtered.map(async (pokemon) => {
//         const res = await fetch(pokemon.url);
//         const data = await res.json();
//         return {
//           id: data.id,
//           title: data.name,
//           thumbnailUrl: data.sprites.front_default
//         };  
//       });

//       const results = await Promise.all(promises);
//       setPhotos(results);
//     } catch (err) {
//       setError('Failed to fetch Pokémon data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Remove Pokémon from list
//   const handleRemove = (id) => {
//     setPhotos(prev => prev.filter(photo => photo.id !== id));
//   };

//   return (
//     <div className="container">
//       <h1>🔍 Pokémon Search</h1>

//       {/* Search Form */}
//       <SearchForm onSearch={handleSearch} />
//        {/* <Accordion/> */}
//       {/* Loading, Error, or Grid */}
//       {loading && <LoadingSpinner />}
//       {error && <ErrorMessage message={error} />}
//       {!loading && !error && photos.length > 0 && (
//         <PhotoGrid photos={photos} onRemove={handleRemove} />
//       )}
//  {/* <h1 className="text-sm bg-red-500">
//     Hello world!
//   </h1> */}

//       {/* Optional Extra Components */}
//       {/* <div className="extras"> */}
//         {/* <DashboardPreview />
//         <Login />
//         <Effects />
//         <HomePage />
//         <Todo /> */}
      
//       {/* </div> */}
      
// // {/* <div>
// //     <DropDown options={data}  onSelection={handleSelect} selection={selection}/>
// // </div> */}
//  </div> 

//   );
// }

// export default App;


//..................................LOGIN..........................................

import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router";
import Login from './week-one-assigment/Login';
import UserPage from './Day-13/assigment/pages/UserPage';
import CounterPage from '../src/Week-04/Day-04/pages/CounterPage';



function App() {
  // const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  // const [query, setQuery] = useState('');
  // const [allPokemon, setAllPokemon] = useState([]);
  // const [selection, setSelection]= useState(null);

  // const handleSelect=(option)=>{
  //   setSelection(option);
  // }

  // const data = [
  //   { title: "Section 1", content: "How can i get my refund" },
  //   { title: "Section 2", content: "Payment Mode" },
  //   { title: "Section 3", content: "Installment" },
  // ];

  // Fetch list of all Pokémon (once)
  // useEffect(() => {
  //   const fetchList = async () => {
  //     try {
  //       const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
  //       const data = await res.json();
  //       console.log("data1222",data);
  //       setAllPokemon(data.results); 
  //     } catch (err) {
  //       setError('Failed to load Pokémon list');
  //     }
  //   };
  //   fetchList();
  // }, []);

  // Handle search input
  // const handleSearch = async (searchTerm) => {
  //   setQuery(searchTerm);
  //   setLoading(true);
  //   setError('');
  //   setPhotos([]);
  //   try {
  //     const filtered = allPokemon
  //     .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  //     .slice(0, 10); // Limit for performance
      
  //   console.log("filtered",filtered)

  //     const promises = filtered.map(async (pokemon) => {
  //       const res = await fetch(pokemon.url);
  //       const data = await res.json();
  //       return {
  //         id: data.id,
  //         title: data.name,
  //         thumbnailUrl: data.sprites.front_default
  //       };  
  //     });

  //     const results = await Promise.all(promises);
  //     setPhotos(results);
  //   } catch (err) {
  //     setError('Failed to fetch Pokémon data.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Remove Pokémon from list
  // const handleRemove = (id) => {
  //   setPhotos(prev => prev.filter(photo => photo.id !== id));
  // };
  

  return (
     <div>
      <h1>Some Wizard</h1>
      <Routes>
        <Route index element={<Login />} />
         <Route path="/dashboard" element={<UserPage />} />
          <Route path="/counter" element={<CounterPage initialCount={10}  />} />
      </Routes>
     
      </div>
    
   );
}

export default App;
