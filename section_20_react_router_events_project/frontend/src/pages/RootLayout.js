import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router-dom";

export const RootLayout = () => {

  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation/>
      <main>
        {/*{navigation.state === 'loading' && <p>Loading...</p>}*/}
        <Outlet/>
      </main>
    </>
  );
}