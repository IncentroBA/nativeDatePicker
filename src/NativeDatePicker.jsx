import { Button, Text, View } from "react-native";
import { createElement, useEffect, useState } from "react";
import DatePicker from "react-native-date-picker";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = {
    container: {}
};

export function NativeDatePicker({
    displayModal,
    inputDate,
    inputMaximumDate,
    inputMinimumDate,
    pickerMode,
    style,
    textColor
}) {
    const styles = mergeNativeStyles(defaultStyle, style);
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    function onConfirm(newDate) {
        setOpen(false);
        setDate(newDate);
        inputDate.setValue(newDate);
    }

    useEffect(() => {
        if (inputDate?.status === "available") {
            setDate(inputDate?.value ?? new Date());
            setVisible(true);
        }
    }, [inputDate]);

    if (visible) {
        return (
            <View style={styles.container}>
                <Text>{inputDate.displayValue}</Text>
                {displayModal ? <Button title="Open" onPress={() => setOpen(true)} /> : null}
                <DatePicker
                    maximumDate={inputMaximumDate?.value}
                    minimumDate={inputMinimumDate?.value}
                    textColor={textColor ?? "#000000"}
                    mode={pickerMode.value}
                    modal={displayModal}
                    open={open}
                    date={date}
                    onConfirm={newDate => onConfirm(newDate)}
                    onDateChange={displayModal === false ? newDate => onConfirm(newDate) : null}
                    onCancel={() => setOpen(false)}
                    fadeToColor="none"
                />
            </View>
        );
    } else return null;
}
