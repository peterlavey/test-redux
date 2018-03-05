import React from 'react';
import {connect} from 'react-redux';

const Carro = ({categories})=> {
    return(
        <div>
            <h1>{categories.length}</h1>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
};

export default connect(mapStateToProps)(Carro);