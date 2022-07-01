import AsyncStorage from '@react-native-async-storage/async-storage'; 
// for permenant storage of jwt across app state rerenders 
//for example when the app restarts because the user restarts the phone.This will avoid the user to login to the app every time the user restarts the phone by storing the jwt in the phone's storage.  
import createDataContext from "./createDataContext";
import gamerApi from '../api/gaming';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return{errorMessage:'', token: action.payload};
        default:
            return state;
    };
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        //make api request to sign up with that email and password
        //if we sign up and get our jwt, modify our state, and say that we are authenticated 
        //if signing up fails, we probably need to reflect an error message somewhere
        try{
            const response = await gamerApi.post('/signup',{email,password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload:response.data.token})
            //console.log(response.data);
            navigate('mainFlow');
        }catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up. Are you a registered user? Go to Sign In.'})
            //console.log(err.response.data); // or console.log(err.message);
        }
    };
};

const signin = (dispatch) => {
    return ({email, password}) => {
        // Try to signin
        // Handle success by updating state
        // Handle failure by showing error message (somehow)
    };
};

const signout = (dispatch) => {
    return () => {
        //somehow sign out !!
    };
};



export const {Provider, Context} = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage:''}
);