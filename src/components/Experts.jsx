import {useState, useEffect} from 'react';

export function CareExpertsBlock(){

    const [experts, setExperts] = useState([]);
    let expertos = [];

    async function fetchExperts(){

        const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
        const usuario = "expacioweb";
        //Peticion
        const response = await fetch('https://clubdealtorendimientoempresarial.com/graphql',{
            method : 'POST',
            headers : {
              'Authorization' : 'Basic '+btoa(usuario+":"+token),
              'Content-Type':'application/json',
            },
            body : JSON.stringify({
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
            })});

            const {data} = await response.json();
            expertos = data;
            console.log(expertos);
    }

    useEffect(() => {
        fetchExperts();
    }, []);

    return(
      <>
        <h1>Prueba</h1>
      </>
    )

}