export default function Footer() {
    return (
      <footer className="bg-gray-100 py-4 mt-10 border-t">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 text-center">
          &copy; {new Date().getFullYear()} PT. Logistik Internasional. All rights reserved.
        </div>
      </footer>
    );
  }