import React, { Component } from 'react';
import { getFood, removeCategory } from '../actions/foodAction';
import { connect } from 'react-redux';

class Recetas extends Component {
    componentWillMount() {
        this.props.getFood();
    }

    render() {
        const categoriesListComponent = this.props.categories.map((category, index) => {
            return <li key={index}>
                {category.name}
                <button onClick={()=> this.props.removeCategory(category)}>Eliminar</button>
            </li>
        });

        return <ul>{categoriesListComponent}</ul>
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getFood() {
            dispatch(getFood())
        },
        removeCategory(category) {
            dispatch(removeCategory(category))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recetas)