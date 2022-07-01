import React,{useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignUpScreen1 = ({navigation}) => {
    const { state, signup }  =useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //console.log(state);
    //{state.errorMessage? <Text>{state.errorMessage}</Text>: null }  to render the space for the error message only when a value is returned for the static object.
    
        return(
            <View style={styles.container}>
                <Spacer>
                <Text h3>SignUp Screen</Text>
                </Spacer>
                <Input 
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer/>
                <Input 
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}   
                />
                {state.errorMessage? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null }  
                <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => signup({ email, password }) /*navigation.navigate('mainFlow')*/}
                />
                </Spacer>
                <Spacer>
                <TouchableOpacity>
                    onPress={() => navigation.navigate('Signin')}
                    <Spacer>
                    <Text style={styles.link}>Already a User? Sign in instead</Text>
                    </Spacer>
                </TouchableOpacity>
                </Spacer>
            </View>
        );
    }
SignUpScreen1.navigationOptions = () => {
    return {
        header: null
    };
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200 //or marginBottom: 25%, or useLayoutEffect (() => {marginBottom: 0.25 * Dimensions.get('window').height;},[]);
    },
    errorMessage:{
        fontStyle:16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link:{
        color: 'blue'
    },
});

export default SignUpScreen1;