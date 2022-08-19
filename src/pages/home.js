import { Main } from "../components/main/main";

const Home = (props) => {
  const homep =  props.items;
  return <Main homeprops={homep} setData={props.setData} dataForCategory={props.dataForCategory}/>;
};

export default Home;
