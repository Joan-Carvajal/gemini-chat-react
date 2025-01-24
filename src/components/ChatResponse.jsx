const ChatResponse = ({ response }) => {
  
  if (!response || typeof response !== 'object') {
    return null;
  }

  const { candidates, usageMetadata } = response; //
	
  return (
    <div className="max-w-4xl mx-auto my-4">
      <h3>Response</h3>

      {candidates?.map((candidate, index) => (
        <div className="card bg-base-100 max-w-4xl shadow-xl" key={index}>
          <div className="card-body">
            <h2 className="card-title">Candidate {index + 1}</h2>
            <p>{candidate?.content?.parts?.[0]?.text || 'No text available'}</p>
            <h6>Citations:</h6>
            <ul>
              {candidate?.citationMetadata?.citationSources?.map((source, idx) => (
                <li key={idx}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.url}
                  </a>{' '}
                  (Indexes: {source.startIndex} - {source.endIndex})
                </li>
              )) || <li>No citations available</li>}
            </ul>
          </div>
        </div>
      ))}
      <h4>Usage Metadata</h4>
      <p>Prompt Tokens: {usageMetadata?.promptTokenCount || 'N/A'}</p>
      <p>Response Tokens: {usageMetadata?.candidatesTokenCount || 'N/A'}</p>
      <p>Total Tokens: {usageMetadata?.totalTokenCount || 'N/A'}</p>
    </div>
  );
};

export default ChatResponse;