export function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1.5 text-xs text-red-400">{msg}</p>;
}

export function Req() {
  return <span className="ml-0.5 text-red-400" aria-hidden="true">*</span>;
}
