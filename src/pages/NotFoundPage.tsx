import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="mb-6">404 - Page Not Found</h1>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;