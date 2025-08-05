import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, User, Menu, Plus } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FundRaise
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Discover
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              How it works
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Success stories
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex relative flex-1 max-w-md mx-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search campaigns..."
              className="pl-10 bg-muted/50"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button className="hidden md:flex bg-gradient-primary hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Start Campaign
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search campaigns..."
                  className="pl-10 bg-muted/50"
                />
              </div>
              
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Discover
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  How it works
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Success stories
                </Button>
              </div>
              
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                <Plus className="w-4 h-4 mr-2" />
                Start Campaign
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}