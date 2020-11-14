import React, { useEffect } from 'react'
import Sessions from '../components/Sessions'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSessions} from '../actions/fetchSessions'

const SessionsContainer = () => {

    const dispatch = useDispatch();
    
    const sessions = useSelector(state => state.session.sessions);
    
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
