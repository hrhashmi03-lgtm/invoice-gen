"use client";

import { useInvoice } from "@/app/hooks/useInvoice";

interface InvoiceFormProps {
  invoice: ReturnType<typeof useInvoice>;
}

export function InvoiceForm({ invoice }: InvoiceFormProps) {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white dark:bg-blue-900 rounded-lg shadow p-6 border-2 border-blue-200 dark:border-blue-700">
        <h2 className="text-lg font-semibold mb-4 text-blue-900 dark:text-white">
          Invoice Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
              Invoice Number
            </label>
            <input
              type="text"
              value={invoice.invoice.invoiceNumber}
              onChange={(e) => invoice.updateInvoiceNumber(e.target.value)}
              className="w-full px-3 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-blue-800 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
              placeholder="INV-001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
              Date
            </label>
            <input
              type="date"
              value={invoice.invoice.date}
              onChange={(e) => invoice.updateDate(e.target.value)}
              className="w-full px-3 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-blue-800 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Customer Section */}
      <div className="bg-white dark:bg-blue-900 rounded-lg shadow p-6 border-2 border-blue-200 dark:border-blue-700">
        <h2 className="text-lg font-semibold mb-4 text-blue-900 dark:text-white">
          Customer Information
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
              Customer Name *
            </label>
            <input
              type="text"
              value={invoice.invoice.customerName}
              onChange={(e) => invoice.updateCustomerName(e.target.value)}
              className="w-full px-3 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-blue-800 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={invoice.invoice.email}
              onChange={(e) => invoice.updateEmail(e.target.value)}
              className="w-full px-3 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-blue-800 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>
      </div>

      {/* Items Section */}
      <div className="bg-white dark:bg-blue-900 rounded-lg shadow p-6 border-2 border-blue-200 dark:border-blue-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-blue-900 dark:text-white">
            Invoice Items
          </h2>
          <button
            onClick={invoice.addItem}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            + Add Item
          </button>
        </div>

        <div className="space-y-3">
          {invoice.invoice.items.map((item, index) => (
            <div
              key={item.id}
              className="flex gap-3 items-end bg-blue-50 dark:bg-blue-800 p-3 rounded-lg border-2 border-blue-200 dark:border-blue-700"
            >
              <div className="flex-1">
                <label className="block text-xs font-medium text-blue-700 dark:text-blue-300 mb-1">
                  Item Name
                </label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    invoice.updateItem(item.id, "name", e.target.value)
                  }
                  className="w-full px-2 py-1 border-2 border-blue-300 dark:border-blue-600 rounded bg-white dark:bg-blue-700 text-blue-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  placeholder="e.g., Web Design"
                />
              </div>
              <div className="w-24">
                <label className="block text-xs font-medium text-blue-700 dark:text-blue-300 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  value={item.price || ""}
                  onChange={(e) =>
                    invoice.updateItem(item.id, "price", e.target.value === "" ? 0 : parseFloat(e.target.value))
                  }
                  className="w-full px-2 py-1 border-2 border-blue-300 dark:border-blue-600 rounded bg-white dark:bg-blue-700 text-blue-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div className="w-20">
                <label className="block text-xs font-medium text-blue-700 dark:text-blue-300 mb-1">
                  Qty
                </label>
                <input
                  type="number"
                  value={item.quantity || ""}
                  onChange={(e) =>
                    invoice.updateItem(item.id, "quantity", e.target.value === "" ? 1 : parseInt(e.target.value))
                  }
                  className="w-full px-2 py-1 border-2 border-blue-300 dark:border-blue-600 rounded bg-white dark:bg-blue-700 text-blue-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  placeholder="1"
                  min="1"
                />
              </div>
              <div className="w-24 text-right">
                <label className="block text-xs font-medium text-blue-700 dark:text-blue-300 mb-1">
                  Total
                </label>
                <div className="text-sm font-semibold text-blue-900 dark:text-white py-1">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
              {invoice.invoice.items.length > 1 && (
                <button
                  onClick={() => invoice.removeItem(item.id)}
                  className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Clear All Button */}
      <button
        onClick={invoice.clearAll}
        className="w-full px-4 py-2 bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
      >
        Clear All
      </button>
    </div>
  );
}
