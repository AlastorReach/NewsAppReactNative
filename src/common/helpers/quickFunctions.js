import { NavigationActions } from 'react-navigation';
export const navigateToScreen = (route, navigation, params) => (
    () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
            params: {data: params}
        });
        navigation.dispatch(navigateAction);
    }
)