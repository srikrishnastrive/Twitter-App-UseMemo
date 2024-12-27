import Tweet from "./Tweet";
import '../Css/TweetList.css';
import { memo } from "react";

function TweetList ({tweets,handleEditTweet}){
    const TweetMemo = memo(Tweet);
    return (
        <ul className="tweet-list">
            {
                tweets.map((tweet)=>(
                    <li className="tweet-like-wrapper" key={tweet.id}>
                        <TweetMemo id = {tweet.id} content={tweet.content} likeCount={tweet.likeCount} createdAt={tweet.createdAt.toString()} handleEditTweet ={handleEditTweet} />
                    </li>
                ))
            }
        </ul>
    )
}


export default TweetList;
