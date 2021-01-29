import React, {Component} from 'react';
import { Text, View , StyleSheet} from 'react-native';

export default class TextAnimator extends Component {
    constructor(props) {
        super(props);
        const textArr = props.content.trim().split(' ');
        this.textArr = textArr;
    }
render () {
    return (
       <View style = {[this.props.style, styles.textwrapper]}>
           {this.textArr.map((word, index) => {
               return (
              <Text key = {'${word}-${index}'} style={this.props.textStyle}>

                  {word}
                
                  </Text>
               )
           })}
     </View>
    );
}
}
const styles=StyleSheet.create({
    textwrapper : {
        flexDirection :"row",
        flexWrap:"wrap",
        justifyContent:"center"
    },
})