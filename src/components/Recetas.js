import React, { Component } from 'react';
import { getFood } from '../actions/foodAction';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
};

class Recetas extends Component {
    componentWillMount() {
        this.props.dispatch(getFood());
    }

    render() {
        const categoriesListComponent = this.props.categories.map((category, index) => <li key={index}>{category.name}</li>);

        return <ul>{categoriesListComponent}</ul>
    }
}

export default connect(mapStateToProps)(Recetas)