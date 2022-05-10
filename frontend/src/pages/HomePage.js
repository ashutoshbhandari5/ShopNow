import React,{useEffect} from "react";
import Footer from "../components/FirstPage/Footer";
import Header from "../components/FirstPage/Header";
import HomeScreen from "../HomeScreens/HomeScreen";
import { useSelector } from "react-redux";

const HomePage = ({history}) => {

  const user = useSelector((state)=>state.userLogin)

  const {userInfo} = user;

  useEffect(() => {
    if(userInfo && userInfo?.isAdmin){
      history.push('/adminDashboard')
    }
  },[userInfo,history])

  return (
    <>
      <Header />
      <HomeScreen />
      <Footer />
    </>
  );
};

export default HomePage;
