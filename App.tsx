import { useState } from "react";
import { Tweet } from "./components/Tweet";
import { AppRoutes} from "./routes"

function App() {
  /*const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  function createTweet() {
    setTweets([... tweets, 'Tweet 5'])  //... ao invés de selecionar um por um & cada click é adicionado 'Tweet 5'
  } */

  return (
    <AppRoutes />
  );
}
/*  <div>
    {tweets.map(tweet => { 
      return <Tweet text={tweet} />
    })}

    <button
     onClick={createTweet}
     style={{
      backgroundColor: 'rgb(32,64,23)',
      border: 0,
      padding: '6px 12px',
      color: '#fff'
     }}
     >
      Adicionar Tweet</button>
   </div>
    ); */
//}

export default App