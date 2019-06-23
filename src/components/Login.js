import React from 'react';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

    goToTest(event) {
        event.preventDefault();
        console.log("going to test page");
        // TODO: Replace 1 with test id here
        this.props.history.push('/test');
    }

    render() {
        return (
            <div>
                <form onSubmit={ (e) => this.goToTest(e)}>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(Login);