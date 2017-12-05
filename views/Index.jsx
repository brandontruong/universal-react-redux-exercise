import React, { Component } from 'react';
import { connect } from 'react-redux';

const Index = ({ title }) => {
    return (
        <div>
            {title}
        </div>
    )
}

const mapStateToProps = (state) => ({
    title: state.title
})

const mapDispatchToProps = {
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
