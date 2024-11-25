import Layout from "./Layout";
const Contact = () => {
  return (
    <Layout>
      <div className="bg-white md:w-6/12 shadow-lg border md:my-16 mx-auto">
        <img src="/images/contactus.png" className="w-6/12" />
        <div className="p-8">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label className="font-semibold text-lg mb-1">Username</label>
              <input
                required
                name="fullname"
                placeholder="Er. Aditya"
                className="p-3 boder border-gray-100 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg mb-1">Email</label>
              <input
                required
                name="Email"
                type="email"
                placeholder="xyzxx@gmail.com"
                className="p-3 boder border-gray-300 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg mb-1">Query</label>
              <textarea
                required
                name="message"
                type="text"
                placeholder="enter your query"
                className="p-3 boder border-gray-300 rounded"
                rows={4}
              />
            </div>

            <button className=" bg-cyan-900 py-3 px-6 rounded font-semibold text-white hover:bg-yellow-600 mt-2">
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
