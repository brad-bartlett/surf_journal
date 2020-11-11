import React, { Component } from 'react'
import Beaches from '../components/Beaches';
import {connect} from 'react-redux'
import {fetchBeaches} from '../actions/fetchBeaches'



export class BeachesContainer extends Component {

    componentDidMount() {
        console.log('featch beach')
        this.props.fetchBeaches()
    }

    render() {
        
        return(
            <div>
                <Beaches beaches={this.props.beaches} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        beaches: state.beach.beaches
    }
}

export default connect(mapStateToProps, {fetchBeaches})(BeachesContainer)