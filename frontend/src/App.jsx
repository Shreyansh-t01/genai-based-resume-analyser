import './styles/style.css'
import { RouterProvider } from 'react-router'
import { router } from './app.routes.jsx'
import { AuthProvider } from './features/auth/auth.context.jsx'


function App() {
 
  return (
     <AuthProvider >
       <InterviewContext>
            <RouterProvider router = {router}/>
       </InterviewContext>
     </AuthProvider>
    
  )
}

export default App
