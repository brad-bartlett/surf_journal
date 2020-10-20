import React from 'react'
import Sessions from '../components/Sessions'
import SessionForm from '../components/SessionForm'
// import {connect} from 'react-redux'
// import {fetchSessions} from '../actions/fetchSessions'

const SessionsContainer = ({currentBeach}) => {

    // componentDidMount() {
    //     this.props.fetchSessions()
    // }

    console.log('currentBeach', currentBeach)

        return (
            <div className="sessions">
                {currentBeach &&  
                <SessionForm currentBeach={currentBeach}/> }
                <Sessions currentBeach={currentBeach}/> 
            </div>
        )
    
}

// const mapStateToProps = state => {
//     return {
//         sessions: state.sessions
//     }
// }
// export default connect(mapStateToProps, {fetchSessions})(SessionsContainer)
export default SessionsContainer;
