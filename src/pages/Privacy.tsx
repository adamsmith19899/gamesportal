import React from 'react';

export function Privacy() {
  return (
    <main className="flex-1 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-indigo">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: January 03, 2025

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect information that you provide directly to us, including your name,
            email address, and game progress data. We also automatically collect certain
            information about your device and how you interact with our games.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to provide and improve our services,
            communicate with you, and ensure a personalized gaming experience.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational measures to protect
            your personal information against unauthorized access or disclosure.
          </p>
        </div>
      </div>
    </main>
  );
}
