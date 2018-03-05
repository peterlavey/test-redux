import React, { Component } from 'react';
import { getFood, removeCategory } from '../actions/foodAction';
import { connect } from 'react-redux';

class Recetas extends Component {
    componentWillMount() {
        this.props.getFood();
    }

    render() {
        const categoriesListComponent = this.props.categories.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{category.name}</td>
                    <td>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect" onClick={()=> this.props.removeCategory(category)}>Eliminar</button>
                    </td>
                </tr>
            )
        });

        return (
            <div className="mdl-grid">
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell mdl-cell--4-col">
                    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                        <tbody>
                        {categoriesListComponent}
                        </tbody>
                    </table>
                </div>
                <div className="mdl-layout-spacer"></div>
            </div>
        )
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