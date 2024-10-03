import Toast from 'react-native-toast-message';

type props = {
    title: string
    description?: string
    action?: any;
    variant?: any;
    placement?: any
}

const useCustomToast = () => {

    const showToast = ({ action, title, description }: props) => {
        Toast.show({
            type: action || 'success',
            text1: title,
            text2: description,
            visibilityTime: 4000,
        });
    };

    return showToast;
};

export default useCustomToast;
