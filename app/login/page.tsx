import React from "react";

interface LoginProps {
  prop?: string;
}

const Login: React.FC<LoginProps> = ({ prop }) => {
  return <div>Login</div>;
};

export default Login;
