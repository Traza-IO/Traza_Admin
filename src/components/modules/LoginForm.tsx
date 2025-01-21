import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  };

  return <div>demo</div>;
};

export default LoginForm;
