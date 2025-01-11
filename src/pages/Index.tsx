import WeatherDisplay from "@/components/WeatherDisplay";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message,
      });
    }
  };

  return (
    <div>
      <div className="flex justify-end p-4">
        <Button variant="outline" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
      <WeatherDisplay />
    </div>
  );
};

export default Index;