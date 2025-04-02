"use client"; // Enables interactivity

import { useState } from "react";

interface DataPlan {
  price: { value: string; currency: string };
  data: string;
  duration: string;
  details: string;
  network: string[];
  eSIM: string;
}

interface ExpandablePlanListProps {
  plans: DataPlan[];
}

export default function ExpandablePlanList({ plans }: ExpandablePlanListProps) {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-xl font-semibold text-red-600 mb-4">Plan details</h2>
      <form className="space-y-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border p-4 rounded-lg shadow-md cursor-pointer space-y-2 ${
              selectedPlan === index ? "border-red-500" : ""
            }`}
            onClick={() => setSelectedPlan(index)}
          >
            <label
              htmlFor={`plan-${index}`}
              className="flex justify-between items-center font-bold text-lg cursor-pointer"
            >
              <input
                type="radio"
                id={`plan-${index}`}
                name="plan"
                value={index}
                className="hidden"
                checked={selectedPlan === index}
                onChange={() => setSelectedPlan(index)}
              />
              <span>
                ${plan.price.value} - {plan.data}GB / {plan.duration} Days
              </span>
            </label>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                selectedPlan === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{plan.details}</p>
              <h4 className="font-semibold">Network(s):</h4>
              <ul className="text-red-600 list-disc pl-5">
                {plan.network.map((net: string, idx: number) => (
                  <li key={idx}>{net}</li>
                ))}
              </ul>
              <p className="font-semibold">
                eSIM: <span className="text-gray-700">{plan.eSIM}</span>
              </p>
            </div>
          </div>
        ))}
      </form>
      <button className="mt-3 w-full bg-indigo-700 text-white py-3 rounded-lg hover:bg-indigo-800 text-lg font-semibold">
        {selectedPlan !== null
          ? `Buy for $ ${plans[selectedPlan].price.value}`
          : "Select a Plan"}
      </button>
    </div>
  );
}
