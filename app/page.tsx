"use client";

import { useRef, useState } from "react";
import { InvoiceForm } from "@/app/components/InvoiceForm";
import { InvoicePreview } from "@/app/components/InvoicePreview";
import { useInvoice } from "@/app/hooks/useInvoice";
import { generateInvoicePDF } from "@/app/utils/pdf";

export default function Home() {
  const invoice = useInvoice();
  const previewRef = useRef<HTMLDivElement>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = async () => {
    if (!invoice.invoice.customerName || !invoice.invoice.email) {
      alert("Please fill in customer name and email");
      return;
    }

    if (invoice.invoice.items.some((item) => !item.name || item.price === 0)) {
      alert("Please fill in all item details (name and price)");
      return;
    }

    setIsGenerating(true);
    try {
      if (previewRef.current) {
        await generateInvoicePDF(previewRef.current, invoice.invoice);
      }
    } catch (error) {
      alert("Failed to generate PDF. Please try again.");
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Toggle Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            {showPreview ? "← Back to Form" : "Preview Invoice →"}
          </button>
        </div>

        {/* Main Layout - Single column on mobile, side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section - Left side */}
          <div
            className={`${
              showPreview ? "hidden" : "block"
            } lg:block lg:col-span-1 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-2`}
          >
            <div className="bg-white dark:bg-blue-900 rounded-lg shadow-lg p-6 border-2 border-blue-200 dark:border-blue-700">
              <h1 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Create Invoice</h1>
              <InvoiceForm invoice={invoice} />
            </div>
          </div>

          {/* Preview Section - Right side (takes 2 columns) */}
          <div
            className={`${
              showPreview ? "block" : "hidden"
            } lg:block lg:col-span-2`}
          >
            <div className="sticky top-8 space-y-4">
              <div
                ref={previewRef}
                className="max-h-[calc(100vh-300px)] overflow-y-auto rounded-lg"
              >
                <InvoicePreview invoice={invoice} />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 bg-white dark:bg-blue-900 rounded-lg shadow-lg p-4 border-2 border-blue-200 dark:border-blue-700">
                <button
                  onClick={() => setShowPreview(false)}
                  className="hidden lg:block px-4 py-2 bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-center"
                >
                  ← Back to Edit
                </button>
                <button
                  onClick={handleGeneratePDF}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {isGenerating ? "Generating..." : "Download PDF"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
