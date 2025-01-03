import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './footer/Footer';
import { FloatingIcons } from './background/FloatingIcons';
import { ScrollRestoration } from './ScrollRestoration';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <ScrollRestoration />
      <FloatingIcons />
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}