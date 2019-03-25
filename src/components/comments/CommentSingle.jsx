import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './CommentSingle.css'

class CommentSingle extends React.Component{
    render(){
        const {
            content,
            time
        } = this.props
        return(
            <div className={classNames(styles.container)}>
            <div className={classNames(styles.content)}> {content}</div>
            <div className={classNames(styles.time)}>{time}</div>
            </div>
        )
    }
}

CommentSingle.propTypes = {
    content : PropTypes.string.isRequired,
    time    : PropTypes.string.isRequired
}
export default CommentSingle