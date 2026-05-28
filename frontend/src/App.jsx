import './styles/style.css'
import { RouterProvider } from 'react-router'
import { router } from './app.routes.jsx'
import { AuthProvider } from './features/auth/auth.context.jsx'
import { InterviewContext, InterviewProvider } from './features/interview/interview.context.jsx'


function App() {
 
  return (
    <InterviewProvider>
        <AuthProvider >
          
                <RouterProvider router = {router}/>
          
        </AuthProvider>
     </InterviewProvider>
    
  )
}

export default App
