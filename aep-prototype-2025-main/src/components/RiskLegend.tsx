import { Card } from "@/components/ui/card";
import { AlertCircle, AlertTriangle, Activity, CheckCircle } from "lucide-react";

const RiskLegend = () => {
  const riskLevels = [
    {
      level: "Critical",
      color: "text-risk-critical",
      icon: AlertCircle,
      description: "Immediate action required",
    },
    {
      level: "High",
      color: "text-risk-high",
      icon: AlertTriangle,
      description: "Priority maintenance needed",
    },
    {
      level: "Medium",
      color: "text-risk-medium",
      icon: Activity,
      description: "Monitor closely",
    },
    {
      level: "Low",
      color: "text-risk-low",
      icon: CheckCircle,
      description: "Normal operation",
    },
  ];

  return (
    <Card className="bg-card border-border p-4 shadow-card">
      <h3 className="text-sm font-semibold text-foreground mb-3">Risk Levels</h3>
      <div className="space-y-2">
        {riskLevels.map(({ level, color, icon: Icon, description }) => (
          <div key={level} className="flex items-center gap-3 group hover:bg-secondary/50 p-2 rounded-md transition-colors">
            <Icon className={`w-4 h-4 ${color}`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{level}</p>
              <p className="text-xs text-muted-foreground truncate">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RiskLegend;
