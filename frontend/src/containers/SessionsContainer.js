import React, { Component, useEffect } from 'react'
import Sessions from '../components/Sessions'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSessions} from '../actions/fetchSessions'

const SessionsContainer = () => {

    const dispatch = useDispatch();
    const sessions = useSelector(state => state.session.sessions)
    useEffect(() => {
        dispatch(fetchSessions());
    }, [dispatch]);
    return(
        <div>
            <Sessions sessions={sessions} />
        </div>
    )
}

export default SessionsContainer;

/* export class SessionsContainer extends Component {

    componentDidMount() {
        console.log('this.', this.props);
        if(this.props) {
            this.props.fetchSessions()
        }

    }
 
    render() {
        
        return(
            <div>
                <Sessions sessions={this.props.sessions} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        sessions: state.session.sessions
    }
}

export default connect(mapStateToProps, {fetchSessions})(SessionsContainer) */