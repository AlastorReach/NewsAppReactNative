import React from 'react';
import { ActivityIndicator } from 'react-native';
import Center from './Center';

export default class ActivyIndicatorThenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                hasLoaded: true
            });
        });
    }
    render() {
        let component = <ActivityIndicator size={40} />
        if (this.state.hasLoaded) {
            component = this.props.children
        }

        return (
            <Center>
                {component}
            </Center>
        )
    }
}