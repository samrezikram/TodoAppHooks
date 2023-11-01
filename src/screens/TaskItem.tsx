import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

import {changeTodo, trashTodo} from '../store/rootReducer';

const TaskItem = props => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchableContainer}
                onPress={() => props.changeTodoState(props.item.id)}>
                {props.item.state === 'todo' ? (
                    <View
                        style={styles.itemContainer}>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                        <Text style={styles.itemText}>{props.item.text}</Text>
                    </View>
                ) : (
                    <View />
                )}
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.touchableContainer,
                    props.item.state === 'done' && styles.trashButtonDone
                ]}
                onPress={() => props.trashTodo(props.item.id)}>
                {props.item.state === 'done' ? (
                    <View
                        style={[styles.itemContainer]}>
                        <CheckBox
                            style={{paddingHorizontal: 8, alignSelf: 'center'}}
                            value={isSelected}
                            onValueChange={setSelection}
                        />
                        <Text style={[styles.itemText, styles.itemTextChecked]}>{props.item.text}</Text>
                    </View>
                ) : (
                    <View />
                )}
            </TouchableOpacity>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: '#f7f8fa'
    },
    touchableContainer: {
        paddingHorizontal: 12,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    itemText: {
        paddingHorizontal: 8,
        alignSelf: 'center'
    },
    itemTextChecked: {
        opacity: 0.8,
        textDecorationLine: 'line-through'
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
