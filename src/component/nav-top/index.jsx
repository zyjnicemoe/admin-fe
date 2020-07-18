import React    from 'react';
import ReactDOM from 'react-dom';

import MMUtile  from 'util/mm.jsx';
import User     from 'service/user.jsx';

const _mm       = new MMUtile();
const _user     = new User();

const TopNav = React.createClass({
    getInitialState() {
        return {
            userName : ''
        };
    },
    componentDidMount(){
        let userInfo = _mm.getStorage('userInfo');
        if(userInfo){
            this.setState({
                userName : userInfo.username || ''
            });
        }
    },
    onLogout(){
        _user.logout().then(res => {
            window.location.href = '#/login';
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    },
    render() {
        return (
            <div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#/">MMALL 后台管理</a>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropDown">
                        {
                            this.state.userName ? 
                            <span>欢迎，{this.state.userName}</span> :
                            <span>欢迎</span>
                        }
                        
                    </li>
                    <li className="dropDown">
                        <a className="btn-logout" onClick={this.onLogout}>退出</a>
                    </li>
                </ul>
            </div>
        );
    }
});

export default TopNav;