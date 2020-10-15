import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppHeader = () => {
	return (
		<Appbar.Header>
			{/* <Appbar.BackAction onPress={_goBack} /> */}
			<Appbar.Content title="Weekly meals" />
			{/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
			{/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
		</Appbar.Header>
	);
};

export default AppHeader;
