const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
    return message ? <div className="error-message">{message}</div> : null;
  };
  
  export default ErrorMessage;  