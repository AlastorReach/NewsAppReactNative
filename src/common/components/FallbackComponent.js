import React from 'react';
import Center from './Center';
import { Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const FallbackComponent = () => (
    <Center>
        <Text>Oops, hubo un error</Text>
        <Button onPress={props.navigation.goBack()}>Regresar</Button>
    </Center>
)

export default withNavigation(FallbackComponent);