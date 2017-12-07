import React, { Component } from 'react';
import { connect } from 'react-redux';

const Index = ({ carOfTheWeek, selectedModel }) => {
    return (
        <div>
            <h1>Car of the week</h1>
            <div className="media">
                <div className="media-left">
                    <img src={selectedModel.imageUrl} alt={selectedModel.name} 
                    className="media-object" />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{selectedModel.name}</h4>
                    <div><lable>Price: </lable> {'$' + selectedModel.price.toLocaleString()}</div>
                    <div>{carOfTheWeek.review}</div>
                </div>
            </div>
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
