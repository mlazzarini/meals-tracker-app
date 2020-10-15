import React from 'react';
import { Modal, Text, StyleSheet, Button, View } from 'react-native';

export default function SettingsModal(props) {
	const { visible, handleClose } = props;

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.container}>
				<Text> Test </Text>
				<Button title="Close me" onPress={handleClose} />
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
