import css from './ErrorMessage.styled';

const { ErrorText } = css;

const ErrorMessage = ({ error }) => <ErrorText>{error}</ErrorText>;

export default ErrorMessage;
