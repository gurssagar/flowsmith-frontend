import { NextResponse } from "next/server"

export async function GET() {
  // Mock data for dashboard statistics
  const stats = {
    usage: {
      apiCalls: 2847,
      tokensProcessed: 1200000,
      avgResponseTime: 1.2,
      successRate: 99.8
    },
    costs: {
      total: 71.87,
      budget: 200.00,
      breakdown: [
        { service: "AI Model Usage", amount: 47.32, usage: "1.2M tokens", percentage: 78 },
        { service: "API Requests", amount: 12.45, usage: "2,847 calls", percentage: 45 },
        { service: "Storage", amount: 3.20, usage: "2.1 GB", percentage: 15 },
        { service: "Deployments", amount: 8.90, usage: "12 deployments", percentage: 32 }
      ]
    },
    timeline: [
      { time: "00:00", requests: 45, success: 42, errors: 3 },
      { time: "04:00", requests: 32, success: 30, errors: 2 },
      { time: "08:00", requests: 78, success: 75, errors: 3 },
      { time: "12:00", requests: 95, success: 92, errors: 3 },
      { time: "16:00", requests: 120, success: 115, errors: 5 },
      { time: "20:00", requests: 88, success: 85, errors: 3 },
      { time: "24:00", requests: 65, success: 62, errors: 3 }
    ],
    recentActivity: [
      {
        id: "1",
        type: "success",
        title: "Contract Deployed",
        description: "NFT Marketplace contract deployed to testnet",
        timestamp: "2 minutes ago"
      },
      {
        id: "2",
        type: "success", 
        title: "AI Optimization Complete",
        description: "Gas usage reduced by 23% in Token contract",
        timestamp: "15 minutes ago"
      },
      {
        id: "3",
        type: "warning",
        title: "High Gas Usage",
        description: "Deployment cost exceeded $5 threshold",
        timestamp: "1 hour ago"
      }
    ]
  }

  return NextResponse.json(stats)
}
