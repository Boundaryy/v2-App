import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    fontFamily: 'Pretendard',
    backgroundColor: '#F3F4F6' 
  },
  logincontainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
    fontFamily: 'Pretendard',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    fontSize: 14,
    color: '#808080',
    fontFamily: 'Pretendard',
  },
  header: {
    padding: 15,
    paddingTop: 20,
    fontFamily: 'Pretendard',
  },
  subtitle: {
    fontSize: 26,
    whiteSpace: "nowrap",
    fontWeight: '700',
    fontFamily: 'Pretendard',
    marginTop: 60,
    marginLeft: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    color: '#898989',
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: 'Pretendard',
    letterSpacing: -0.5, 
    marginTop: 5,
    marginLeft: 20,
  },
  backsubtitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Pretendard',
    textAlign: 'center', 
    marginTop: 30, 
    marginBottom: 20,
  },
  backdescription: {
    fontSize: 16,
    textAlign: 'left',
    color: '#898989',
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: 'Pretendard',
    letterSpacing: -0.5, 
    marginTop: 5,
    marginLeft: 50,
  },
  formGroup: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    fontFamily: 'Pretendard',
  },
  backText: {
    fontSize: 18,
    color: '#808080',
    fontFamily: 'Pretendard',
  },
  backButton: {
    position: 'absolute',
    top: 52,
    left: 40,
    zIndex: 10,
    width: 8, 
    height: 18,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  },
  backButtonImage: {
    width: 10,
    height: 16,
    zIndex: 10,
  },
  label: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    textAlign: 'left',
    fontFamily: 'Pretendard',
    marginLeft: 16,
    color: '#000000',
  },
  input: {
    padding: 10,  
    borderBottomWidth: 2,
    borderBottomColor: '#5772FF',
    fontSize: 18,
    color: '#565656',
    width: '100%',
    fontFamily: 'Pretendard',
    marginLeft: 16, 
  },
});
