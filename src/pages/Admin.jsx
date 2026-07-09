import { useAuth } from "../context/AuthContext";
import AdminPanel from "../admin/AdminPanel";
import AdminLogin from "./AdminLogin";


export default function Admin() {


  const { logado } = useAuth();



  if (!logado) {

    return <AdminLogin />;

  }



  return (

    <AdminPanel />

  );

}