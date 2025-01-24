

import { useState } from 'react';
import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import fetchChatResponse from './services/api';

function App() {
  
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

const handleQuestionSubmit= async (question) => {
	setLoading(true);
	setResponse(null);
	try {
		const apiResponse= await fetchChatResponse(question);
		setResponse(apiResponse);
	} catch (error) {
		alert("Failed to get response")
	} finally {
		setLoading(false);
	}
};


  return (
    <div >
     <header className="navbar bg-primary">
  <a className="btn btn-ghost text-xl text-white">Gemini Chatbot</a>
  		</header>
			<ChatInput onSubmit={handleQuestionSubmit}/>
			{loading && <h1 className='text-center font-bold'>Loading ...</h1>}
			<ChatResponse  response={response}/>
    </div>
  )
}

export default App
