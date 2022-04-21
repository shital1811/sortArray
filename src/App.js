import {useEffect , useState} from 'react';

import './App.css';

function App() {
  const[data,setData]= useState([]);
  useEffect(()=>{
    const fetchData=()=>{
      fetch("https://gorest.co.in/public/v2/comments")
      .then(response=>response.json())
      .then(json=>
        {
          const result=json.sort((a,b)=>a.name.localeCompare(b.name))
          setData(result);
        })
       .catch(e=>{
         console.log("error",e)
       })
    }
    fetchData();
    console.log(data);
    
  
  },[])  
  return (
    <div className="App">
      
      <ul>
        {
           data ? data.map((item,i)=>{
             return(
               <div>
                 <li>{item.name}</li>
               
               </div>
               
           )

          }) : "no data"
        }

      </ul>
      
    </div>
  );
}

export default App;
