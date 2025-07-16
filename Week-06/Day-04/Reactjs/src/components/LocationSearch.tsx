import React,{useState, Fragment} from 'react';
import type { Place } from '../api/Place';
import { search } from '../api/search';

interface LocationSearchProps{
    onPlaceClick: (place:Place)=> void;
}

function LocationSearch({onPlaceClick}){
    const [term, setTerm] = useState("");
    const [places, setPlaces]= useState<Place[]>([]);

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log("search",term);   

       const results= await search(term); 
       setPlaces(results);  
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label className='font-bold' htmlFor="term">
                Search
            </label>
            <input className='border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full' id="term" value={term} onChange={e=>setTerm(e.target.value)}
            />
        </form>
        <h1 className='font-bold mt-6'>Found Locations</h1>
        <div className='grid grid-cols-[1fr_40px] gap-2 mt-2 items-center'>{
            places.map(place=>{
                return < Fragment key={place.id}>
                  <p className='text-sm'>{place.name}</p>
              <div>
                   <button
                  className='bg-amber-600 text-xs text-black font-bold py-1' onClick={()=>onPlaceClick(place)}
                  > Go
                  </button>
              </div>
                  <div className='border-b w-full col-span-2'/>
                   
                </Fragment>
            })}</div>
    </div>
  )
}

export default LocationSearch;
   //nominatim.org/release-docs/develop/api/Search/ 