import { useState } from 'react';

import {
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Platform,
  StyleSheet,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { appTodo } from '../store/rootReducer'
import AddIcon from '../assets/addIcon.svg'

const AddForm = (props) => {
    const [currentValue, setCurrentValue] = useState('')

    const submitForm = () => {
        if(currentValue !== '') {
            props.appTodo(currentValue);
            setCurrentValue('')
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.addFormContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

             <TextInput
                style={styles.inputField}
                value={currentValue}
                onChangeText={setCurrentValue}
                placeholder='I want to...'
                onSubmitEditing={submitForm}
            />

            <Pressable style={styles.addButton} onPress={submitForm}>
                <Text>Add</Text>
            </Pressable> 

        </KeyboardAvoidingView>
    )
}


export const styles = StyleSheet.create({
    addFormContainer: {
      flexDirection: 'row',
      marginTop: 'auto',
      marginBottom: 30,
      paddingHorizontal: 20,
      backgroundColor: '#f7f8fa',
    },
    inputField: {
      flex: 1,
      height: 42,
      marginRight: 25,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0, 0, 0, 0.2)',
      color: '#000000',
      fontSize: 15,
      textAlignVertical: 'center',
    },
    addButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: '#ffff',
      shadowColor: '#000000',
      shadowOpacity: 0.14,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },
});

function mapDispatchToProps(dispatch) {
    return {
        appTodo: (text) => dispatch(appTodo(text)),
    }
}

export default connect(null, mapDispatchToProps)(AddForm);
