import "./App.css";
import { UsersProvider } from "./contexts/UsersContext";

import { Header, TableManager, UserList } from "./components/layout";

function App() {
  return (
    <UsersProvider>
      <div>
        <Header />
        <TableManager />
        <UserList />
      </div>
    </UsersProvider>
  );
}

export default App;
