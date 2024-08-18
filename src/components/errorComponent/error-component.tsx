type ErrorComponentProps = {
  message: string | undefined;
};

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <p className="text-red-500 text-sm font-bold">
      {message ? message : 'erro inesperado'}
    </p>
  );
}
