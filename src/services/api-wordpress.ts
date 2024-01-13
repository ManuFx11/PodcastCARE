//Llamadas a la API de Wordpress
import {type Podcast} from "../types/type-podcast";

/*export async function getPodcastWordpress(){


    const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
    const usuario = "expacioweb";

    const res = await fetch('https://clubdealtorendimientoempresarial.com/wp-json/wp/v2/podcasts?_fields=title,link',{
     method : 'GET',
     headers : {
        "Authorization" : 'Basic '+btoa(usuario+":"+token),
        "Content-Type" : "application/json"
     }
    });

    const data = await res.json();
    return data;
} */


export async function getPodcastWordpressGraphQL() {

    const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
    const usuario = "expacioweb";

    const response = await fetch('https://clubdealtorendimientoempresarial.com/graphql', {
        method: 'post', 
        headers: {
            'Authorization' : 'Basic '+btoa(usuario+":"+token),
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            query: `{
                podcasts {
                nodes {
                  id
                  title
                  content
                  featuredImage {
                    node {
                      mediaItemUrl
                    }
                  }
                }
              }
            }
              `
        })
    });
    const {data} = await response.json(); 
    return data;
}
//Obtengo los IDS para las rutas
export async function getPodcastWordpressRutasID(){

  const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
  const usuario = "expacioweb";

  const response = await fetch('https://clubdealtorendimientoempresarial.com/graphql',{
    method : 'POST',
    headers : {
      'Authorization' : 'Basic '+btoa(usuario+":"+token),
      'Content-Type':'application/json'
    },
    body : JSON.stringify({
        query : `{
          podcasts {
          nodes {
            id
          }
        }
      }
        `
    })
  });

    const {data} = await response.json();
    return data;
}


//Obtengo los IDS para las rutas
export async function getPodcastWordpressID(id : string){

  const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
  const usuario = "expacioweb";

  const response = await fetch('https://clubdealtorendimientoempresarial.com/graphql',{
    method : 'POST',
    headers : {
      'Authorization' : 'Basic '+btoa(usuario+":"+token),
      'Content-Type':'application/json'
    },
    body : JSON.stringify({
        query : `{
          podcast(id: "${id}") {
            id
            title
            content
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            cptPodcasts {
              amazonMusic
              anchorPodcast
              apartadoContenido
              applePodcast
              googlePodcast
              ivoox
              spotifyPodcast
            }
          }
        }
        `
    })
  });
    const {data} = await response.json();
    return data;
}