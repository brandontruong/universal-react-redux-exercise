import React, { Component } from 'react';
import { connect } from 'react-redux';

const Index = ({ carOfTheWeek, selectedModel }) => {
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

export default connect(
    mapStateToProps
)(Index)
