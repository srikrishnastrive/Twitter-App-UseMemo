import { useState } from 'react';
import '../Css/Tweet.css';

function Tweet({ id,content, likeCount, createdAt,handleEditTweet }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(content);

    const handleSave = () => {
        if (editContent !== content) {
            handleEditTweet({
                id,
                content: editContent,
                likeCount,
                createdAt, 
            });
        }
        setIsEditing(false);
    };

    return (
        <div className="tweet-wrapper">
            <div className='tweet-content-row'>
                <div className="tweet-content">
                    {isEditing ? (
                        <input
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        />
                    ) : (
                        <span>{editContent}</span> // Display content when not editing
                    )}
                </div>
                <button onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>
                    {isEditing ? "Save" : "Edit"}
                </button>
            </div>
            <div className="like-createdAt-wrapper">
                <div className="likes">{likeCount} likes</div>
                <div className="created-at">
                    <b>Tweeted at</b> {createdAt}
                </div>
            </div>
        </div>
    );
}

export default Tweet;
