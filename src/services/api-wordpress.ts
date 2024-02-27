//Llamadas a la API de Wordpress

const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
const usuario = "expacioweb";
const URL = "https://clubdealtorendimientoempresarial.com/graphql";

//Datos de Prueba
const token2 = "UPUh XOGD zNtM sB5O ZYsF s59V";
const usuario2 = "Prueba";
const URL2 = "https://escuelanemomarlin.com/graphql";

export async function pruebaNemo(){

  const response = await fetch(URL2,{
      method : 'POST',
      headers : {
        'Authorization' : 'Basic '+btoa(usuario+":"+token2),
        'Content-Type':'application/json'
      },
      body : JSON.stringify({
          query : `{
            posts {
              nodes {
                id
                title
                slug
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