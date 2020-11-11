import React, { useEffect } from 'react'
import Sessions from '../components/Sessions'
import {fetchSessions} from '../actions/fetchSessions'
import { useDispatch, useSelector } from 'react-redux';

export const SessionsContainer = () =>  {

    const sessions = useSelector((state ) => state.session.sessions);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSessions);
    }, [dispatch])
        
    return (
        <div className="sessions">
            <Sessions sessions={sessions}/> 
        </div>
    )
}
