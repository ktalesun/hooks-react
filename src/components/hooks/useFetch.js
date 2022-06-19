import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({data: null, loading: true, error: null});
    const isMounted = useRef(true)

    useEffect(() => {
      return () => {
        isMounted.current = false;
      }
    }, [])
    
    const getFetch = () => {
        fetch(url)
        .then(resp => resp.json())
        .then( data => {

            setTimeout(() => {

                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })
                }else{
                    console.log('setState no se llamó')
                }
                
            }, 3000);
           
        })
    } 


    useEffect(() => {

        setState({data: null, loading: true, error: null})
        getFetch();
        
    }, [url])
    
    return state;

}
