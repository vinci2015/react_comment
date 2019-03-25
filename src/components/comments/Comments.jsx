import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import CommentSinglel from './CommentSingle'
import eventProxy from '../../lib/event_proxy'


function genCommentSingle(model) {
    return(
        <CommentSinglel 
            content={model.content}
            time = {model.time}
            />
    )
}

class Comments extends Component{

    genCommentSingle1(model){
        return(
            <CommentSinglel 
                content={model.content}
                time = {model.time}
                />
        )
    }

    
    render(){
        const {
            models
        } = this.props
        const datas = models.map(this.genCommentSingle1,models)
        return(
            <div>
            <ul>
                {datas}
            </ul>
            </div>
        )
    }
}

Comments.propTypes = {
    models : PropTypes.array.isRequired
}

export default Comments;