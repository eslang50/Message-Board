import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:3000');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);
  
  return (
    <>
      <h1>Messages</h1>
      <form method="POST" action="http://localhost:3000/new" >
        <input type="text" name="message" placeholder='Enter message text' />
        <input type="text" name='name' placeholder='Enter name' />
        <button type='submit'>Submit</button>
      </form>
      <div className='message-board'>
        { 
          messages.map(message => 
            <div key={messages.indexOf(message)} className='message'>
                <p>User: {message.user}</p>
                <p>Message: {message.text}</p>
                <p>Date: {message.added}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
