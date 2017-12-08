import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getModels, getModel, loadModelDetail } from '../actions/index.jsx';
import PropTypes from 'prop-types';
const Model = ({ selectedModel }) => {
    return (
        <div>
            <h1>Car detail</h1>
            { selectedModel !== undefined &&
                <div className="media">
                    <div className="media-left">
                        <img src={selectedModel.imageUrl} alt={selectedModel.name} 
                        className="media-object" />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{selectedModel.name}</h4>
                        <div><lable>Price: </lable> {'$' + selectedModel.price.toLocaleString()}</div>
                        
                    </div>
                </div>
            }
        </div>
    )
}
Model.propTypes = {
    selectedModel: PropTypes.object.isRequired
}
const mapStateToProps = (state, ownProps) => {
    const { models, dataLoaded } = state;
    if (!dataLoaded) {
        return {
            selectedModel: { price: 0}
        }
    }
    const model = models.find(current => current.id === parseInt(ownProps.params.id));
    return {
        selectedModel: model
    }
};

export default connect(
    mapStateToProps
)(Model)