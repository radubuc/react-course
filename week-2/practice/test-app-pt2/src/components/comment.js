import React from "react";
import ReplyButton from './reply-button'; //Comment must be able to access both Reply and Like Button
import LikeButton from "./like-button";

export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    Comment content
                </div>
                <div className="card-footer">
                    <LikeButton />
                    &nbsp;
                    <ReplyButton />
                </div>
            </div>
        );
    }
}