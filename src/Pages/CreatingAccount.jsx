import React from 'react'

export default function CreatingAccount() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white p-10">
      {/* Left Panel */}

      
      <div className="w-full md:w-1/2 max-w-md bg-white rounded-2xl shadow-md p-8">
        <div className="flex flex-col items-center text-white mt-12">
          <img src="src/assets/logo-icon.png" alt="UniSync" className="w-40" />
        </div> <br />
        <h2 className=" flex flex-col items-center text-2xl font-semibold text-[#1e3a43] mb-6">Set up Your Account</h2>

        <form className="space-y-4">
          <div>
            <label className="block font-medium text-sm text-gray-700">Select Department</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500">
              <option>Computer Engineering</option>
              <option>Electrical Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Renewable Energy Engineering</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700">Choose Level</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500">
              <option>Level 200</option>
              <option>Level 300</option>
              <option>Level 400</option>
              <option>Level 500</option>
              <option>Level 600</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700">Speciality</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500">
              <option>Software Engineering</option>
              <option>Networking Engineering</option>
              <option>Telecommunications Engineering</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium text-sm text-gray-700">Country</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <img src="https://flagcdn.com/w40/cm.png" alt="Cameroon" className="w-6 h-4 mr-2" />
                <span>Cameroon</span>
              </div>
            </div>

            <div className="w-1/2">
              <label className="block font-medium text-sm text-gray-700">Telephone</label>
              <input
                type="tel"
                placeholder="+237"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2f6c77] text-white py-2 px-4 rounded-full hover:bg-[#24545d] transition"
          >
            Complete Setup
          </button>
        </form>
      </div>

      {/* Right Panel Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/src/assets/Group-36689.png" // Placeholder image, replace with actual if needed
          alt="Setup Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  )
}
