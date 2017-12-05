import React, { Component } from 'react';
import { connect } from 'react-redux';

// class Index extends Component {
//     render() {
//         console.log(carOfTheWeek);
//         return (
//             <p>
//                 Current: <strong>About new stuff</strong>
//             </p>
//         ); 
//     }
// }

const Index = ({ carOfTheWeek, selectedModel }) => {
    console.log(carOfTheWeek);
    console.log(selectedModel);
    return (
        <div>
            <h1>Car of the week</h1>
            <div>{selectedModel.name}</div>
            <div>{selectedModel.price}</div>
            <div>{carOfTheWeek.review}</div>
            <img src={selectedModel.imageUrl} alt={selectedModel.name}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { carOfTheWeek, models } = state;
    const selectedModel = models.find(current => current.id === carOfTheWeek.modelId);
    return {
        carOfTheWeek,
        selectedModel
    }
};

const mapDispatchToProps = {
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
