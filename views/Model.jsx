import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getModels, getModel, loadModelDetail } from '../actions/index.jsx';

const Model = ({ selectedModel }) => {
    return (
        <div>
            { selectedModel !== undefined &&
                <div>
                    <div>
                        <lable>Name: </lable> {selectedModel.name}
                    </div>
                    <div><lable>Price: </lable> {'$' + selectedModel.price.toLocaleString()}</div>
                    <img src={selectedModel.imageUrl} alt={selectedModel.name}/> 
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const model = state.models.find(current => current.id === parseInt(ownProps.params.id));
    return {
        selectedModel: model
    }
};

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Model)