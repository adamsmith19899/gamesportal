import React from 'react';

export function DMCA() {
  return (
    <main className="flex-1 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">DMCA Policy</h1>
        <div className="prose prose-indigo">
          <p className="text-lg text-gray-600 mb-6">
            Word Puzzle Games respects the intellectual property rights of others and expects its users to do the same.
            In accordance with the Digital Millennium Copyright Act of 1998, we will respond expeditiously to claims of copyright
            infringement that are reported to our designated copyright agent.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Copyright Infringement Notice</h2>
          <p className="text-gray-600 mb-6">
            If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement
            and is accessible on our platform, please notify our copyright agent with the following information:
          </p>
          
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>A physical or electronic signature of the copyright owner or authorized person</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Description of the material that is claimed to be infringing</li>
            <li>Your contact information (including email address and phone number)</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized</li>
            <li>A statement that the information in your notice is accurate</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Our Copyright Agent</h2>
          <p className="text-gray-600 mb-6">
            Please send your copyright infringement notices to:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">Copyright Agent</p>
            <p className="text-gray-700">Word Puzzle Games</p>
            <p className="text-gray-700">Email: copyright@wordpuzzles.com</p>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Counter-Notice</h2>
          <p className="text-gray-600 mb-6">
            If you believe your content was wrongly removed due to a mistake or misidentification,
            you may submit a counter-notice to our copyright agent with the following information:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Your physical or electronic signature</li>
            <li>Identification of the removed material and its previous location</li>
            <li>A statement under penalty of perjury that you have a good faith belief the material was wrongly removed</li>
            <li>Your contact information and consent to local federal court jurisdiction</li>
          </ul>
        </div>
      </div>
    </main>
  );
}