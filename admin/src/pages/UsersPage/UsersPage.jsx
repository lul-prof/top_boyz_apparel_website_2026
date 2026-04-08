import React, { useEffect, useState } from "react";
import "./UsersPage.css";
import axios from "axios";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token=localStorage.getItem("admin-token");

  const deleteUSer=async(id)=>{
    try {
      const response=await axios.post(`${backendUrl}/api/admin/deleteUser/${id}`,{},{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/admin/users`);
        console.log(response);
        if (response.data.success) {
          setUsers(response.data.users);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [backendUrl, users,token]);
  return (
    <>
      <div className="users-container">
        <div className="users-header">
          <h1>CUSTOMERS</h1>
        </div>
        <div className="users">
          {
          users.map((user) => (
            <div key={user._id} className="user">
              <div className="user-avatar">
                <img src={user.avatar} alt="image" />
              </div>
              <div className="user-names">
                <p>{user.full_names}</p>
              </div>
              <div className="user-username">
                <p>{user.username}</p>
              </div>
              <div className="user-phone">
                <p>{user.phone}</p>
              </div>
              <div className="user-email">
                <p>{user.email}</p>
              </div>
              <div className="user-actions">
                <img onClick={()=>(deleteUSer(user._id))} src={assets.deleteIcon} alt="image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
