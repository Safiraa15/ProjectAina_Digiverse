import React from "react";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">
          Selamat Datang, Admin
        </h1>
        <p className="text-gray-600">
          Ini adalah halaman Dashboard Admin. Anda bisa mengelola data di sini.
        </p>
      </div>
    </div>
  );
}