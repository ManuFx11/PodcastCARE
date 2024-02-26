import { useEffect, useState} from 'react'
import { getPodcastWordpressGraphQL } from '../../services/api-wordpress-js';

const ReactPodcast = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const resultados = await getPodcastWordpressGraphQL();
        setData(resultados.podcasts.nodes);
        //Mejorar el loading
        setLoading(false);
    }

    useEffect(() => {
        getData();
    },[]);

    if(loading){
        return(
            <h1 className="text-black text-xxl">Cargando...</h1>
        )
    }else{
        return (
            <div id="listado-podcast">
            {
                data.map((item) => {
                    let imagen = item.featuredImage.node.mediaItemUrl;
                    return(
                        <div>
                        <img src={imagen} width="100%" height="270px" alt="Podcast"/>
                            <div class="item-podcast">
                            <h3>{item.title}</h3>
                            <hr/>
                            <p>En este podcast podras obtener toda la información acerca de este tema tan novedoso en el mercado.</p>
                            <a href={`podcasts/${item.id}`}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg> Reproducir</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
          )
        
    }


}

export default ReactPodcast