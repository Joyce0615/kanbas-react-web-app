import { Link, useLocation } from "react-router-dom"; 
import { useSelector } from "react-redux";
import "../../styles.css";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? [
    { name: "Profile", path: "Profile" }
  ] : [
    { name: "Sign in", path: "Signin" },
    { name: "Sign up", path: "Signup" }
  ];
  const { pathname } = useLocation(); 
  
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link.path} to={`/Kanbas/Account/${link.path}`} 
              className={`border-0 list-group-item ${ pathname.includes(link.path) ? "active" : "text-danger" }`}> 
          {link.name} 
        </Link> 
      ))} 
    </div> 
  );
}


// export default function AccountNavigation() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//   const { pathname } = useLocation(); 
  
//   return (
//     <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
//       {links.map((link) => (
//         <Link key={link} to={`/Kanbas/Account/${link}`} 
//               className={`border-0 list-group-item ${ pathname.includes(link) ? "active" : "text-danger" }`}> 
//           {link} 
//         </Link> 
//       ))} 
//     </div> 
//   );
// }

