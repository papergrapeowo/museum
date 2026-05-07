import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Museum Backend API
        </h1>
        <div className="space-y-4 text-center">
          <p className="text-gray-600">
            Authentication API for Museum Project
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-600">POST</h3>
              <p className="text-sm text-gray-600">/api/auth/register</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-semibold text-green-600">POST</h3>
              <p className="text-sm text-gray-600">/api/auth/login</p>
            </div>
            <div className="bg-purple-50 p-4 rounded col-span-2">
              <h3 className="font-semibold text-purple-600">GET</h3>
              <p className="text-sm text-gray-600">/api/auth/me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;