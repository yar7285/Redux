/**
 * Created by Yaroslav on 23.12.2016.
 */
import React from 'react';
import { Link } from 'react-router';

export default class ErrorPage extends React.Component {
    static path = "/";

    render() {
        return(
            <div className="alert alert-danger">
               <h3>Страница не найдена!</h3>
                <p>Вернутся на <Link to='/'>главную</Link></p>
            </div>
        );
    }
}
