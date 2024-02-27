const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
const usuario = "expacioweb";
const URL = "https://clubdealtorendimientoempresarial.com/graphql";


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