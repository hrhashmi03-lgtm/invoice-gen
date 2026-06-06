import { useState } from "react";

export interface InvoiceItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface InvoiceData {
  customerName: string;
  email: string;
  invoiceNumber: string;
  date: string;
  items: InvoiceItem[];
  discount: number;
}

export function useInvoice() {
  const [invoice, setInvoice] = useState<InvoiceData>({
    customerName: "",
    email: "",
    invoiceNumber: `INV-${Date.now()}`,
    date: new Date().toISOString().split("T")[0],
    items: [{ id: "1", name: "", price: 0, quantity: 1 }],
    discount: 0,
  });

  const updateCustomerName = (name: string) => {
    setInvoice((prev) => ({ ...prev, customerName: name }));
  };

  const updateEmail = (email: string) => {
    setInvoice((prev) => ({ ...prev, email }));
  };

  const updateInvoiceNumber = (number: string) => {
    setInvoice((prev) => ({ ...prev, invoiceNumber: number }));
  };

  const updateDate = (date: string) => {
    setInvoice((prev) => ({ ...prev, date }));
  };

  const updateItem = (
    id: string,
    field: keyof Omit<InvoiceItem, "id">,
    value: string | number
  ) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addItem = () => {
    const newId = Date.now().toString();
    setInvoice((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { id: newId, name: "", price: 0, quantity: 1 },
      ],
    }));
  };

  const removeItem = (id: string) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const updateDiscount = (discount: number) => {
    setInvoice((prev) => ({ ...prev, discount }));
  };

  const clearAll = () => {
    setInvoice({
      customerName: "",
      email: "",
      invoiceNumber: `INV-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      items: [{ id: "1", name: "", price: 0, quantity: 1 }],
      discount: 0,
    });
  };

  const calculateSubtotal = () => {
    return invoice.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * invoice.discount) / 100;
    return subtotal - discountAmount;
  };

  return {
    invoice,
    updateCustomerName,
    updateEmail,
    updateInvoiceNumber,
    updateDate,
    updateItem,
    addItem,
    removeItem,
    updateDiscount,
    clearAll,
    calculateSubtotal,
    calculateTotal,
  };
}
