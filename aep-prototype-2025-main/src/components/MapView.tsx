import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Activity, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

const MapView = () => {
  // Sample data for demonstration
  const powerLines = [
    { id: 1, name: "Line A-1", risk: "critical", status: "Urgent", position: { top: "20%", left: "30%" } },
    { id: 2, name: "Line B-3", risk: "high", status: "High Priority", position: { top: "45%", left: "60%" } },
    { id: 3, name: "Line C-7", risk: "medium", status: "Monitor", position: { top: "65%", left: "25%" } },
    { id: 4, name: "Line D-2", risk: "low", status: "Good", position: { top: "30%", left: "70%" } },
    { id: 5, name: "Line E-9", risk: "high", status: "High Priority", position: { top: "75%", left: "55%" } },
  ];

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "critical":
        return <AlertCircle className="w-4 h-4" />;
      case "high":
        return <AlertTriangle className="w-4 h-4" />;
      case "medium":
        return <Activity className="w-4 h-4" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "critical":
        return "text-risk-critical";
      case "high":
        return "text-risk-high";
      case "medium":
        return "text-risk-medium";
      default:
        return "text-risk-low";
    }
  };

  return (
    <Card className="h-full bg-card border-border shadow-card overflow-hidden">
      <div className="h-full relative bg-gradient-to-br from-background to-secondary/20">
        {/* Map Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-primary/20" />
            ))}
          </div>
        </div>

        {/* Map Title */}
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
            <MapPin className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Power Grid Overview</h2>
          </div>
        </div>

        {/* Power Line Markers */}
        {powerLines.map((line) => (
          <div
            key={line.id}
            className="absolute group cursor-pointer animate-in fade-in duration-700"
            style={{ top: line.position.top, left: line.position.left }}
          >
            <div className={`${getRiskColor(line.risk)} transition-transform hover:scale-125 duration-300`}>
              {getRiskIcon(line.risk)}
            </div>
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
                <p className="font-semibold text-sm text-foreground">{line.name}</p>
                <p className="text-xs text-muted-foreground">{line.status}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Connecting Lines (simulated power grid) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <line x1="30%" y1="20%" x2="60%" y2="45%" stroke="hsl(var(--primary))" strokeWidth="2" />
          <line x1="60%" y1="45%" x2="25%" y2="65%" stroke="hsl(var(--primary))" strokeWidth="2" />
          <line x1="60%" y1="45%" x2="70%" y2="30%" stroke="hsl(var(--primary))" strokeWidth="2" />
          <line x1="25%" y1="65%" x2="55%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="2" />
        </svg>

        {/* Instructions Overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            Hover over markers for details • Ready for dynamic map data import
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MapView;
