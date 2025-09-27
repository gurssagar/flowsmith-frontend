"use client"

import { DollarSign, CreditCard, TrendingUp, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CostItemProps {
  service: string
  amount: string
  usage: string
  percentage: number
}

function CostItem({ service, amount, usage, percentage }: CostItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-border/50">
      <div className="flex-1">
        <p className="font-medium text-foreground">{service}</p>
        <p className="text-sm text-muted-foreground">{usage}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-foreground">{amount}</p>
        <div className="flex items-center space-x-2 mt-1">
          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export function CostTracking() {
  const costItems = [
    {
      service: "AI Model Usage",
      amount: "$47.32",
      usage: "1.2M tokens",
      percentage: 78
    },
    {
      service: "API Requests",
      amount: "$12.45",
      usage: "2,847 calls",
      percentage: 45
    },
    {
      service: "Storage",
      amount: "$3.20",
      usage: "2.1 GB",
      percentage: 15
    },
    {
      service: "Deployments",
      amount: "$8.90",
      usage: "12 deployments",
      percentage: 32
    }
  ]

  const totalCost = "$71.87"
  const monthlyBudget = "$200.00"
  const remainingBudget = "$128.13"

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Cost Tracking</h2>
          <p className="text-muted-foreground">Current month spending breakdown</p>
        </div>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <CreditCard className="h-4 w-4" />
          <span>Manage Billing</span>
        </Button>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-primary/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Total Spent</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{totalCost}</p>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Monthly Budget</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{monthlyBudget}</p>
        </div>
        
        <div className="bg-green-500/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-foreground">Remaining</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{remainingBudget}</p>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-3">
        <h3 className="font-medium text-foreground mb-3">Cost Breakdown</h3>
        {costItems.map((item, index) => (
          <CostItem key={index} {...item} />
        ))}
      </div>

      {/* Budget Progress Bar */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Budget Usage</span>
          <span className="text-sm text-muted-foreground">36% used</span>
        </div>
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-500" style={{ width: "36%" }} />
        </div>
      </div>
    </div>
  )
}
