import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
import { featuresData } from '../data/features';

const FeatureDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const feature = slug && slug in featuresData
    ? featuresData[slug as keyof typeof featuresData]
    : null;

  if (!feature) {
    return <Navigate to="/features" replace />;
  }

  const Icon = feature.icon;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/features" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Features
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-8 shadow-sm">
              <Icon className="text-purple-600 w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              {feature.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {feature.longDescription}
            </p>

            <div className="space-y-4 mb-12">
              {feature.benefits.map((benefit: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 hover:scale-105 transition-all shadow-lg shadow-purple-600/20"
            >
              Get Started with {feature.title}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/5 blur-[100px] rounded-full" />
            <div className="glass p-8 rounded-[2.5rem] border-gray-200 relative overflow-hidden aspect-square flex flex-col items-center justify-center text-center shadow-xl">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/20">
                <Icon className="text-white w-16 h-16" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-xs font-bold text-purple-600 mb-4 shadow-sm">
                <Zap className="w-3 h-3 fill-purple-600" />
                <span>AI-POWERED MODULE</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart {feature.title}</h3>
              <p className="text-gray-600 max-w-xs">
                Leverage advanced machine learning to optimize your {feature.title.toLowerCase()} workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
