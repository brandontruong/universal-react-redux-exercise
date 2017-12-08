import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getModels, getModel } from '../actions/index.jsx';
import PropTypes from 'prop-types';

const Search = ({ makes, modelsByMake, onMakeChange, onModelChange, selectedMakeId, selectedModelId }) => {
    return (
        <div>
            <h1>Search car</h1>
            <div className="search form-inline">
                <div className="form-group">
                    <label htmlFor="makes">Make: </label>
                    <select id="makes" className="form-control" onChange={(e) => onMakeChange(e.target.value)}>
                        <option key={'make_option'} value='0'>Select Make</option>
                        {makes.map((make) => (
                            <option key={'make' + make.id} value={make.id}>{make.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="models">Model: </label>
                    <select id="models" className="form-control"
                        onChange={(e) => onModelChange(e.target.value)}>
                        <option key={'model_option'} value='0'>Select Model</option>
                        {modelsByMake.map((model) => (
                            <option key={'model' + model.id} value={model.id}>{model.name}</option>
                        ))}
                    </select>
                </div>
                <Link to={'/make/model/' + selectedModelId}
                    className={"btn btn-default" + ((selectedModelId > 0) ? '' : ' disabled')}>
                    Search
            </Link>
            </div>
        </div>
    )
}
Search.propTypes = {
    makes: PropTypes.array.isRequired,
    modelsByMake: PropTypes.array.isRequired,
    onMakeChange: PropTypes.func.isRequired,
    onModelChange: PropTypes.func.isRequired,
    selectedMakeId: PropTypes.number,
    selectedModelId: PropTypes.number
}
const mapStateToProps = (state) => {
    const { makes, models, selectedMakeId, selectedModelId, dataLoaded } = state;
    if (!dataLoaded) {
        return {
            makes: [],
            modelsByMake: []
        }
    }
    let modelsByMake = [];
    if (selectedMakeId > 0) {
        modelsByMake = models.filter(current => current.makeId === selectedMakeId);
    }
    return {
        makes,
        modelsByMake,
        selectedMakeId,
        selectedModelId
    }
};

const mapDispatchToProps = {
    onMakeChange: getModels,
    onModelChange: getModel
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)