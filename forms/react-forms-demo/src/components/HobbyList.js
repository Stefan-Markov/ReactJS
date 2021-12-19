import { Component } from 'react';
import './HobbyList.css';

class HobbyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hobbies: [],
            selectedHobbie: null,
        };

        this.onHobbieClick = this.onHobbieClick.bind(this);
    }

    componentWillUnmount() {
        console.log('Unmount');
    }

    componentDidUpdate() {
        console.log('Updated');   
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('http://localhost:3030/jsonstore/hobbies')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    hobbies: Object.values(res)
                });
            });
    }

    onHobbieClick(e) {
        this.setState({selectedHobbie: e.target.textContent});
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <ul>
                    {this.state.hobbies.map(x => 
                        <li 
                            className={x.name == this.state.selectedHobbie ? 'selected-hobbie' : ''} 
                            onClick={this.onHobbieClick}
                            key={x._id}
                        >
                            {x.name}
                        </li>
                    )}
                </ul>
            </>
        );
    }
}

export default HobbyList;