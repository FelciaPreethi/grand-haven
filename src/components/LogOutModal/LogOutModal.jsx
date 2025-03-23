import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutModal = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold">Logout Successful</h2>
        <p className="text-gray-600 mt-2">Redirecting to Home Page...</p>
      </div>
    </div>
  );
};

export default LogoutModal;
