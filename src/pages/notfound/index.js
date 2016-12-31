/**
 * Created by Yaroslav on 18.12.2016.
 */
import React from 'react';
import { Link } from 'react-router';
export default class Error extends React.Component {


    render() {
        return(
            <div className="alert alert-danger">
                <h1>Страница не найдена</h1>
                <p>Перейти на <Link to="/">главную</Link></p>
            </div>
        );
    }
}
