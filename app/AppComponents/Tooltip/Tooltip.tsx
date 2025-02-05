import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface GenericTooltipProps {
    children: React.ReactNode;
    content: string;
}

const GenericTooltip: React.FC<GenericTooltipProps> = ({children, content}) => {
    console.log("content", content)
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default GenericTooltip