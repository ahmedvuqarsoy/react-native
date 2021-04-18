import React from 'react';
import { View, Text, Image} from 'react-native';

import {globalStyles} from '../styles/GlobalStyle';

const Company = () => {
    return (
        <View>
            <Image 
                style={globalStyles.imageStyle}
                source={{
                    uri: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/40/static/media/react-native-logo.79778b9e.png"
                }}
            />
            <Text style={{color: 'blue', fontWeight: "700"}}>© Cat Company</Text>
        </View>
    )
}

export default Company;