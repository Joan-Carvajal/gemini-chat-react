import { useState } from "react";


const ChatInput = ({onSubmit}) => {
	const [question, setQuestion] = useState("");
	const handleSubmit =(e) =>{
		e.preventDefault();
		if(question.trim){
				onSubmit(question);
				setQuestion("")
		}
	}
	return (
		<div className="max-w-4xl  mx-auto my-4">
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="question">Ask a question</label>
					<input id="question" type="text" 
					placeholder="Ask a question" 
					className="input input-bordered w-full max-w-4xl"  
					value={question}
					onChange={(e)=> setQuestion(e.target.value)}/>
				</div>
				<button type="submit" className="btn btn-primary mt-3">
					Submit
				</button>
			</form>
		</div>
	)
}

export default ChatInput