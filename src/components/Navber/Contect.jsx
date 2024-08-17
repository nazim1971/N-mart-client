

const Contect = () => {
    return (
        <div className="min-h-screen">
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl text-center mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 text-lg">
              We'd love to hear from you! Whether you have a question about our products, need assistance, or just want to share your experience, we're here to help.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              Email us directly at:
            </p>
            <a
              href="mailto:nazimmuddin10@gmail.com"
              className="text-blue-600 text-lg font-semibold mt-2"
            >
              nazimmuddin10@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Additional Information
            </h3>
            <p className="text-gray-600 text-lg">
              For more information about our services, or to inquire about partnership opportunities, please contact our support team.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              You can reach us at:
            </p>
            <a
              href="mailto:info@email.com"
              className="text-blue-600 text-lg font-semibold mt-2"
            >
              info@email.com
            </a>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Contect;