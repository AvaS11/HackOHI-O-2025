import MapView from "@/components/MapView";
import ChatInterface from "@/components/ChatInterface";
import RiskLegend from "@/components/RiskLegend";
import { Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-[2000px] mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Power Grid Monitor</h1>
            <p className="text-muted-foreground">Real-time outage risk analysis & maintenance recommendations</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-180px)]">
          {/* Map Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 h-full min-h-[500px]">
            <MapView />
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-4 h-full">
            {/* Risk Legend */}
            <div className="flex-shrink-0">
              <RiskLegend />
            </div>

            {/* Chat Interface - Takes remaining space */}
            <div className="flex-1 min-h-[400px]">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
