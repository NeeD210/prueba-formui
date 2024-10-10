'use client'

import { Card } from "@/components/ui/card"
import Component from "./transaction-item"

const transactions = [
  {
    logo: "https://v0.dev/placeholder.svg?height=40&width=40",
    serviceName: "Youtube",
    description: "Subscription Payment",
    amount: "$15,00",
    date: "16 May 2024"
  },
  {
    logo: "https://v0.dev/placeholder.svg?height=40&width=40&text=N",
    serviceName: "Netflix",
    description: "Monthly Subscription",
    amount: "$12,99",
    date: "15 May 2024"
  },
  {
    logo: "https://v0.dev/placeholder.svg?height=40&width=40&text=S",
    serviceName: "Spotify",
    description: "Family Plan",
    amount: "$14,99",
    date: "14 May 2024"
  },
  {
    logo: "https://v0.dev/placeholder.svg?height=40&width=40&text=A",
    serviceName: "Amazon Prime",
    description: "Annual Membership",
    amount: "$119,00",
    date: "10 May 2024"
  },
  {
    logo: "https://v0.dev/placeholder.svg?height=40&width=40&text=D",
    serviceName: "Disney+",
    description: "Monthly Subscription",
    amount: "$7,99",
    date: "8 May 2024"
  }
]

export function TransactionListComponent() {
  return (
    <Card className="w-full max-w-2xl p-6 bg-background">
      <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <Component
            key={index}
            logo={transaction.logo}
            serviceName={transaction.serviceName}
            description={transaction.description}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))}
      </div>
    </Card>
  )
}