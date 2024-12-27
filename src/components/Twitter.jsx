import { memo, useCallback, useState } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";


function Twitter(){
    const intialTweets = [
        { id: 1, content: "Just finished my morning run! Feeling great. 🏃‍♂️💪", likeCount: 120,createdAt:new Date() },
        { id: 2, content: "Learning React is so much fun! 🚀", likeCount: 250 ,createdAt:new Date()},
        { id: 3, content: "Coffee is life. ☕️ Who agrees?", likeCount: 400,createdAt:new Date() },
        
    ];
    const [tweets,setTweets] = useState(intialTweets);
   
    const MemoizedAddTweet = memo(AddTweet);

    const handleTweets = useCallback((text) =>{
        console.log(text,"from main tweet")
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id+1 : 0;
        setTweets([...tweets,{id:nextId,content:text,likeCount:Math.floor(Math.random()* 10),createdAt:new Date()}]);
    },[tweets]);

    const handleEditTweet = useCallback((updatedTweet) => {
        setTweets((prevTweets) =>
            prevTweets.map((tweet) =>
                tweet.id === updatedTweet.id ? updatedTweet : tweet
            )
        );
    },[tweets]);
    
    const sortTweets = useCallback(() =>{
        tweets.sort((t1,t2)=> t2.createdAt.getTime() - t1.createdAt.getTime());
        setTweets([...tweets]);
    },[tweets]);
      
    
      return (
        <>
          <MemoizedAddTweet handleTweets={handleTweets} />
          <button onClick={sortTweets}>Sort Tweet at Created At</button>
          <TweetList tweets={tweets} handleEditTweet={handleEditTweet}/>
        </>
      )
}

export default Twitter;
