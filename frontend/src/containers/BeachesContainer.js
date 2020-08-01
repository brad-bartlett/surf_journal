import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchBeaches} from '../actions/fetchBeaches'
import Beaches from '../components/Beaches';



export class BeachesContainer extends Component {

    componentDidMount() {
        this.props.fetchBeaches()
        
    }

    render() {
        return(
            <div>
                
                <Beaches beaches={this.props.beaches}/>
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sessions: state.beaches
    }
}
export default connect(mapStateToProps, {fetchBeaches})(BeachesContainer)