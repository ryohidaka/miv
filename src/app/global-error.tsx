import { ErrorAlert } from "@/components/Viewer/Layout/ErrorAlert";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <head></head>
      <body>
        <div className="container">
          <ErrorAlert />
        </div>
      </body>
    </html>
  );
}
