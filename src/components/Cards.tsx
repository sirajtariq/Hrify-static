import { ElementType, FC } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

interface FeatureCardProps {
  icon: ElementType;
  title: string;
  description: string;
  link: string;
}


export const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description, link }) => (
  <Link 
    to={link}
    className="glass p-8 rounded-3xl border-gray-200 hover:border-purple-600/30 transition-all group block cursor-pointer shadow-sm"
  >
    <div className="w-12 h-12 rounded-2xl bg-purple-600/10 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-colors">
      <Icon className="text-purple-600 w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
    <div className="mt-6 flex items-center gap-2 text-purple-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
      Learn More <CheckCircle2 className="w-4 h-4 rotate-[-45deg]" />
    </div>
  </Link>
);

export const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex gap-6 items-start">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-purple-600/30 flex items-center justify-center text-purple-600 font-bold text-lg">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-semibold mb-2 text-gray-900">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export const PricingCard = ({ tier, price, features, recommended = false }: { tier: string, price: string, features: string[], recommended?: boolean }) => (
  <div className={`glass p-8 rounded-[2.5rem] flex flex-col border-gray-200 shadow-sm ${recommended ? 'border-purple-600/50 purple-glow relative' : ''}`}>
    {recommended && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
        Most Popular
      </span>
    )}
    <div className="mb-8">
      <h3 className="text-gray-500 font-medium mb-2">{tier}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-500">/mo</span>
      </div>
    </div>
    <ul className="flex-grow flex flex-col gap-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
          <CheckCircle2 className="w-4 h-4 text-purple-600" />
          {f}
        </li>
      ))}
    </ul>
    <Link to="/contact" className={`w-full py-4 rounded-2xl font-bold transition-all text-center ${recommended ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
      Choose {tier}
    </Link>
  </div>
);
