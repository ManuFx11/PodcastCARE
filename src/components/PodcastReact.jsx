import React, {useEffect, useState} from 'react';
import { getPodcastWordpressGraphQL } from '../services/api-wordpress-js';

export default function PodcastReact(){

    const [data, setData] = useState([]);

    async function getData(){
        const resultados = await getPodcastWordpressGraphQL();
        setData(resultados);
    }
    
    useEffect(() => {

        getData();

    },[]);


    return(
        <React.Fragment>
            {
            data.podcasts.nodes.map(item => {
                return(
                    <>
                        <h1>{item.title}</h1>
                    </>
                )
            })}
        </React.Fragment>
    )
}