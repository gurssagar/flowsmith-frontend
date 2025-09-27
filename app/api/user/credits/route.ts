import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { userQueries } from '@/lib/db/queries'
import { userPlanQueries } from '@/lib/db/chat-queries'

export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user from database
    const user = await userQueries.findByEmail(session.user.email)
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Get user's current plan
    const plan = await userPlanQueries.getCurrentPlan(user.id)
    
    // Calculate remaining credits
    const remainingCredits = Math.max(0, user.requestsLimit - user.requestsUsed)
    const isNewUser = user.requestsUsed === 0 && user.requestsLimit === 10

    return NextResponse.json({
      success: true,
      credits: {
        used: user.requestsUsed,
        limit: user.requestsLimit,
        remaining: remainingCredits,
        isNewUser,
        plan: user.plan,
        planName: plan?.planName || 'free',
        features: plan?.features || ['basic_chat'],
        canMakeRequest: remainingCredits > 0
      },
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        plan: user.plan,
        isActive: user.isActive,
        lastLoginAt: user.lastLoginAt?.toISOString()
      }
    })
  } catch (error) {
    console.error('Error getting user credits:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { action, amount } = body

    // Get user from database
    const user = await userQueries.findByEmail(session.user.email)
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    let updatedUser

    switch (action) {
      case 'use_credit':
        // Use a credit (increment requestsUsed)
        if (user.requestsUsed >= user.requestsLimit) {
          return NextResponse.json({ 
            error: 'No credits remaining',
            credits: {
              used: user.requestsUsed,
              limit: user.requestsLimit,
              remaining: 0
            }
          }, { status: 400 })
        }

        updatedUser = await userQueries.update(user.id, {
          requestsUsed: user.requestsUsed + 1
        })
        break

      case 'add_credits':
        // Add credits (increase requestsLimit)
        if (!amount || amount <= 0) {
          return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
        }

        updatedUser = await userQueries.update(user.id, {
          requestsLimit: user.requestsLimit + amount
        })
        break

      case 'reset_credits':
        // Reset monthly credits (for paid plans)
        if (user.plan === 'free') {
          return NextResponse.json({ error: 'Cannot reset credits for free plan' }, { status: 400 })
        }

        updatedUser = await userQueries.update(user.id, {
          requestsUsed: 0
        })
        break

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    const remainingCredits = Math.max(0, updatedUser.requestsLimit - updatedUser.requestsUsed)

    return NextResponse.json({
      success: true,
      message: `Credits ${action} successful`,
      credits: {
        used: updatedUser.requestsUsed,
        limit: updatedUser.requestsLimit,
        remaining: remainingCredits,
        canMakeRequest: remainingCredits > 0
      }
    })
  } catch (error) {
    console.error('Error updating user credits:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
