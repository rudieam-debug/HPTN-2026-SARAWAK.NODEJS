import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = "Maaf, berlaku ralat dalam aplikasi. Sila cuba sebentar lagi.";
      
      const errorMsg = this.state.error?.message || "";
      if (errorMsg.includes("Missing or insufficient permissions") || errorMsg.includes("row-level security")) {
        errorMessage = "Maaf, anda tidak mempunyai kebenaran untuk melakukan operasi ini.";
      } else if (errorMsg.includes("Supabase configuration is missing")) {
        errorMessage = "Konfigurasi pangkalan data tidak lengkap. Sila hubungi pentadbir.";
      }

      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-background-card rounded-2xl border border-red-500/20 shadow-xl">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500">
            <span className="material-symbols-outlined text-4xl">error</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ralat Berlaku</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            {errorMessage}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-primary text-black font-bold rounded-xl hover:bg-[#ffe066] transition-all shadow-lg"
          >
            Muat Semula Laman
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
