"use client";

import { useInvoice } from "@/app/hooks/useInvoice";

interface InvoicePreviewProps {
  invoice: ReturnType<typeof useInvoice>;
}

export function InvoicePreview({ invoice }: InvoicePreviewProps) {
  const subtotal = invoice.calculateSubtotal();
  const total = invoice.calculateTotal();

  return (
    <div className="bg-white dark:bg-blue-900 rounded-lg shadow-lg border border-blue-300 dark:border-blue-700 p-8">
      {/* Header */}
      <div className="mb-8 pb-6 border-b-2 border-blue-400 dark:border-blue-600">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-8 h-8 text-blue-700 dark:text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h1 className="text-2xl font-bold text-blue-900 dark:text-white">INVOICE</h1>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Invoice #: <span className="font-semibold text-blue-900 dark:text-white">{invoice.invoice.invoiceNumber}</span>
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Date: <span className="font-semibold text-blue-900 dark:text-white">{invoice.invoice.date}</span>
            </p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-700 dark:text-blue-300 mb-1">
              Bill To:
            </p>
            <p className="font-semibold text-blue-900 dark:text-white">
              {invoice.invoice.customerName || "Customer Name"}
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {invoice.invoice.email || "email@example.com"}
            </p>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div className="mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-blue-400 dark:border-blue-600">
                <th className="text-left py-3 px-2 text-sm font-semibold text-blue-900 dark:text-white">
                  Item
                </th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-blue-900 dark:text-white">
                  Price
                </th>
                <th className="text-center py-3 px-2 text-sm font-semibold text-blue-900 dark:text-white">
                  Qty
                </th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-blue-900 dark:text-white">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.invoice.items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-800 transition-colors"
                >
                  <td className="py-3 px-2 text-blue-900 dark:text-white">
                    {item.name || "—"}
                  </td>
                  <td className="py-3 px-2 text-right text-blue-900 dark:text-white">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-3 px-2 text-center text-blue-900 dark:text-white">
                    {item.quantity}
                  </td>
                  <td className="py-3 px-2 text-right font-semibold text-blue-900 dark:text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-8">
        <div className="w-full sm:w-80">
          <div className="flex justify-between py-2 text-blue-900 dark:text-white">
            <span>Subtotal:</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3 px-3 bg-blue-700 dark:bg-blue-600 text-white rounded-lg mt-4 border-2 border-blue-800 dark:border-blue-500">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-blue-300 dark:border-blue-700 text-center text-xs text-blue-700 dark:text-blue-300">
        <p>Thank you for your business!</p>
      </div>
    </div>
  );
}
