import axios from "axios";


const fetchChatResponse =async (question) => {
const API_URL= "http://localhost:8080/api/qna/ask";
	try {
		const response= await axios.post(API_URL,{question})
		return response.data;
	} catch (error) {
		console.error(error);
		throw error();
		
	}

}

export default fetchChatResponse