
import { useState, useEffect } from "react";

// Exercice avec l'api gratuite jsonplaceholder

function AppelApi() {
    const [postDatas, setPostDatas] = useState({});
    const [error, setError] = useState(null);

    //syntaxe .then 
    //--------------
    // useEffect(() => 
    // {
    //   // Appel API
    //   fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setPostDatas(json); // je mets les données de l'API dans l'état
    //     });
    // }, []);



    //syntaxe async / await
    //---------------------

    // 1 j'ouvre mon useEffect
    useEffect(() => {
        // 2 je crée une fonction async
        async function fetchData() {
            try {
                //3 je récupère mes données avec await (l'url passé me permet de récupérer les données de tous les posts)
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const datarecup = await response.json()
                setPostDatas(datarecup)
            } catch (err) {
                console.log(err)
                setError(true)
            }
        }
        // 4 j'appelle la fonction asynchrone
        fetchData()
    }, [])
 
console.log(postDatas)

return (   
    <div>
    {postDatas.length > 0 ? (
      <div>
        <h1>Données API</h1>
        <ul>
          {postDatas.map((post) => (
            <li key={post.id}>
              <h2>Titre :</h2> {post.title}
              <p><strong>Commentaire :</strong> {post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
}
export default AppelApi;



















