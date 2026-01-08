"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Users, Target, ArrowUpRight, Activity, Zap } from "lucide-react"

export function DashboardPreview() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/30 bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header Bar */}
      <div className="h-12 bg-secondary/50 border-b border-border/30 flex items-center px-4 gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 h-6 bg-background/80 rounded-md mx-4" />
        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30" />
      </div>

      {/* Dashboard Content */}
      <div className="p-6 space-y-6 bg-gradient-to-br from-secondary/10 to-background">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Active Campaigns", value: "24", change: "+12%", icon: Target, color: "text-blue-500" },
            { label: "Total Reach", value: "2.4M", change: "+28%", icon: Users, color: "text-green-500" },
            { label: "Engagement", value: "8.2%", change: "+5.3%", icon: Activity, color: "text-purple-500" },
            { label: "ROI", value: "340%", change: "+45%", icon: TrendingUp, color: "text-orange-500" },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-lg p-4 border border-border/30 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                  <span className="text-xs font-medium text-green-500 flex items-center gap-1">
                    {stat.change}
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Chart Area */}
        <div className="grid grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 bg-background rounded-lg p-6 border border-border/30 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Campaign Performance</h3>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">7 Days</span>
                <span className="px-2 py-1 bg-secondary text-muted-foreground rounded">30 Days</span>
              </div>
            </div>
            {/* Chart bars */}
            <div className="flex items-end gap-2 h-32">
              {[65, 78, 52, 85, 70, 92, 88, 75, 95, 82, 68, 90].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  className="flex-1 bg-gradient-to-t from-primary/80 to-primary rounded-t hover:from-primary to-primary/60 transition-all cursor-pointer group relative"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-foreground bg-background px-2 py-1 rounded shadow-sm whitespace-nowrap">
                    {height}%
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-background rounded-lg p-4 border border-border/30 shadow-sm"
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {[
                "Campaign launched: Q4 Push",
                "A/B test completed",
                "New client onboarded",
                "Report generated",
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>{activity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { title: "Top Campaign", value: "Brand Awareness", metric: "1.2M impressions" },
            { title: "Best Performer", value: "Email Marketing", metric: "12.5% CTR" },
            { title: "Trending", value: "Social Media", metric: "+34% growth" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-4 border border-primary/10"
            >
              <div className="text-xs text-muted-foreground mb-1">{item.title}</div>
              <div className="font-semibold text-foreground mb-1">{item.value}</div>
              <div className="text-xs text-primary font-medium">{item.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

