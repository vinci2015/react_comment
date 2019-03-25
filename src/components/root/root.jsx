import React from 'react'
import classNames from 'classnames'
import CommentContainer from '../../containers/comments'
import AddComment from '../comments/add_comment'

import styles from './root.css'

export default class Root extends React.Component{


    render(){
        return(
            <div className={classNames(styles.root)}>
            <h1>hello world</h1>
            <CommentContainer></CommentContainer>
            <AddComment></AddComment>
            </div>
        )
    }
}