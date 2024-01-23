import {useState} from 'react';

export default function CareExperts(){

    const [experts, setExperts] = useState();

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
            setExperts(data);
    }

    useEffect(() => {
        fetchExperts();
    }, []);

    return(
        <>
          {experts.map((item) => {
            return(
                <h1>{item.title}</h1>
            )
          })}
        </>
    )

}