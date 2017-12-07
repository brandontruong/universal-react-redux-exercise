import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getModels, getModel } from '../actions/index.jsx';

const Search = ({ makes, modelsByMake, onMakeChange, onModelChange, selectedMakeId, selectedModelId }) => {
    return (
        <div>
            <h1>Search car</h1>
            <div className="search form-inline">
                <div className="form-group">
                    <label for="makes">Make: </label>
                    <select id="makes" className="form-control" onChange={(e) => onMakeChange(e.target.value)}>
                        <option key={'make_option'} value='0'>Select Make</option>
                        {makes.map((make) => (
                            <option key={'make' + make.id} value={make.id}>{make.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label for="models">Model: </label>
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

const mapStateToProps = (state) => {
    const { makes, models, selectedMakeId, selectedModelId } = state;
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