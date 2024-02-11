import React, { useState } from 'react';
import ChatInputForm from './ChatInputForm';

const Chat = () => {

    const [messages, setMessages] = useState([]);

    const handleSubmit = (message) => {
        setMessages([...messages, message]);
    };
    return (
        <>
            <div className='w-78 px-32 m-10'>

                <div className="relative min-h-full bg-gray-100 rounded-lg">
                    <header className="bg-blue-500 p-4 text-white rounded-t-lg">Diet Planner </header>
                    <main className="p-4">
                        <h1 className="text-2xl font-bold mb-4">Chat here!</h1>
                        <div className="space-y-4">
                            {messages.map((message, index) => (
                                <div key={index} className="bg-white shadow-md p-4 rounded-md">{message}</div>
                            ))}
                        </div>
                    </main>
                    <ChatInputForm onSubmit={handleSubmit} />
                </div>
            </div>
        </>
    );
};

export default Chat;