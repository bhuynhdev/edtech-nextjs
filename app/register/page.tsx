import React from "react";

interface RegisterProps {
  prop?: string;
}

const Register: React.FC<RegisterProps> = ({ prop }) => {
  return <div>{prop}</div>;
};

export default Register;
