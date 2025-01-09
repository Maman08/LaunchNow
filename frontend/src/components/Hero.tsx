import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="relative pt-16 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold text-blue-600">Introducing LaunchNow</span>
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Deploy your website</span>
                  <span className="block text-blue-600">in seconds</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                The fastest way to deploy your web applications. Push your code, we'll handle the rest. 
                Automatic deployments, instant rollbacks, and powerful analytics all in one place.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700">
                    Start Deploying
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="inline-flex items-center justify-center rounded-lg bg-gray-100 px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-200">
                    <Github className="mr-2 h-5 w-5" />
                    Connect GitHub
                  </button>
                </div>
              </div>
            </div>
            <div className="relative mt-12 sm:mx-auto lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full overflow-hidden rounded-lg bg-gray-900 p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    <div className="h-4 bg-blue-500 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                    <div className="h-4 bg-green-500 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}