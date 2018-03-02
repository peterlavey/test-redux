import React from 'react';
import {connect} from 'react-redux';

const Carro = ({categories})=> {
    return(<h1>{categories.length}</h1>)
};

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
};

export default connect(mapStateToProps)(Carro);