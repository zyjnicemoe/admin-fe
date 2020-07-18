import React        from 'react';
import ReactDOM     from 'react-dom';
import {Link}       from 'react-router';

import PageTitle    from 'component/page-title/index.jsx';

const ErrorPage = React.createClass({
    getInitialState() {
        return {
            
        };
    },
    componentDidMount: function(){
       console.log('ErrorPage did mount');
    },
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle pageTitle="出错啦~"/>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <Link to="/">点我返回首页</Link>
                    </div>
                </div>
            </div>
        );
    }
});

export default ErrorPage;
