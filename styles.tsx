import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'dodgerblue',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'dodgerblue',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'dodgerblue',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff6961',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  googleButtonText: {
    color: 'white',
    fontSize: 18,
  },
  termsContainer: {
    flexDirection: 'column', 
    alignItems: 'center',
    marginVertical: 20,
  },

  checkbox: {
    marginRight: 10,
  },
  termsText: {
    color: 'dodgerblue',
  
  },
  link: {
    textDecorationLine: 'underline',
  },
  signupText: {
    fontSize: 16,
  },
});
