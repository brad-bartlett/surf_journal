import React, { Component } from 'react'
import Beaches from '../components/Beaches';



export class BeachesContainer extends Component {


    render() {
        
        return(
            <div>
                
                <Beaches />
            
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         sessions: state.beaches
//     }
// }
export default BeachesContainer