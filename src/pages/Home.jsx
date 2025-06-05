import Footer from '../components/Footer';
import FormAutoComplete from '../components/FormAutoComplete';
import Header from '../components/Header';

export default function Home() {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-white">
          <FormAutoComplete />
        </main>
        <Footer />
      </div>
    );
  }