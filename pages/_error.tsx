import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ErrorPageProps {
  statusCode: number;
  title?: string;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode, title }) => {
  const router = useRouter();

  useEffect(() => {
    // Log error for debugging
    console.error(`Error ${statusCode}: ${title}`);
  }, [statusCode, title]);

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">{statusCode || 'Error'}</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            {title || 'Something went wrong'}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We apologize for the inconvenience. Please try refreshing the page or go back to the home page.
          </p>
        </div>

        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;