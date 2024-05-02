import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: input,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer YOUR_OPENAI_API_KEY',
          },
        }
      );
      setResponse(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='mt-4 '>
      <input
      className='mr-2'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div>{response}</div>
    </div>
  );
};

export default Chat;
