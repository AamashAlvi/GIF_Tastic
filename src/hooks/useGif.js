import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

// if you want to access the env file then you have to write (process.env.)
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// this is the url which will fetch  the data of the API
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

// tag is props which is passed from the tag.js
const useGif = (tag) => {
    const [gif, setGif] = useState('');

    // this useState is used to show the spinner and initially it is set false.
    // that means it does not show up
    const [loading, setLoading] = useState('false');

  
    // tag is passed in it beacuse iin fetching the URL the tag keyword is used
    async function fetchData(tag) {
      // here the setLoading is set true so that the spinner is seen till the image is fetched.
      setLoading(true);
      
     // this will  fetch the URl and it will return a promise in line number 32.
    // it returns the file in json format we do not need to convert it into json format.
    // use destructuring we have iterated into the first data

    // this line tells us that if tag is true that means you have a value written in the input then it will apply this`${url}&tag=${tag}` 
    // and if there is no value in the iput that means it has no tag that means it is a print a random GIF then procedue to this (url)
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);

      
      //  we have iterated directly to the image
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);

      // setLoading is set false because the image of the gif is got then the laoder must stop.
      setLoading(false);
    }
    
    // useEffect hook is used to call the API  only once that is why the dependency is is a black array.
    // the dependency is black show that the UI only renders once and the GIF is shown
    // if there was no dependency then the function will be called on every render and there will be no GIF shown only the loader will be seen.
    useEffect( () => {
      fetchData('car');
    },[] )

    return {gif,loading, fetchData};
}

export default useGif
