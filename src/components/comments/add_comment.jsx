import React from 'react'
import classNames from 'classnames'

import styles from './add_comment.css'
import eventTrigger from '../../lib/event_proxy'
import moment from 'moment'

export default class AddComment extends React.Component {

    constructor(props){
        super(props)
        this.state = {value:''}
    }


    handleSubmit(event){
        event.preventDefault()
        eventTrigger.trigger('ADD_COMMENT',this.refs.myInput.value,moment().format('YYYY.MM.DD'))
        this.refs.myInput.value = ''
    }
    render() {
        return (
            <form className = {classNames(styles.container)} onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    添加评论:   
                <input type="text" ref='myInput'/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}