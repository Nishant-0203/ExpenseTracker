import { useState } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterBarProps {
  filters: {
    searchText: string
    category: string
    startDate: string
    endDate: string
    minAmount: string
    maxAmount: string
  }
  onFilterChange: (filters: any) => void
  onResetFilters: () => void
  categories: string[]
}

export default function FilterBar({ filters, onFilterChange, onResetFilters, categories }: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search expenses..."
            className="pl-8"
            value={filters.searchText}
            onChange={(e) => onFilterChange({ searchText: e.target.value })}
          />
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowFilters(!showFilters)}
          className={showFilters ? "bg-muted" : ""}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
        {(filters.category || filters.startDate || filters.endDate || 
          filters.minAmount || filters.maxAmount) && (
          <Button variant="ghost" size="sm" onClick={onResetFilters}>
            <X className="mr-2 h-4 w-4" />
            Reset
          </Button>
        )}
      </div>
      
      {showFilters && (
        <Card>
          <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="category">Category</Label>
              <Select 
                value={filters.category} 
                onValueChange={(value) => onFilterChange({ category: value })}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="date-range">Date Range</Label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  id="start-date"
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => onFilterChange({ startDate: e.target.value })}
                />
                <Input
                  id="end-date"
                  type="date"
                  value={filters.endDate}
                  onChange={(e) => onFilterChange({ endDate: e.target.value })}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="amount-range">Amount Range</Label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  id="min-amount"
                  type="number"
                  placeholder="Min"
                  value={filters.minAmount}
                  onChange={(e) => onFilterChange({ minAmount: e.target.value })}
                />
                <Input
                  id="max-amount"
                  type="number"
                  placeholder="Max"
                  value={filters.maxAmount}
                  onChange={(e) => onFilterChange({ maxAmount: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}