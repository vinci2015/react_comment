import React from 'react'
import Comments from '../components/comments/Comments'
import eventProxy from '../lib/event_proxy'
export default class CommentsContainers extends React.Component{

    constructor(props){
        super(props)
        this.state = {models: []}
    }
    componentDidMount(){
        fetch('http://127.0.0.1:5000/comments',
        {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
        })
        .then(res => res.json())
        .then(result => {
            this.setState({models:JSON.parse(result.data)})
        })

        eventProxy.on('ADD_COMMENT',(content,time) =>{
            this.commitComment(content)
        })
    }

    commitComment(content){
        fetch('http://127.0.0.1:5000/commitComment',
        {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body:'{"content":"'+content+'"}'
        })
        .then(res => res.json())
        .then(result => this.setState({ models:this.state.models.concat(JSON.parse(result.data))}))
    }
    render(){
        return (
            <Comments models= {this.state.models}/>
        )
    }

    componentWillUnmount(){
        eventProxy.off('ADD_COMMENT')
    }
}