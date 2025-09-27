"use client"

import { Clock, CheckCircle, XCircle, AlertTriangle, FileText, Zap, Play } from "lucide-react"

interface ActivityItem {
  id: string
  type: "success" | "error" | "warning" | "info"
  title: string
  description: string
  timestamp: string
  icon: React.ReactNode
}

function ActivityItemComponent({ activity }: { activity: ActivityItem }) {
  const typeConfig = {
    success: { color: "text-green-500", bg: "bg-green-500/10" },
    error: { color: "text-red-500", bg: "bg-red-500/10" },
    warning: { color: "text-yellow-500", bg: "bg-yellow-500/10" },
    info: { color: "text-blue-500", bg: "bg-blue-500/10" }
  }
  
  const config = typeConfig[activity.type]
  
  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-card/30 rounded-lg transition-colors">
      <div className={`p-2 rounded-lg ${config.bg} flex-shrink-0`}>
        <div className={`${config.color}`}>
          {activity.icon}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground mb-1">{activity.title}</p>
        <p className="text-xs text-muted-foreground mb-2">{activity.description}</p>
        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{activity.timestamp}</span>
        </div>
      </div>
    </div>
  )
}

export function RecentActivity() {
  const activities: ActivityItem[] = [
    {
      id: "1",
      type: "success",
      title: "Contract Deployed",
      description: "NFT Marketplace contract deployed to testnet",
      timestamp: "2 minutes ago",
      icon: <Play className="h-4 w-4" />
    },
    {
      id: "2", 
      type: "success",
      title: "AI Optimization Complete",
      description: "Gas usage reduced by 23% in Token contract",
      timestamp: "15 minutes ago",
      icon: <Zap className="h-4 w-4" />
    },
    {
      id: "3",
      type: "warning",
      title: "High Gas Usage",
      description: "Deployment cost exceeded $5 threshold",
      timestamp: "1 hour ago",
      icon: <AlertTriangle className="h-4 w-4" />
    },
    {
      id: "4",
      type: "error",
      title: "Deployment Failed",
      description: "Smart contract compilation error",
      timestamp: "2 hours ago",
      icon: <XCircle className="h-4 w-4" />
    },
    {
      id: "5",
      type: "info",
      title: "Contract Generated",
      description: "ERC-721 NFT contract created successfully",
      timestamp: "3 hours ago",
      icon: <FileText className="h-4 w-4" />
    },
    {
      id: "6",
      type: "success",
      title: "Code Review Complete",
      description: "Security audit passed with 95% score",
      timestamp: "5 hours ago",
      icon: <CheckCircle className="h-4 w-4" />
    }
  ]

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-1">Recent Activity</h2>
        <p className="text-muted-foreground">Your latest AI development activity</p>
      </div>
      
      <div className="space-y-1 max-h-80 overflow-y-auto">
        {activities.map((activity) => (
          <ActivityItemComponent key={activity.id} activity={activity} />
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          View All Activity →
        </button>
      </div>
    </div>
  )
}
