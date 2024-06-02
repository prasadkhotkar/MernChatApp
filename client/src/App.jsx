import React ,{Suspense, lazy} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProtectRoute from './Components/auth/ProtectRoute';
import { LayoutLoader } from './Components/layout/Loaders';



const Home=lazy(()=>import("./pages/Home"));
const Login=lazy(()=>import("./pages/Login"));
const Chat=lazy(()=>import("./pages/Chat"));
const Group=lazy(()=>import("./pages/Group"));
const NotFound=lazy(()=>import("./pages/NotFound"))
let user= true;

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
      <Routes>
        <Route element={<ProtectRoute user={user}/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat/:chatId" element={<Chat/>}/>
        <Route path="/groups" element={<Group/>}/>
        </Route>
        <Route path="/login" element={<ProtectRoute user={!user} redirect="/" >
          <Login/>
        </ProtectRoute>}/>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
