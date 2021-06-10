import React, { Component } from 'react';
import Tweet from './Tweet.jsx';
import TweetForm from './TweetForm.jsx';


class Feed extends Component {
	constructor(props){
		super(props)
	}

    render() {
		 const {tweets = [], onLike, onComments, onReply }= this.props ;
        return (
            <div className="feed">
                <TweetForm />
					 {tweets.map(({user={}, creareAt, content, _id, statistic})=>
					 <Tweet 
					 key={_id}
					 user={user} 
					 creareAt={creareAt} 
					 content={content} 
					 id={_id}
					 statistic={statistic}
					 onLikeClick={onLike}
					 onCommentClick={onComments}
					 onReplyClick={onReply}
					 />)}
					 {/*{tweets.map(e=><Tweet {...e}/>)} */}
            </div>
        );
    }
}

export default Feed;