import React from 'react';

const ChatInputForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        if (message.trim() !== '') {
            onSubmit(message);
            e.target.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="rounded-b-lg bottom-0 inset-x-0 bg-gray-100 border-t border-gray-300 p-4 flex items-center">
            <input
                type="text"
                name="message"
                placeholder="Type your message..."
                className="border rounded-t-lg border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
            >
                Send
            </button>
        </form>
    );
};

export default ChatInputForm;
