import React from 'react';
import Test from './Test';

class Login extends Component {

    goToTest(event) {
        event.preventDefault();
        console.log("going to test page");
        // TODO: Replace 1 with test id here
        this.context.router.transitionTo(`/test/1`)
    }

    render() {
        return (
            <div>
                <form>
                    <input type="submit" value="Submit" onSubmit={ (e) => this.goToTest(e)}/>
                </form>
            </div>
        )
    }
}

Test.contextTypes = {
    router : React.PropTypes.object
}

export default Login;