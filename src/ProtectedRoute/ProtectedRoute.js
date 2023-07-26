import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import Loader from './../components/Layout/Loader';

const ProtectedRoute=({children})=>{
    const {userLoading,isAuthenticated}=useSelector((state)=>state.user)
  
   
   
  
      if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
      }
      return children;
    }
   
   


export default ProtectedRoute