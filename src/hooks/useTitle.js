import React from 'react';
import { useEffect } from 'react';

const useTitle = title => {
   useEffect(()=>{
    document.title = `${title} - Dragon News`
   },[title])
};

export default useTitle;