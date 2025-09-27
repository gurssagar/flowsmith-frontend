"use client"

import { TrendingUp, Zap, Database, Clock } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  trend: "up" | "down" | "neutral"
}

function StatCard({ title, value, change, icon, trend }: StatCardProps) {
  const trendColor = trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-muted-foreground"
  
  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6 hover:bg-card/70 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <span className={`text-sm font-medium ${trendColor}`}>
          {change}
        </span>
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  )
}

export function UsageStats() {
  const stats = [
    {
      title: "API Calls Today",
      value: "2,847",
      change: "+12.5%",
      icon: <Zap className="h-5 w-5 text-primary" />,
      trend: "up" as const
    },
    {
      title: "Tokens Processed",
      value: "1.2M",
      change: "+8.3%",
      icon: <Database className="h-5 w-5 text-primary" />,
      trend: "up" as const
    },
    {
      title: "Avg Response Time",
      value: "1.2s",
      change: "-15.2%",
      icon: <Clock className="h-5 w-5 text-primary" />,
      trend: "up" as const
    },
    {
      title: "Success Rate",
      value: "99.8%",
      change: "+0.1%",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      trend: "up" as const
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Usage Statistics</h2>
        <p className="text-muted-foreground">Your AI development activity overview</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  )
}
