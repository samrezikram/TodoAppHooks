import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {changeTodo, trashTodo} from '../store/rootReducer';
import {connect} from 'react-redux';

const TaskItem = props => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                style={styles.itemCheckbox}
                onPress={() => props.changeTodoState(props.item.id)}>
                {props.item.state === 'todo' ? (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                ) : (
                    <View />
                )}
            </TouchableOpacity>
            <Text style={[styles.itemText]}>{props.item.text}</Text>
            <TouchableOpacity
                style={[
                    styles.trashButton,
                    props.item.state === 'done' && styles.trashButtonDone
                ]}
                onPress={() => props.trashTodo(props.item.id)}>
                {props.item.state === 'done' ? (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                        <Text style={[styles.itemText]}>{props.item.text}</Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                        />
                    </View>
                ) : (
                    <View />
                )}
            </TouchableOpacity>
        </View>
    );
};

export const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#f7f8fa'
    },
    itemCheckbox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6
    },
    itemCheckboxCheckedIcon: {
        shadowColor: '#000000',
        shadowOpacity: 0.14,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    itemText: {
        marginRight: 'auto',
        paddingRight: 25,
        fontSize: 15,
        lineHeight: 20,
        color: '#737373'
    },
    itemTextChecked: {
        opacity: 0.3,
        textDecorationLine: 'line-through'
    },
    trashButton: {
        opacity: 0.8
    },
    trashButtonDone: {
        opacity: 0.3
    }
});

function mapDispatchToProps(dispatch) {
    return {
        changeTodoState: id => dispatch(changeTodo(id)),
        trashTodo: id => dispatch(trashTodo(id))
    };
}

export default connect(null, mapDispatchToProps)(TaskItem);
