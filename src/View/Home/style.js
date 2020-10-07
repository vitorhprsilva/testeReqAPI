import { StyleSheet, StatusBar} from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'rgba(171,200,255,0.53125)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 300,
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
});

export default styles;