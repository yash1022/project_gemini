
import { useEffect, useState, useRef, useLayoutEffect } from 'react';

import './App.css';
import Middlebox from './COMPONENTS/Middlebox';
import Navbar from './COMPONENTS/Navbar';

import "../src/COMPONENTS/searchbar.css"







const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyAHCdcf6TLb3TbRwLkmBiPC6wdP-20GP4I');

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

function App() {
 
  const [Prompt,SetPrompt]=useState('');
  const [Message,SetMessage]= useState([]);

  const [Loading, setLoding]= useState(false);
  const containerRef = useRef(null); 


  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [Message,Loading]);


 
 const handleClick = async()=>{
  console.log("handleClick")


  

 

  try
  {
      const userMessage= {role:'user', parts:[{text:Prompt}]}
     
      SetMessage((prev)=>[...prev,userMessage])

      setLoding(true)
      SetPrompt('')


      const chat = model.startChat({history:Message})
      let result = await chat.sendMessageStream(userMessage.parts[0].text);



      let modelMessage= {role:'model', parts:[{text:''}]}

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        modelMessage.parts[0].text+= chunkText
      }

      SetMessage((prev)=>[...prev,modelMessage])

      setLoding(false)

      console.log(Message)
   }
  catch(e)
  {
    console.log(e)
    alert('An error occurred while generating text')
  }
}


 return(
    <>
    <Navbar prop={()=> SetMessage([])}></Navbar>

    {
       Message.length ? (<div className='content-box' 
         
        ref={containerRef}
       
        
        style={{
       
        height:'460px',
        width:'900px',
        marginLeft:"300px",
        padding:'20px',
        overflowY:'scroll'
       }} >
        {
          Loading?(<p style={{color:'white'}}>Thinking....</p>):
          
          (

            Message.map((message, index)=>(

              <div key={index} style={{backgroundColor: message.role==='user'? "#303030":null, width:message.role==='user'?'fit-content':null, borderRadius:'10px', paddingLeft:message.role==='user'?'5px':null, paddingRight:message.role==='user'?'5px':null,marginLeft:message.role==='user'?'auto':null}}>
               
               {

                  message.parts.map((part, idx) => (
                    <p key={idx} style={{ marginBottom: '15px', fontFamily: '"Poppins", sans-serif', color: 'white' }}>
                      {part.text}
                    </p>
                  ))



               }


              </div>




            ))





          )
        }
        
        
        
        
        </div>)
        
        :(<Middlebox></Middlebox>)
    }

   
    <div className="search-container">
                <input type="text" className="search-bar" placeholder="Enter your prompt here..." value={Prompt} onChange={(e)=>SetPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                      handleClick();
                  }
              }}/>
                <button className="search-button" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                    </svg>

                </button>
    </div>
    </>
    
  )
}

export default App;
