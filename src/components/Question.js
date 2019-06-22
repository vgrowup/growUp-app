import React from 'react';

class Question extends React.Component {

    render() {

        return(
        <div>
            This is the Question <br></br>
            <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
                <input type="submit" value="Submit" />
            </form>
        </div>)

    }
}

export default Question;