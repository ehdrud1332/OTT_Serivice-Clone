import React, {Component} from 'react';
import Router from './Router';
import globalStyles from '../Components/GlobalStyles';


class App extends Component {
    render() {
        return (
            <div>
                <Router />
                <globalStyles/>
            </div>
        );
    }
}

export default App;