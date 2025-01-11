import WeatherDisplay from "@/components/WeatherDisplay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      <div className="flex justify-end gap-4 p-4">
        <Link to="/closet">
          <Button variant="outline">View Closet</Button>
        </Link>
        <Button variant="outline" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
      <WeatherDisplay />
    </div>
  );
};

export default Index;