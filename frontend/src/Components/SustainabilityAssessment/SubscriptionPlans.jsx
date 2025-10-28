import React from "react";
import { useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";
import SectionHeading from "../../Common/SectionHeading";

const plans = [
  {
    name: "Basic",
    price: "Free",
    color: "from-emerald-500 to-teal-400",
    features: {
      "Framework Alignment": "UNSDG",
      "Dashboard Access": "-",
      "Carbon Accounting": "Scope 1 & 2",
      "Net-Zero Roadmap": "-",
      "ESG Training": "Optional",
      "SDG Mapping": "✅",
      "Ranking & Accreditation Plugin": "-",
      "Literacy Assessment Plugin": "-",
      "Certification Tracking": "Optional",
      "Climate Risk Assessment": "-",
    },
  },
  {
    name: "Standard",
    price: "$99/mo",
    color: "from-blue-500 to-cyan-400",
    features: {
      "Framework Alignment": "UNSDG, GRI",
      "Dashboard Access": "Standard Dashboard",
      "Carbon Accounting": "Scope 1, 2 & 3",
      "Net-Zero Roadmap": "✅",
      "ESG Training": "✅",
      "SDG Mapping": "✅",
      "Ranking & Accreditation Plugin": "✅",
      "Literacy Assessment Plugin": "Optional",
      "Certification Tracking": "Optional",
      "Climate Risk Assessment": "-",
    },
  },
  {
    name: "Premium",
    price: "$199/mo",
    color: "from-violet-500 to-purple-400",
    features: {
      "Framework Alignment": "BRSR, GRI, UNSDG",
      "Dashboard Access": "AI-Enabled Dashboard",
      "Carbon Accounting": "Scope 1, 2 & 3",
      "Net-Zero Roadmap": "✅",
      "ESG Training": "✅",
      "SDG Mapping": "✅",
      "Ranking & Accreditation Plugin": "✅",
      "Literacy Assessment Plugin": "✅",
      "Certification Tracking": "✅",
      "Climate Risk Assessment": "✅",
    },
  },
];

const SubscriptionPlans = () => {
  const navigate = useNavigate();
  
  const handleChoosePlan = (planName) => {
    navigate('/contact', { state: { selectedPlan: planName } });
  };
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      <SectionHeading>
        <span className="block">Choose a Plan That Fits</span>
        <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
          Your Sustainability Goals
        </span>
      </SectionHeading>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-16">
        Select the plan that matches your organization's sustainability needs and reporting maturity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-slate-100 overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Header */}
            <div className={`p-6 bg-gradient-to-br ${plan.color} text-white rounded-t-3xl text-center`}>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-xl font-semibold">{plan.price}</p>
            </div>

            {/* Features */}
            <div className="p-6 space-y-3">
              {Object.entries(plan.features).map(([feature, value], idx) => (
                <div key={idx} className="flex justify-between items-center text-slate-700">
                  <span className="font-medium">{feature}</span>
                  <span className="flex items-center gap-1">
                    {value === "✅" ? <Check className="w-4 h-4 text-emerald-600" /> : value === "-" ? <X className="w-4 h-4 text-red-400" /> : value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 text-center">
              <button 
                onClick={() => handleChoosePlan(plan.name)}
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${plan.color} text-white font-semibold hover:scale-105 transition-all duration-300`}
              >
                Choose Plan
              </button>
            </div>

            {/* Optional "Most Popular" badge */}
            {plan.name === "Standard" && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionPlans;
