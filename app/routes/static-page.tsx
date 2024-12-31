import { Link } from "react-router";

export default function StaticPage() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4 space-y-4">
      <h1>
        This route will be pre-rendered at build time based on the config
        defined in <pre>react-router.config.ts</pre>
      </h1>
      <Link to="/" className="underline">
        Go back to Home
      </Link>
    </main>
  );
}
