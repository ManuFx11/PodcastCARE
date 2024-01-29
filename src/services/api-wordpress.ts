//Llamadas a la API de Wordpress
import {type Podcast} from "../types/type-podcast";

const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
const usuario = "expacioweb";
const URL = "https://clubdealtorendimientoempresarial.com/graphql";

export async function getProfesionalesWordpressGraphQL(){

    const response = await fetch(URL,{
        method : 'POST',
        headers : {
          'Authorization' : 'Basic '+btoa(usuario+":"+token),
          'Content-Type':'application/json'
        },
        body : JSON.stringify({
            query : `{
              profesionales {
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
            }`
        }),
    });

      const {data} = await response.json();
      return data;

}

export async function getPodcastWordpressGraphQL() {

    const response = await fetch(URL, {
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