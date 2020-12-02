import React from "react";
import MyListItem from "./MyListItem";

const MyList = (props) => {
    const myListMap = props.myList.items.map((element) => {
        return (
            <MyListItem
                key={element.myList_id}
                item={element}
                removeFromMyList={props.removeFromMyList}
                commentMovie={props.commentMovie}
                rateMovie={props.rateMovie}
            />
        )
    })

    return (
        <div className="myList-container">
            <div className="myList">
                <h2 id="myList-header">My List</h2>
                {myListMap}
            </div>
        </div>
    )
}
export default MyList