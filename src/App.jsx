import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Body } from "./pages/Body";
import appStore from "./redux/appStore";
import Feed from "./pages/Feed";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/error" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
