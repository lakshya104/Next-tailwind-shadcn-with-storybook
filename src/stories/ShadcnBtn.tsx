// import { Button } from "@/components/ui/button";
import { Button } from "../components/ui/button";
import React from "react";
import { Loader2 } from "lucide-react";

interface ShadcnBtnProps {
  variant?: "outline" | "secondary" | "destructive" | "ghost" | "link";
  title: string;
  icon?: React.ElementType<{ className?: string }>;
  className?: string;
  iconClassName?: string;
  disable?: boolean;
  loader?: boolean;
  onClick?: () => void;
}

const ShadcnBtn: React.FC<ShadcnBtnProps> = ({
  variant = "destructive",
  title,
  icon: Icon,
  className,
  iconClassName,
  disable = false,
  loader = false,
  onClick,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      className={className}
      disabled={disable}
      onClick ={onClick}
      {...props}
    >
      {loader && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {Icon && <Icon className={iconClassName} />}
      {title}
    </Button>
  );
};

export default ShadcnBtn;
