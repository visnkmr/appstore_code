'use client'
import React, { useState, useMemo } from 'react';
import { indiotherproj } from './printindiproj';
import { Search, Filter } from 'lucide-react';

interface App {
  title: string;
  content: string;
  image: string;
  [key: string]: any;
}

interface FilteredListProps {
   appst: App[];
   searchQuery?: string;
   onSearchChange?: (query: string) => void;
}

function FilteredList({ appst, searchQuery = '', onSearchChange }: FilteredListProps) {

  const filteredList = useMemo(() => {
    if (!appst) return [];

    if (searchQuery.trim().length > 1) {
      return appst.filter(item =>
        item.image &&
        (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         item.content.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      return appst.filter(item => item.image);
    }
  }, [searchQuery, appst]);

  if (!appst || appst.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground">
          <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Loading applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6" role="main" aria-label="Applications list">
      {/* Apps Count and Filter Info */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Filter className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-muted-foreground" aria-live="polite">
            {filteredList.length} app{filteredList.length !== 1 ? 's' : ''} available
          </span>
        </div>
      </div>

      {/* Applications Grid */}
      <div
        className="app-grid"
        role="grid"
        aria-label="Applications grid"
        aria-rowcount={Math.ceil(filteredList.length / 3)}
      >
        {filteredList.map((item, index) => (
          <div
            key={item.title || index}
            // className="fade-in-up"
            role="gridcell"
            aria-label={`Application: ${item.title}`}
          >
            {indiotherproj(item)}
          </div>
        ))}
      </div>

      {/* Enhanced Empty State */}
      {filteredList.length === 0 && (
        <div className="text-center py-16 px-4" role="status" aria-live="polite">
          <div className="w-16 h-16 bg-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">No apps found</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            Try different search terms or browse all available applications.
          </p>
        </div>
      )}
    </div>
  );
}

export default FilteredList;