export default function InputError({ error }: { error: string }) {
  return <p className="text-red-600">{error}</p>;
}
