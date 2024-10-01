"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

interface GenericFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit?: (event : React.SyntheticEvent) => void;
  isLoading?: boolean
  buttonText: string;
}

export function GenericForm({ className, onSubmit, buttonText = 'שלח',isLoading = false, children ,...props }: GenericFormProps) {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          {children}
          <Button type='submit' disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  )
}