import { useState } from "react";


function AddTweet({handleTweets}){
    const [input,setInput] = useState('');
    return (
        <>
            <input
             placeholder="Add new tweet..."
             value={input}
             onChange={(e)=> setInput(e.target.value)}
             />
             <button
                onClick={() => {
                    console.log(input);
                    handleTweets(input); // Call handleTweets
                    setInput('');        // Reset input field
                }}
            >
                Tweet
            </button>
        </>
    )
}

export default AddTweet;
