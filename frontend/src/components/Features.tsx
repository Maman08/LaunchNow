import React from 'react';
import { GitBranch, Globe, Zap, Shield, Clock, BarChart } from 'lucide-react';

const features = [
  {
    name: 'Automated Deployments',
    description: 'Push to your repository and we\'ll handle the rest. Automatic builds and deployments in seconds.',
    icon: GitBranch,
  },
  {
    name: 'Global CDN',
    description: 'Lightning-fast content delivery through our global edge network.',
    icon: Globe,
  },
  {
    name: 'Instant Rollbacks',
    description: 'One-click rollbacks to any previous deployment. Never worry about broken builds.',
    icon: Clock,
  },
  {
    name: 'Real-time Logs',
    description: 'Monitor your deployments with detailed logs and instant feedback.',
    icon: BarChart,
  },
  {
    name: 'SSL Certificates',
    description: 'Automatic SSL certification for all your domains. Keep your sites secure.',
    icon: Shield,
  },
  {
    name: 'Performance Analytics',
    description: 'Detailed insights into your site\'s performance and user experience.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Built for developers, designed for teams, and optimized for performance.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}