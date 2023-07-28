
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


// this is a function which calls the selfmade Hook and shows a random GIF in the UI
const Random = () => {

// these parameters will be fetcheed from the selfmade Hook.
// and they will be used in the Random.js commponent
  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

    {/*this line says if loading is true then how the spinner and if the loading is false show the image  */}
    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      

      {/* this inClick function is called so that to generate random GIF */}
      <button onClick={() => fetchData()}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Random
