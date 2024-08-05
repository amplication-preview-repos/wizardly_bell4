import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServerList } from "./server/ServerList";
import { ServerCreate } from "./server/ServerCreate";
import { ServerEdit } from "./server/ServerEdit";
import { ServerShow } from "./server/ServerShow";
import { FingerprintDataList } from "./fingerprintData/FingerprintDataList";
import { FingerprintDataCreate } from "./fingerprintData/FingerprintDataCreate";
import { FingerprintDataEdit } from "./fingerprintData/FingerprintDataEdit";
import { FingerprintDataShow } from "./fingerprintData/FingerprintDataShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FingercaptchaAuthService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Server"
          list={ServerList}
          edit={ServerEdit}
          create={ServerCreate}
          show={ServerShow}
        />
        <Resource
          name="FingerprintData"
          list={FingerprintDataList}
          edit={FingerprintDataEdit}
          create={FingerprintDataCreate}
          show={FingerprintDataShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
