import React, { useState } from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif';



// this is function which calls the selfmade hook and shows a GIF which we want or which we write in the input Tag.
const Tag = () => {
  // this useSate hook is used to set the input field .
  // the NBA written is the by default text sent in the input field that is why wt will show the NBA gif's first.
  const [tag, setTag] = useState('NBA');


// these parameters will be fetcheed from the selfmade Hook.
// and they will be used in the Tag.js commponent.
// Tag is  passed in the useGif Hook beacuse it need to be used in the useGif.js thats why we have passed in it.
  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      {/* the tag is send so that what ever you right in the input tag will be shown in the heading. */}
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

    {/*This line tells is that if teh loadinng is true then show the spinner if the laoding is false then show the GIF.  */}
    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        // this onChange event  tells us  that what ever changes we will do in the input field it will be saved as it is in the setTag().
        onChange={(event) =>  setTag(event.target.value)}
        // the default value set in the tag which is the NBA will be saved in the value
        value={tag}
      />
      

      <button onClick={() => fetchData(tag)}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Tag
