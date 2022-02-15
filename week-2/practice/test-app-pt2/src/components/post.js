import React from "react";
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';


//UPDATING STATE VIDEO NOTES
export default class Post extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            comments: props.comments, 
            content: props.content,
            count: 0 //Count only used in example of what not to do on line 23
        };
    } //Constructor is only place we should directly set state
    render() {
        // let tempComments = this.state.comments;
        // setTimeout(() => this.setState({content: 'state updated', comments: []}, () => setTimeout(() => this.setState({comments: tempComments}), 2000)), 2000); //Updates comments too. comments: [] is not the second parameter or callback! It's part of the first param. Second arrow function marks start of second param, which is a callback. Note: Second param has another callback inside. This is basically saying once first param is updated, I want to do the second param to it. Will bounce back and forth between original content and comments and state updated. Seems infinite? Simpler way to come?

        // setTimeout(() => this.setState({content: 'state updated'}), 2000); //First part in ({}) is the object to update the values of the state. Prevents max update depth exceeded error. Doesn't replace entire state object, just matching values. Can tell because comments not changed. Changes 'This is my post content!' into 'state updated' message after 2 sec. Will be done outside of render() method in future

        // DO NOT DO THIS in place of lines 18-19:
        //Don't refer to this.state in setState
        //this.setState({count: this.state.count + 1}) 

        // DO THIS INSTEAD: 
        //Use overridden version of this.setState and take previous state as an argument
        setTimeout(() => this.setState(state/*, props*/ => ({count: state.count + 1}), () => console.log(this.state.count)), 2000);
        //Return count: xxx as an object. State in object represents most updated state. Can also add props as a second param and refer to either in ({count: })
        


        let comments = []; 
        if (this.state.comments) { 
            for (let comment of this.state.comments) { 
                comments.push(<Comment {...comment} />)
            }
        }

        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    {this.state.content}
                </div>
                <div className="card-footer">
                    <LikeButton />
                    &nbsp;
                    <ReplyButton />
                    &nbsp;
                    {comments} 
                </div>
            </div>
        );
    }
}


//STATE VIDEO NOTES
// export default class Post extends React.Component {
//     constructor(props) { //Props Constructor needed to explicitly accept props (doing it implicitly isn't dynamic)
//         super(props); //Props passed into super constructor, always needs to be first line in constructor, so we can use props anywhere inside component
//         this.state = {
//             //Pass in properties we want available in the state. Later referred to by news-feed.js
//             comments: props.comments, //Props added to State so State is source of truth of what data our component should display
//             content: props.content
//         };
//     }
//     render() {
//         let comments = []; //Start array of comments
//         if (this.state.comments) { //Checks State, checks if there are comments inside state's comments property 
//             for (let comment of this.state.comments) { //If yes, iterate through each one
//                 comments.push(<Comment {...comment} />) //Then push each comment to comments array. Puts JSX elements into array. {...comment} is current comment for this iteration of for loop, not one specific comment. Comments array will contain any comments as a JSX element that were inside the state of this post
//             }
//         }

//         return (
//             <div className="card w-75">
//                 <div className="card-header bg-primary text-white">
//                     Username and Time
//                 </div>
//                 <div className="card-body">
//                     {this.state.content}
//                 </div>
//                 <div className="card-footer">
//                     <LikeButton />
//                     &nbsp;
//                     <ReplyButton />
//                     &nbsp;
//                     {comments} {/* Replace <Comment /> using JS interpolated comments array. Pulls in from comments.push(<Comment {...comment} />) in for loop above*/}
//                 </div>
//             </div>
//         );
//     }
// }


//PROPS VIDEO NOTES
//Props object
// export default class Post extends React.Component {
//     render() { 
//         // Create objects here - these are hardcoded, not dynamic
//         let commentOne = {
//             content: "This is Tommy's comment",
//             username: 'Tommy',
//             date: '12-12-2018'
//         };
//         let commentTwo = {
//             content: "This is Sammy's comment",
//             username: 'Sammy',
//             date: '12-17-2018'
//         };
//         let commentThree = {
//             content: "This is Sally's comment",
//             username: 'Sally',
//             date: '12-19-2018'
//         };

//         return (
//             <div className="card w-75">
//                 <div className="card-header bg-primary text-white">
//                     Username and Time
//                 </div>
//                 <div className="card-body">
//                     This is where our content goes!
//                 </div>
//                 <div className="card-footer">
//                     <LikeButton />
//                     &nbsp;
//                     <ReplyButton />
//                     &nbsp;
//                     <Comment {...commentOne}/> {/* Pass in props object here, format
//                     {... } Three dots are called spread operator, allowing you to pass props in without overwriting anything already in the props object.*/}
//                     &nbsp;
//                     <Comment {...commentTwo}/>
//                     &nbsp;
//                     <Comment {...commentThree}/>
//                 </div>
//             </div>
//         );
//     }
// }

//Using Props, but not Props as an object
// export default class Post extends React.Component {
//     render() {
//         return (
//             <div className="card w-75">
//                 <div className="card-header bg-primary text-white">
//                     Username and Time
//                 </div>
//                 <div className="card-body">
//                     This is where our content goes!
//                 </div>
//                 <div className="card-footer">
//                     <LikeButton />
//                     &nbsp;
//                     <ReplyButton />
//                     &nbsp;
//                     <Comment content='This is my post.'/> {/* Can choose any name for prop attribute as long as not reserved */}
//                     &nbsp;
//                     <Comment content='This is another post.'/>
//                     &nbsp;
//                     <Comment content='More posts from me!'/>
//                 </div>
//             </div>
//         );
//     }
// }