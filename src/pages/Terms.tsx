import React from 'react';

export function Terms() {
  return (
    <main className="flex-1 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-indigo">
          <p className="text-lg text-gray-600 mb-6">
            By accessing and using Word Puzzle Games, you agree to be bound by these
            Terms of Service and all applicable laws and regulations.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Accounts</h2>
          <p className="text-gray-600 mb-6">
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptable Use</h2>
          <p className="text-gray-600 mb-6">
            You agree to use our services only for lawful purposes and in accordance
            with these Terms. You must not engage in any activity that interferes with
            or disrupts our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            All content and materials available through our services are protected by
            intellectual property rights and belong to Word Puzzle Games or its licensors.
          </p>
        </div>
      </div>
    </main>
  );
}