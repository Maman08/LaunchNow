import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Hobby',
    price: 0,
    features: [
      'Personal projects',
      '1 concurrent build',
      'Automatic HTTPS',
      'Continuous deployment',
      'Basic analytics',
      'Community support',
    ],
    cta: 'Start for free',
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: 20,
    features: [
      'Everything in Hobby',
      '3 concurrent builds',
      'Team collaboration',
      'Custom domains',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Subscribe now',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Pro',
      'Unlimited builds',
      'Custom contracts',
      'Dedicated support',
      'SLA guarantee',
      'Custom integrations',
    ],
    cta: 'Contact sales',
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${
                tier.mostPopular
                  ? 'border-blue-600 shadow-blue-100'
                  : 'border-gray-200'
              } p-8 shadow-lg ${tier.mostPopular ? 'shadow-xl' : ''}`}
            >
              {tier.mostPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  Most popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">Starting from</p>
                <p className="mt-2 flex items-center justify-center">
                  {typeof tier.price === 'number' && <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.price}</span>}
                  {typeof tier.price === 'string' && <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>}
                  {typeof tier.price === 'number' && <span className="ml-2 text-base text-gray-500">/month</span>}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 shrink-0 text-blue-600" />
                    <span className="ml-3 text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold ${
                  tier.mostPopular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}