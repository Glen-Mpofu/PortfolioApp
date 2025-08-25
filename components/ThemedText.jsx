import { Text, useColorScheme, View } from 'react-native';
import { Colors } from "../constants/Colors";

export default function ThemedText({style, children, variant = "paragraphText", ...props}) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
    const textStyles = {
        headings: {
            color: theme.heading
        },
        paragraphText: {
            color: theme.text
        }
    }

    const selectedStyle = textStyles[variant] ?? textStyles.paragraphText

  return (
    <View>
      <Text style = {[ selectedStyle , style]} {...props}> {children} </Text>
    </View>
  )
}

