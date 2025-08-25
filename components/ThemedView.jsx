import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, children, ...props}) => {
const colorScheme = useColorScheme
const theme = Colors[colorScheme] ?? Colors.light 

return (    
    <View style={[ {backgroundColor: theme.backgroundColor }, style, {...props}]}> 
      {children}
    </View> //automatically renders the children if you do self closing " /> "
    /* so this View sets the background color to the themes background color taken from the already defined Colors and 
    then it provides an option to add additional styles and other prop values*/
  )
}

export default ThemedView