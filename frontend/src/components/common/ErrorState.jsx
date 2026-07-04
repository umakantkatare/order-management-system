const ErrorState = ({ message }) => {
  return (
    <div className="rounded-md bg-red-100 p-4 text-red-600">{message}</div>
  );
};

export default ErrorState;
